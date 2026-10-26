import React,{useState,useEffect,useRef} from "react";
import {PHOTOS} from "../photos";

export const IC={cam:"M3 8h4l2-3h6l2 3h4v11H3zM12 17a4 4 0 100-8 4 4 0 000 8z",phone:"M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z",mail:"M3 6h18v12H3zM3 7l9 7 9-7",pin:"M12 21s7-6.2 7-11a7 7 0 10-14 0c0 4.8 7 11 7 11zM12 12a2.5 2.5 0 100-5 2.5 2.5 0 000 5z",arr:"M7 17L17 7M8 7h9v9",chk:"M5 12l5 5 9-10",play:"M8 5v14l11-7z",fb:"M14 8h3V4h-3a4 4 0 00-4 4v3H7v4h3v6h4v-6h3l1-4h-4V8z",ig:"M7 3h10a4 4 0 014 4v10a4 4 0 01-4 4H7a4 4 0 01-4-4V7a4 4 0 014-4zM12 8a4 4 0 100 8 4 4 0 000-8z",in:"M4 9h4v11H4zM6 4a2 2 0 100 4 2 2 0 000-4zM10 9h4v2c1-2 6-3 6 2v7h-4v-6c0-3-4-3-4 0v6h-4z",tree:"M12 3v18M6 9l6-6 6 6M7 15l5-5 5 5",stic:"M4 5h16v11H4zM8 20h8M12 16v4",je:"M4 8h16v11H4zM9 8V5h6v3",asso:"M9 11a3 3 0 100-6 3 3 0 000 6zM3 20c0-3 3-5 6-5s6 2 6 5M17 11a2.5 2.5 0 100-5M17 15c3 0 4 2 4 4",act:"M4 6h16v14H4zM4 10h16M8 3v4M16 3v4"};

export const Ic=({n,s=20,f})=><svg width={s} height={s} viewBox="0 0 24 24" fill={f?"currentColor":"none"} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={IC[n]}/></svg>;

export const Ar=()=><span className="ar"><Ic n="arr" s={16}/></span>;

/* Cadre photo : id = identifiant, cap = photo suggérée, r = ratio */
export const Pic=({id,cap,r,cls="",par,children})=>{
  const src=PHOTOS[id];
  return <div className={"pic "+cls+(src?" has":"")} style={r?{aspectRatio:r}:null} data-par={par}>
    {src?<img src={src} alt={cap||""}/>:<><svg className="mo" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><g stroke="#ee7f86" strokeWidth="2" fill="none" opacity=".5"><path d="M0 230H80L115 265H210"/><path d="M400 55H330L295 20"/><path d="M0 70H55L85 40"/><path d="M400 250H330L300 220"/></g><g fill="#ee7f86"><circle cx="210" cy="265" r="5"/><circle cx="295" cy="20" r="5"/><circle cx="85" cy="40" r="5"/><circle cx="300" cy="220" r="5"/></g></svg>
    <div className="ph"><Ic n="cam" s={15}/><span>Photo{r?" "+r.replace("/",":"):""} · {cap}</span></div></>}
    {children}
  </div>;
};

export function Reveal({children,className="",as:T="div",delay=0,...rest}){
  const r=useRef();const [v,setV]=useState(false);
  useEffect(()=>{const io=new IntersectionObserver(([e])=>{if(e.isIntersecting){setV(true);io.disconnect()}},{threshold:.1});io.observe(r.current);return()=>io.disconnect()},[]);
  return <T ref={r} className={"reveal"+(v?" in ":" ")+className} style={{transitionDelay:delay+"ms"}} {...rest}>{children}</T>;
}

export function Count({to}){
  const [n,setN]=useState(0);const r=useRef();
  useEffect(()=>{const io=new IntersectionObserver(([e])=>{if(!e.isIntersecting)return;io.disconnect();const t0=performance.now();const f=t=>{const p=Math.min((t-t0)/1100,1);setN(Math.round(to*(1-Math.pow(1-p,3))));if(p<1)requestAnimationFrame(f)};requestAnimationFrame(f)});io.observe(r.current);return()=>io.disconnect()},[to]);
  return <b ref={r}>{n}</b>;
}

export const Head=({t,s,prov,c})=><Reveal className={"head"+(c?" c":"")}><h2>{t}</h2>{s&&<p className="sub">{s}</p>}{prov&&<span className="badge warm">Contenu provisoire à valider</span>}</Reveal>;

export const Statement=({t})=>{
  const w=t.split(" ");const r=useRef();const [k,setK]=useState(0);
  useEffect(()=>{const on=()=>{const b=r.current.getBoundingClientRect();const p=Math.min(1,Math.max(0,(innerHeight*.8-b.top)/(b.height+innerHeight*.25)));setK(Math.round(p*w.length))};on();addEventListener("scroll",on,{passive:true});return()=>removeEventListener("scroll",on)},[]);
  return <p ref={r} className="st" aria-label={t}>{w.map((x,i)=><span key={i} className={i<k?"on":""} aria-hidden="true">{x} </span>)}</p>;
};

export const Words=({t,d=0})=>t.split(" ").map((w,i,a)=><React.Fragment key={i}><span className="wd" style={{animationDelay:(d+i)*70+"ms"}}>{w}</span>{i<a.length-1?" ":""}</React.Fragment>);
