import React,{useState,useEffect,useRef} from "react";
import ReactDOM from "react-dom";
import {Ic,Ar,Pic,Reveal,Count,Head,Statement,Words} from "../components/ui";
import {PAGES,ECO,ART,ASSOS} from "../data";

export function Asso(){
  const [s,setS]=useState(0);
  const association=ASSOS[s];
  return <div className="page wrap">
    <Head t="Associations de spécialité" s="Chaque spécialité a sa communauté. Sélectionnez-en une pour la découvrir." prov/>
    <div className="row3">{ASSOS.map((a,i)=><Reveal key={a.id} delay={i*70} as="button" className={"card zoom"+(s===i?" sel":"")+" "+["kb","kl","kb","kw"][i%4]} onClick={()=>setS(i)}><Pic id={"asso-"+a.id} cap={"Membres de "+a.name} r="16/10"/><div className="tx"><span className="badge">{a.tagline}</span><h3>{a.name}</h3><p className="sub" style={{fontSize:".9rem"}}>{a.about}</p><span className="more">Voir<i><Ic n="arr" s={14}/></i></span></div></Reveal>)}</div>
    <div className="asso-details" key={s} style={{animation:"fade .4s ease both"}}>
      <span className="badge warm">Contenu provisoire à valider</span>
      <Pic id={"asso-detail-"+association.id} r="21/9" cap={"Bannière de "+association.name} cls="asso-banner">
        <div className="asso-banner-copy"><h2>{association.name}</h2><p>{association.tagline}</p></div>
      </Pic>
      <div className="info-grid">
        <article className="info-card kb"><h3>À propos</h3><p className="sub">{association.about}</p><p className="sub">Depuis : {association.since}</p></article>
        <article className="info-card kl"><h3>Mission</h3><p className="sub">{association.mission}</p></article>
        <article className="info-card kb"><h3>Activités</h3><ul>{association.activities.map(activity=><li key={activity}>{activity}</li>)}</ul></article>
        <article className="info-card kw"><h3>Contact</h3><div className="contact-links">
          <a href={"mailto:"+association.contact.email}><Ic n="mail" s={18}/>{association.contact.email}</a>
          <a href={association.contact.instagram} onClick={e=>e.preventDefault()}><Ic n="ig" s={18}/>Instagram</a>
          <a href={association.contact.linkedin} onClick={e=>e.preventDefault()}><Ic n="in" s={18}/>LinkedIn</a>
        </div></article>
      </div>
      <section className="bureau">
        <Head t="Le bureau" s={"Les membres de "+association.name+"."}/>
        <div className="bureau-grid">{association.bureau.map((member,i)=><article key={member.role} className={"member-card "+["kb","kl","kb","kw"][i%4]}><Pic id={"asso-"+association.id+"-membre-"+(i+1)} r="4/5" cap={member.name}/><div className="tx"><h3>{member.name}</h3><span className="badge">{member.role}</span><p className="sub">{member.promo}</p><p className="sub">{member.bio}</p></div></article>)}</div>
      </section>
    </div>
  </div>;
}
