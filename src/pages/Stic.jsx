import React,{useState,useEffect,useRef} from "react";
import ReactDOM from "react-dom";
import {Ic,Ar,Pic,Reveal,Count,Head,Statement,Words} from "../components/ui";
import {PAGES,ECO,ART} from "../data";
import LOGO from "../assets/logo.webp";

export function Stic(){
  const D={Informatique:["Programmation, systèmes d’exploitation et ingénierie logicielle.",["Algorithmique","Bases de données","Génie logiciel"]],"Télécommunications":["Réseaux, transmission et systèmes de communication.",["Réseaux IP","Transmission","Systèmes de communication"]],EIT:["Domaine associant électronique, réseaux et informatique.",["Électronique numérique","Réseaux","Informatique"]]};
  const [k,setK]=useState("Informatique");const s={Informatique:"info","Télécommunications":"tele",EIT:"eit"}[k];
  return <div className="page wrap">
    <Head t="La STIC" s="La filière Sciences et Technologies de l’Information et de la Communication, à l’École Supérieure de l’Industrie (ESI), au sein de l’INP-HB à Yamoussoukro."/>
    <div className="split">
      <div className="vt" role="tablist">{Object.keys(D).map(x=><button key={x} role="tab" aria-selected={k===x} className={k===x?"on":""} onClick={()=>setK(x)}><h3>{x}</h3><div className="bd"><div><p>{D[x][0]} Débouchés dans l’informatique, les télécommunications et le multimédia.</p><div className="tg">{D[x][1].map(m=><span key={m}>{m}</span>)}</div></div></div></button>)}</div>
      <div className="mosaic" key={k}><Pic id={"stic-"+s+"-1"} cap={k+" : salle ou TP"} cls="t"/><Pic id={"stic-"+s+"-2"} cap="Étudiant devant un écran"/><Pic id={"stic-"+s+"-3"} cap="Travail en groupe"/></div>
    </div>
    <section><Head t="L’AEI-STIC" s="Une association étudiante liée à la filière, qui valorise ce que font les élèves-ingénieurs."/>
      <div className="row3">{[["Valoriser les projets","Faire connaître les projets d’étude, d’application et professionnels, de l’idée à la soutenance.","mission-projets","Présentation d’un projet"],["Valoriser les talents","Mettre en lumière les compétences, parcours et réalisations des étudiants.","mission-talents","Portrait d’un étudiant"],["Communiquer sur la filière","Présenter la formation, ses domaines et ses débouchés par des contenus accessibles.","mission-com","Création de contenus"]].map(([t,d,id,cap],n)=><Reveal key={t} delay={n*80} className={"card "+["kb","kl","kb","kw"][n%4]}><Pic id={id} cap={cap} r="16/10"/><div className="tx"><span className="badge">Mission</span><h3>{t}</h3><p className="sub" style={{fontSize:".92rem"}}>{d}</p><span className="more">Voir<i><Ic n="arr" s={14}/></i></span></div></Reveal>)}</div>
    </section>
  </div>;
}
