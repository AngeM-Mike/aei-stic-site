import React,{useState,useEffect,useRef} from "react";
import ReactDOM from "react-dom";
import {Ic,Ar,Pic,Reveal,Count,Head,Statement,Words} from "../components/ui";
import {PAGES,ECO,ART} from "../data";
import LOGO from "../assets/logo.webp";

export function Home({go}){
  const W=[["stic","stic","La STIC et l’AEI-STIC","Informatique, Télécoms et EIT, et la mission de l’association."],["je","je","Junior Entreprise","Inova réalise des projets réels avec ses élèves-ingénieurs."],["asso","asso","Associations de spécialité","MIS et les autres communautés de la filière."]];
  const N=[["stic","La STIC","Découvrir la filière","accueil-stic","Étudiants en salle de cours"],["je","Junior Entreprise","Inova et ses pôles","accueil-je","Équipe de la JE en réunion"],["asso","Associations","Par spécialité","accueil-asso","Groupe d’étudiants d’une association"],["activites","Activités","Temps forts","accueil-act","Événement organisé par l’AEI-STIC"]];
  return <div className="page wrap">
    <div className="hero">
      <div className="txt">
        <span className="badge">ESI · INP-HB · Yamoussoukro</span>
        <h1><Words t="Des projets, des"/> <span className="mark"><Words t="talents" d={3}/></span> <Words t="et de la créativité à partager" d={4}/></h1>
        <p className="sub">L’AEI STIC valorise ce que construisent les élèves-ingénieurs en Sciences et Technologies de l’Information et de la Communication.</p>
        <div className="cta"><button className="btn p" onClick={()=>go("stic")}>Découvrir la STIC<Ar/></button><button className="btn" onClick={()=>go("activites")}>Voir les activités<Ar/></button></div>
      </div>
      <div className="hp">
        <Pic id="hero" r="4/5" par="-.05" cap="Élève-ingénieur souriant, ou groupe d’étudiants"/>
        <div className="chip a"><i><Ic n="stic" s={18}/></i><div><b>Filière STIC</b>École Supérieure de l’Industrie</div></div>
        <div className="chip b"><i><Ic n="act" s={18}/></i><div><b>Projets & talents</b>Mis en avant toute l’année</div></div>
        <div className="chip code" aria-hidden="true"><span className="k">const</span> aei = {"{"}<br/>&nbsp;&nbsp;filière: <span className="s">"STIC"</span>,<br/>&nbsp;&nbsp;mission: <span className="s">"valoriser"</span><br/>{"}"};</div>
      </div>
    </div>
    <Reveal className="stats">
      <div className="stat"><Count to={3}/><span>domaines : informatique, télécoms, EIT</span></div>
      <div className="stat"><Count to={3}/><span>axes : projets, talents, communication</span></div>
      <div className="stat"><Count to={4}/><span>pôles au sein de la JE Inova</span></div>
    </Reveal>
    <section><Statement t="L’AEI STIC fait rayonner les projets, les talents et la créativité des élèves-ingénieurs STIC, de l’idée initiale jusqu’à la soutenance."/></section>
    <section style={{paddingTop:10}}><Head t="Notre écosystème" s="Les structures avec lesquelles l’AEI STIC avance." c/><div className="eco" aria-label="Notre écosystème"><div>{[0,1].map(k=><span key={k}>{ECO.map(([n,l,lg])=><div className="et" key={n}>{lg?<img src={LOGO} alt=""/>:null}<b>{n}</b><small>{l}</small></div>)}</span>)}</div></div></section>
    <section><Reveal className="band">
      <Pic id="band" cap="Grande photo de groupe ou du campus, format paysage" r="16/9" cls="fill"/>
      <div><h2>Une communauté, plusieurs façons de s’engager</h2><p className="sub" style={{margin:"10px auto 0"}}>La filière, la Junior Entreprise et les associations de spécialité.</p></div>
      <div className="wc">{W.map(([k,i,t,d],n)=><div className={"wcd "+["kl","kb","kw"][n]} key={k}><span className="ic"><Ic n={i} s={22}/></span><h3>{t}</h3><p className="sub" style={{fontSize:".9rem"}}>{d}</p><button className="btn p" onClick={()=>go(k)}>En savoir plus<Ar/></button></div>)}</div>
    </Reveal></section>
    <section><Reveal className="gcard">
      <Pic id="mission" r="4/5" par=".04" cap="Étudiants travaillant en équipe"><button className="play" aria-label="Lire la vidéo (exemple)"><Ic n="play" s={20} f/></button></Pic>
      <div><h2>Notre mission</h2><p className="sub" style={{marginTop:10}}>Valoriser les projets, les talents et la créativité de la filière par une communication vivante et engagée.</p>
        <ul>{["Valoriser les projets","Valoriser les talents","Communiquer sur la filière"].map(x=><li key={x}><i><Ic n="chk" s={14}/></i>{x}</li>)}</ul>
        <button className="btn p" onClick={()=>go("stic")}>Découvrir l’AEI-STIC<Ar/></button></div>
    </Reveal></section>
    <section><Head t="Explorer le site" s="Quatre entrées pour tout comprendre." c/>
      <div className="row4">{N.map(([k,t,d,id,cap],i)=><Reveal key={k} delay={i*70} as="button" className="pc zoom" onClick={()=>go(k)}><Pic id={id} cap={cap} r="3/4"/><div className="lab"><div><small>{d}</small><b>{t}</b></div><i><Ic n="arr" s={16}/></i></div></Reveal>)}</div>
    </section>
    <section><Reveal className="dcta"><div><h2>Suivez l’AEI STIC et découvrez les projets de la filière</h2><p>Publications, portraits, projets et temps forts : tout est sur nos réseaux.</p><div className="cta"><a className="btn g" href="https://linktr.ee/link.aeistic" target="_blank" rel="noopener">Ouvrir le Linktree<Ar/></a></div></div>
      <div className="mc"><div><img src={LOGO} alt=""/><span>2026</span></div><div><span>Élève-ingénieur STIC</span><span>ESI · INP-HB</span></div></div></Reveal></section>
  </div>;
}
