import React,{useState,useEffect,useRef} from "react";
import ReactDOM from "react-dom";
import {Ic,Ar,Pic,Reveal,Count,Head,Statement,Words} from "../components/ui";
import {PAGES,ECO,ART} from "../data";
import LOGO from "../assets/logo.webp";

export function Footer({go}){
  const nop=e=>e.preventDefault();
  return <footer><div className="wrap" style={{width:"min(1240px,100%)"}}><div className="foot">
    <img className="lg" src={LOGO} alt="Logo AEI STIC"/>
    <svg className="mo" viewBox="0 0 800 400" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><g stroke="#fff" strokeWidth="2" fill="none"><path d="M0 300H200L250 350H500"/><path d="M800 80H600L550 30H400"/><path d="M0 100H120L170 50"/><path d="M800 330H680L640 290"/></g></svg>
    <div className="fg">
      <div><h4>Contact</h4><ul><li><Ic n="pin" s={18}/>ESI, INP-HB, Yamoussoukro, Côte d’Ivoire</li><li><Ic n="phone" s={18}/>+225 00 00 00 00 00</li><li><Ic n="mail" s={18}/>contact@aeistic.exemple</li></ul>
        <div className="soc">{[["fb","Facebook"],["ig","Instagram"],["in","LinkedIn"]].map(([i,l])=><a key={l} href="#" onClick={nop}><span style={{display:"flex",gap:10,alignItems:"center"}}><Ic n={i} s={16}/>{l}</span><Ic n="arr" s={14}/></a>)}<a href="https://linktr.ee/link.aeistic" target="_blank" rel="noopener"><span style={{display:"flex",gap:10,alignItems:"center"}}><Ic n="tree" s={16}/>Linktree</span><Ic n="arr" s={14}/></a></div></div>
      <div className="fc"><h3>AEI STIC</h3><em>Projets, talents, créativité</em><div className="cta"><button className="btn g" onClick={()=>go("stic")}>Découvrir la STIC<Ar/></button><button className="btn o" onClick={()=>go("je")}>La Junior Entreprise</button></div></div>
      <div><h4>Accès rapide</h4><div className="ql">{PAGES.map(([k,l])=><a key={k} href={"#"+k} onClick={e=>{e.preventDefault();go(k)}}>{l}</a>)}<a href="#" onClick={nop}>Contact</a></div></div>
    </div>
    <div className="fb"><span>Maquette v1 · coordonnées et liens d’exemple, photos à ajouter</span><div className="lp"><a href="#" onClick={nop}>Mentions légales</a><a href="#" onClick={nop}>Confidentialité</a><span>© 2026</span></div></div>
  </div></div></footer>;
}
