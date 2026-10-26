import React from "react";
import {Ic} from "./ui";
import {PAGES} from "../data";
import LOGO from "../assets/logo.webp";

export function Footer({go,page}){
  const prevent=e=>e.preventDefault();
  const socials=[["fb","Facebook"],["ig","Instagram"],["in","LinkedIn"]];
  return <footer><div className="wrap footer-wrap"><div className="foot">
    <div className="foot-top">
      <div className="foot-brand"><img src={LOGO} alt="Logo AEI STIC"/><div><b>AEI STIC</b><span>Projets, talents, créativité</span></div></div>
      <nav className="foot-nav" aria-label="Navigation de pied de page">{PAGES.map(([key,label])=><a key={key} href={"#"+key} className={page===key?"active":""} aria-current={page===key?"page":undefined} onClick={e=>{e.preventDefault();go(key)}}>{label}</a>)}</nav>
      <div className="foot-social" aria-label="Réseaux sociaux">
        {socials.map(([icon,label])=><a key={label} href="#" onClick={prevent} aria-label={label}><Ic n={icon} s={18}/></a>)}
        <a href="https://linktr.ee/link.aeistic" target="_blank" rel="noopener noreferrer" aria-label="Linktree"><Ic n="tree" s={18}/></a>
      </div>
    </div>
    <div className="foot-rule"/>
    <div className="foot-bottom">
      <div className="foot-contact">
        <span><Ic n="pin" s={16}/>ESI, INP-HB, Yamoussoukro</span>
        <a href="mailto:contact@aeistic.exemple"><Ic n="mail" s={16}/>contact@aeistic.exemple</a>
        <a href="tel:+2250000000000"><Ic n="phone" s={16}/>+225 00 00 00 00 00</a>
      </div>
      <div className="foot-legal"><a href="#" onClick={prevent}>Mentions légales</a><span>·</span><a href="#" onClick={prevent}>Confidentialité</a><span>·</span><span>© 2026 AEI STIC</span></div>
    </div>
  </div></div></footer>;
}
