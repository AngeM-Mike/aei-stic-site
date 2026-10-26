import React,{useState,useEffect,useRef} from "react";
import ReactDOM from "react-dom";
import {Ic,Ar,Pic,Reveal,Count,Head,Statement,Words} from "../components/ui";
import {PAGES,ECO,ART} from "../data";
import LOGO from "../assets/logo.webp";

export function Nav({page,go}){
  const [o,setO]=useState(false);
  return <nav><div className="pill">
    <button className="brand" onClick={()=>go("accueil")} aria-label="Accueil"><img src={LOGO} alt="Logo AEI STIC"/>AEI STIC</button>
    <button className="burger" aria-label="Menu" aria-expanded={o} onClick={()=>setO(!o)}>{o?"✕":"☰"}</button>
    <div className={"links"+(o?" open":"")}>{PAGES.map(([k,l])=><button key={k} className={page===k?"on":""} onClick={()=>{go(k);setO(false)}}>{l}</button>)}</div>
  </div></nav>;
}
