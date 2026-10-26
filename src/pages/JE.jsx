import React,{useState,useEffect,useRef} from "react";
import ReactDOM from "react-dom";
import {Ic,Ar,Pic,Reveal,Count,Head,Statement,Words} from "../components/ui";
import {PAGES,ECO,ART} from "../data";
import LOGO from "../assets/logo.webp";

export function JE(){
  const P=[["Développement","Sites web, applications et solutions logicielles sur mesure."],["Télécom et Réseau","Conception, déploiement et sécurisation d’infrastructures réseau."],["Marketing","Stratégie de communication et visibilité des offres."],["Montage et graphisme","Identité visuelle, supports graphiques et montage vidéo."]];
  const [o,setO]=useState(0);
  return <div className="page wrap">
    <Head t="Junior Entreprise Inova" s="La structure d’élèves-ingénieurs qui réalise des projets en conditions réelles, organisée en quatre pôles." prov/>
    <Pic id="je-banner" r="21/9" cap="Équipe Inova au complet" cls="zoom"/>
    <section><div className="split">
      <div style={{display:"grid",gap:12}}>{P.map(([t,d],i)=><div key={t} className={"acc"+(o===i?" open":"")+" "+["kb","kl","kb","kw"][i%4]}><button aria-expanded={o===i} onClick={()=>setO(i)}>{t}<span className="pl">+</span></button><div className="ab"><div><p className="sub">{d}</p></div></div></div>)}</div>
      <Pic key={o} id={"je-pole-"+(o+1)} r="4/3" cap={"Pôle "+P[o][0]} cls="zoom"/>
    </div></section>
    <section><Head t="Comment une mission se déroule" prov/>
      <Reveal className="steps">{[["Brief","Le client expose son besoin."],["Proposition","Offre et calendrier validés."],["Réalisation","Le pôle concerné produit."],["Livraison","Remise et suivi."]].map(([t,d])=><div key={t}><h3>{t}</h3><p className="sub" style={{fontSize:".9rem",marginTop:4}}>{d}</p></div>)}</Reveal>
    </section>
  </div>;
}
