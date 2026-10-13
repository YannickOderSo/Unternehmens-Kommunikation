#!/usr/bin/env python3
"""Hook für den KI-Nachweis: schreibt jeden Prompt an Claude Code und jede Delegation
an Unteragenten (Agent-Tool oder Workflow) als eine JSON-Zeile in ki-nachweis/rohprotokoll.jsonl."""
import json
import os
import sys
from datetime import datetime

try:
    from zoneinfo import ZoneInfo
    jetzt = datetime.now(ZoneInfo("Europe/Berlin"))
except Exception:
    jetzt = datetime.now().astimezone()

daten = json.load(sys.stdin)
ereignis = daten.get("hook_event_name", "")
eintrag = {"zeit": jetzt.isoformat(timespec="seconds"), "sitzung": daten.get("session_id", "")}

if ereignis == "UserPromptSubmit":
    eintrag.update(art="prompt", prompt=daten.get("prompt", ""))
elif ereignis == "PreToolUse" and daten.get("tool_name") == "Workflow":
    # Ein Workflow startet mehrere Unteragenten; ihre Aufträge stehen wörtlich im Skript.
    eingabe = daten.get("tool_input") or {}
    eintrag.update(
        art="workflow",
        skript=eingabe.get("script") or "",
        skript_datei=eingabe.get("scriptPath") or "",
        name=eingabe.get("name") or "",
        argumente=eingabe.get("args"),
    )
elif ereignis == "PreToolUse":
    eingabe = daten.get("tool_input") or {}
    eintrag.update(
        art="delegation",
        agent_typ=eingabe.get("subagent_type") or "general-purpose",
        beschreibung=eingabe.get("description", ""),
        prompt=eingabe.get("prompt", ""),
    )
else:
    sys.exit(0)

projekt = os.environ.get("CLAUDE_PROJECT_DIR") or os.getcwd()
ziel = os.path.join(projekt, "ki-nachweis", "rohprotokoll.jsonl")
os.makedirs(os.path.dirname(ziel), exist_ok=True)
with open(ziel, "a", encoding="utf-8") as datei:
    datei.write(json.dumps(eintrag, ensure_ascii=False) + "\n")
