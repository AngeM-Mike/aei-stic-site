import React,{useState,useEffect,useRef} from "react";
import ReactDOM from "react-dom";
import {Ic,Ar,Pic,Reveal,Count,Head,Statement,Words} from "../components/ui";
import {PAGES,ECO,ART} from "../data";
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
  const E=[["2025-09-01","1er septembre 2025","Message de rentrée","Un message collectif autour de la réussite et des découvertes.","Communication","Visuel de rentrée"],["2025-09-26","26 septembre 2025","Portrait de Roméo Bomisso","Parcours d’un diplômé MIS 2007, dirigeant dans le secteur des assurances.","Communication","Portrait de l’invité"],["2025-10-01","1er octobre 2025","Focus sur la STIC","Présentation des spécialités, des matières et des débouchés de la filière.","Communication","Visuel Focus STIC"],["2025-10-21","21 octobre 2025","Mise en valeur des UP-PRO","Les projets d’étude, d’application et professionnels des élèves-ingénieurs.","Projets","Présentation d’un projet"],["2026-01-01","1er janvier 2026","Message de nouvelle année","Vœux collectifs autour des opportunités et des projets.","Communication","Visuel de vœux"],["2026-09-05","5 septembre 2026","Journée d’intégration ESI","Accueil des nouveaux élèves-ingénieurs et techniciens supérieurs de première année.","Événement","Photo de la journée"],["2026-10-01","Octobre 2026","Octobre Rose","Sensibilisation au cancer du sein, à la prévention et au soutien.","Sensibilisation","Visuel Octobre Rose"]];
  const C=["Tous","Communication","Projets","Événement","Sensibilisation"];
  const [f,setF]=useState("Tous");
  const L=E.filter(e=>f==="Tous"||e[4]===f).reverse();
  const [op,setOp]=useState(null);
  return <div className="page wrap">
    <Head t="Activités" s="Les temps forts de l’association, du plus récent au plus ancien."/>
    <div className="tabs">{C.map(c=><button key={c} className={"tab"+(f===c?" on":"")} onClick={()=>setF(c)}>{c}</button>)}</div>
    <div className="row3">{L.map((e,i)=><article className={"frame zoom "+["kb","kl","kb","kw"][i%4]} role="button" tabIndex={0} aria-label={"Lire l’article : "+e[2]} onClick={()=>setOp(e[0])} onKeyDown={ev=>{if(ev.key==="Enter"||ev.key===" "){ev.preventDefault();setOp(e[0])}}} key={e[0]+f} style={{animationDelay:i*60+"ms",cursor:"pointer"}}><Pic id={"act-"+e[0]} cap={e[5]} r="4/3"/><div className="tx"><time>{e[1]}</time><h3>{e[2]}</h3><p className="sub" style={{fontSize:".9rem"}}>{e[3]}</p><span className="badge" style={{marginTop:4}}>{e[4]}</span><span className="more">Lire l’article<i><Ic n="arr" s={14}/></i></span></div></article>)}</div>
    {op&&<Article key={op} e={E.find(x=>x[0]===op)} L={L} onClose={()=>setOp(null)} onNav={setOp}/>}
  </div>;
}
