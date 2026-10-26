import React,{useState,useEffect,useRef} from "react";
import ReactDOM from "react-dom";
import {Ic,Ar,Pic,Reveal,Count,Head,Statement,Words} from "../components/ui";
import {PAGES,ECO,ART} from "../data";
import LOGO from "../assets/logo.webp";

export function Asso(){
  const A=[["MIS","Association de la spécialité MIS","Rassemble les étudiants de la spécialité et ses diplômés autour d’échanges et de projets."],["Spécialité 2","Exemple d’association","Présentez ici la mission, les membres et les événements de l’association."],["Spécialité 3","Exemple d’association","Présentez ici la mission, les membres et les événements de l’association."]];
  const [s,setS]=useState(0);
  return <div className="page wrap">
    <Head t="Associations de spécialité" s="Chaque spécialité a sa communauté. Sélectionnez-en une pour la découvrir." prov/>
    <div className="row3">{A.map((a,i)=><Reveal key={a[0]} delay={i*70} as="button" className={"card zoom"+(s===i?" sel":"")+" "+["kb","kl","kb","kw"][i%4]} onClick={()=>setS(i)}><Pic id={"asso-"+(i+1)} cap={"Membres de "+a[0]} r="4/3"/><div className="tx"><h3>{a[0]}</h3><p className="sub" style={{fontSize:".9rem"}}>{a[1]}</p></div></Reveal>)}</div>
    <div className="split" key={s} style={{marginTop:30,animation:"fade .4s ease both"}}><div className="box"><h3 style={{fontSize:"1.4rem"}}>{A[s][1]}</h3><p className="sub">{A[s][2]}</p><ul>{["Présentation et mission","Bureau et contacts","Événements à venir"].map(x=><li key={x}>{x}</li>)}</ul></div>
      <Pic id={"asso-detail-"+(s+1)} r="16/10" cap={"Événement de "+A[s][0]}/></div>
  </div>;
}
