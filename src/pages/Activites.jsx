import React,{useState,useEffect,useRef} from "react";
import ReactDOM from "react-dom";
import {Ic,Ar,Pic,Reveal,Count,Head,Statement,Words} from "../components/ui";
import {PAGES,ECO,ART,ACTIVITES} from "../data";
import LOGO from "../assets/logo.webp";

export const Article=({e,L,onClose,onNav})=>{
  const ref=useRef();
  useEffect(()=>{const o=document.body.style.overflow;document.body.style.overflow="hidden";ref.current.focus();const k=ev=>{if(ev.key==="Escape")onClose()};addEventListener("keydown",k);return()=>{document.body.style.overflow=o;removeEventListener("keydown",k)}},[]);
  const i=L.findIndex(x=>x[0]===e[0]),older=L[i+1],newer=L[i-1];
  return ReactDOM.createPortal(<div className="ov" onClick={onClose}><article className="sheet" ref={ref} tabIndex={-1} role="dialog" aria-modal="true" aria-label={e[2]} onClick={ev=>ev.stopPropagation()}>
    <button className="x" onClick={onClose} aria-label="Fermer l’article">✕</button>
    <Pic id={"act-"+e[0]} cap={e[5]} r="16/9"/>
    <div className="meta"><span className="badge">{e[4]}</span><time>{e[1]}</time></div>
    <h2>{e[2]}</h2>{ART[e[0]].map((p,j)=><p key={j}>{p}</p>)}
    <span className="badge warm" style={{marginTop:22}}>Article provisoire à compléter</span>
    <div className="nv">{older?<button className="btn" onClick={()=>onNav(older[0])}>Plus ancien : {older[2]}<Ar/></button>:<span/>}{newer?<button className="btn" onClick={()=>onNav(newer[0])}>Plus récent : {newer[2]}<Ar/></button>:<button className="btn p" onClick={onClose}>Retour aux activités<Ar/></button>}</div>
  </article></div>,document.body);
};

export function Activites(){
  const C=["Tous","Communication","Projets","Événement","Sensibilisation"];
  const [f,setF]=useState("Tous");
  const L=ACTIVITES.filter(e=>f==="Tous"||e[4]===f).reverse();
  const [op,setOp]=useState(null);
  return <div className="page wrap">
    <Head t="Activités" s="Les temps forts de l’association, du plus récent au plus ancien."/>
    <div className="tabs">{C.map(c=><button key={c} className={"tab"+(f===c?" on":"")} onClick={()=>setF(c)}>{c}</button>)}</div>
    <div className="row3">{L.map((e,i)=><article className={"frame zoom "+["kb","kl","kb","kw"][i%4]} role="button" tabIndex={0} aria-label={"Lire l’article : "+e[2]} onClick={()=>setOp(e[0])} onKeyDown={ev=>{if(ev.key==="Enter"||ev.key===" "){ev.preventDefault();setOp(e[0])}}} key={e[0]+f} style={{animationDelay:i*60+"ms",cursor:"pointer"}}><Pic id={"act-"+e[0]} cap={e[5]} r="16/10"/><div className="tx"><span className="badge">{e[4]}</span><h3>{e[2]}</h3><p className="sub" style={{fontSize:".9rem"}}>{e[3]}</p><div className="frame-foot"><time>{e[1]}</time><span className="more">Lire l’article<i><Ic n="arr" s={14}/></i></span></div></div></article>)}</div>
    {op&&<Article key={op} e={ACTIVITES.find(x=>x[0]===op)} L={L} onClose={()=>setOp(null)} onNav={setOp}/>}
  </div>;
}
