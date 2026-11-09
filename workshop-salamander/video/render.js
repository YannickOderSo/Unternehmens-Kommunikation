const {chromium}=require('playwright');const fs=require('fs');const path=require('path');
(async()=>{const T=JSON.parse(process.argv[2]||'null');const dir=path.join(__dirname,'frames');fs.rmSync(dir,{recursive:true,force:true});fs.mkdirSync(dir);
const b=await chromium.launch();const p=await b.newPage({viewport:{width:1080,height:1920}});
await p.goto('file://'+path.join(__dirname,'spot.html'));await p.evaluate(()=>document.fonts.ready);await p.waitForTimeout(500);
if(T) await p.evaluate(a=>setT(a),T);
const FPS=30,N=15*FPS;for(let i=0;i<N;i++){await p.evaluate(t=>render(t),i/FPS);await p.screenshot({path:path.join(dir,String(i).padStart(4,'0')+'.jpg'),type:'jpeg',quality:88});}
await b.close();console.log('frames',N);})();
