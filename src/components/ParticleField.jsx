import React,{useEffect,useRef} from "react";
export default function ParticleField({color="74,168,255",fixed=false,density=15000,max=90,link=140,className=""}){
  const ref=useRef();
  useEffect(()=>{
    const cv=ref.current,ctx=cv.getContext("2d");
    const reduce=matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w=0,h=0,pts=[],raf=0,run=true;
    const init=()=>{
      const r=cv.getBoundingClientRect();w=r.width;h=r.height;
      const dpr=Math.min(devicePixelRatio||1,2);
      cv.width=w*dpr;cv.height=h*dpr;ctx.setTransform(dpr,0,0,dpr,0,0);
      const n=Math.min(w<700?Math.round(max*.45):max,Math.round(w*h/density));
      pts=Array.from({length:n},()=>({x:Math.random()*w,y:Math.random()*h,vx:(Math.random()-.5)*.35,vy:(Math.random()-.5)*.35,r:1.2+Math.random()*2.2}));
    };
    const draw=()=>{
      ctx.clearRect(0,0,w,h);
      if(!reduce)for(const p of pts){p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>w)p.vx*=-1;if(p.y<0||p.y>h)p.vy*=-1;}
      for(let i=0;i<pts.length;i++){
        const a=pts[i];
        for(let j=i+1;j<pts.length;j++){
          const b=pts[j],d=Math.hypot(a.x-b.x,a.y-b.y);
          if(d<link){ctx.strokeStyle="rgba("+color+","+((1-d/link)*.35)+")";ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.stroke();}
        }
        if(a.r>2.6){ctx.fillStyle="rgba("+color+",.12)";ctx.beginPath();ctx.arc(a.x,a.y,a.r*3.2,0,7);ctx.fill();}
        ctx.fillStyle="rgba("+color+",.75)";ctx.beginPath();ctx.arc(a.x,a.y,a.r,0,7);ctx.fill();
      }
    };
    const loop=()=>{if(!run)return;draw();raf=requestAnimationFrame(loop);};
    init();reduce?draw():loop();
    const onResize=()=>{init();if(reduce)draw();};
    const onVis=()=>{run=!document.hidden;if(run&&!reduce){cancelAnimationFrame(raf);loop();}};
    addEventListener("resize",onResize);document.addEventListener("visibilitychange",onVis);
    return()=>{run=false;cancelAnimationFrame(raf);removeEventListener("resize",onResize);document.removeEventListener("visibilitychange",onVis);};
  },[color,density,max,link]);
  return <canvas ref={ref} className={"pf"+(fixed?" fixed":"")+" "+className} aria-hidden="true"/>;
}
