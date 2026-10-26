import React,{useState} from "react";
import {Ic} from "./ui";
import {PAGES} from "../data";
import LOGO from "../assets/logo.webp";

export function Footer({go,page}){
  const [email,setEmail]=useState("");
  const [message,setMessage]=useState("");
  const prevent=e=>e.preventDefault();
  const socials=[["fb","Facebook"],["ig","Instagram"],["in","LinkedIn"]];
  const submit=e=>{
    e.preventDefault();
    if(!e.currentTarget.checkValidity())return;
    setMessage("Merci ! Votre inscription est enregistrée.");
  };
  const backToTop=()=>window.scrollTo({top:0,behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth"});

  return <footer><div className="wrap footer-wrap"><div className="foot">
    <div className="foot-identity">
      <img src={LOGO} alt="Logo AEI STIC"/>
      <div><b>AEI STIC</b><span>Association des élèves-ingénieurs de la filière STIC · ESI, INP-HB</span></div>
    </div>
    <div className="foot-top">
      <section className="foot-column foot-newsletter" aria-labelledby="footer-news-title">
        <h2 id="footer-news-title">Restez informé</h2>
        <form className="foot-form" onSubmit={submit}>
          <label className="sr-only" htmlFor="footer-email">Votre adresse email</label>
          <input id="footer-email" type="email" value={email} onChange={e=>{setEmail(e.target.value);setMessage("")}} placeholder="Votre adresse email" aria-label="Votre adresse email" aria-describedby="footer-email-status" required/>
          <button type="submit" aria-label="S’inscrire à la newsletter"><Ic n="arr" s={18}/></button>
        </form>
        <span className="foot-form-status" id="footer-email-status" role="status" aria-live="polite">{message}</span>
      </section>
      <section className="foot-column" aria-labelledby="footer-contact-title">
        <h2 id="footer-contact-title">Contact</h2>
        <a href="mailto:contact@aeistic.exemple">contact@aeistic.exemple</a>
        <a href="tel:+2250000000000">+225 00 00 00 00 00</a>
      </section>
      <section className="foot-column" aria-labelledby="footer-address-title">
        <h2 id="footer-address-title">Adresse</h2>
        <p>ESI, INP-HB,<br/>Yamoussoukro</p>
      </section>
      <section className="foot-column" aria-labelledby="footer-social-title">
        <h2 id="footer-social-title">Suivez-nous</h2>
        <div className="foot-social">
          {socials.map(([icon,label])=><a key={label} href="#" onClick={prevent} aria-label={label}><Ic n={icon} s={18}/></a>)}
        </div>
      </section>
    </div>
    <div className="foot-editorial" aria-label="Des projets, des talents, de la créativité à partager">
      <span>Des projets, des talents,</span>
      <strong>de la créativité à partager.</strong>
    </div>
    <div className="foot-bottom">
      <nav className="foot-nav" aria-label="Pied de page">{PAGES.map(([key,label])=><a key={key} href={"#"+key} className={page===key?"active":""} aria-current={page===key?"page":undefined} onClick={e=>{e.preventDefault();go(key)}}>{label}</a>)}</nav>
      <div className="foot-legal"><a href="#" onClick={prevent}>Mentions légales</a><a href="#" onClick={prevent}>Confidentialité</a><span>© 2026 AEI STIC · ESI, INP-HB. Tous droits réservés.</span><button className="foot-up" type="button" onClick={backToTop} aria-label="Retour en haut">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 19V5M6 11l6-6 6 6"/></svg>
      </button></div>
    </div>
  </div></div></footer>;
}
