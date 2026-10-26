import React,{useState,useEffect,useRef} from "react";
import {Nav} from "./components/Nav";
import {Footer} from "./components/Footer";
import {Home} from "./pages/Home";
import {Stic} from "./pages/Stic";
import {JE} from "./pages/JE";
import {Asso} from "./pages/Asso";
import {Activites} from "./pages/Activites";
import ParticleField from "./components/ParticleField";
import {PAGES} from "./data";
import LOGO from "./assets/logo.webp";

export default function App(){
  const init=()=>{try{const h=location.hash.slice(1);return PAGES.some(p=>p[0]===h)?h:"accueil"}catch(e){return "accueil"}};
  const [page,setPage]=useState(init);
  const [cu,setCu]=useState("");
  const go=k=>{if(k===page)return window.scrollTo({top:0,behavior:"smooth"});const sw=()=>{setPage(k);try{location.hash=k}catch(e){}window.scrollTo({top:0})};if(matchMedia("(prefers-reduced-motion: reduce)").matches)return sw();setCu("in");setTimeout(()=>{sw();setCu("out")},460);setTimeout(()=>setCu(""),1100)};
  const pg=useRef();
  useEffect(()=>{let cur=null;const on=e=>{const t=e.target;if(!t.closest)return;const s=t.closest(".card,.wcd,.frame,.pc,.gcard,.box,.acc,.steps>div");if(s){const r=s.getBoundingClientRect();s.style.setProperty("--mx",(e.clientX-r.left)+"px");s.style.setProperty("--my",(e.clientY-r.top)+"px")}const b=t.closest(".btn");if(cur&&cur!==b){cur.style.transform="";cur=null}if(b&&!matchMedia("(prefers-reduced-motion: reduce)").matches){const r=b.getBoundingClientRect();b.style.transform="translate("+((e.clientX-r.left-r.width/2)*.12).toFixed(1)+"px,"+((e.clientY-r.top-r.height/2)*.22).toFixed(1)+"px)";cur=b}};addEventListener("pointermove",on);return()=>removeEventListener("pointermove",on)},[]);
  useEffect(()=>{if(matchMedia("(prefers-reduced-motion: reduce)").matches)return;let t=0;const run=()=>{t=0;const y=scrollY,h=document.documentElement.scrollHeight-innerHeight;pg.current.style.transform="scaleX("+(h>0?y/h:0)+")";document.body.classList.toggle("sc",y>20);document.querySelectorAll("[data-par]").forEach(el=>{const r=el.parentElement.getBoundingClientRect();el.style.transform="translate3d(0,"+((r.top+r.height/2-innerHeight/2)*parseFloat(el.dataset.par)).toFixed(1)+"px,0)"})};const on=()=>{if(!t)t=requestAnimationFrame(run)};addEventListener("scroll",on,{passive:true});addEventListener("resize",on);const i=setTimeout(run,60);return()=>{removeEventListener("scroll",on);removeEventListener("resize",on);clearTimeout(i)}},[page]);
  const V={accueil:<Home go={go}/>,stic:<Stic/>,je:<JE/>,asso:<Asso/>,activites:<Activites/>}[page];
  return <><div className="prog" ref={pg}/><div className={"curtain "+cu} aria-hidden="true"><img src={LOGO} alt=""/></div><ParticleField fixed/><Nav page={page} go={go}/><main key={page}>{V}</main><Footer go={go} page={page}/></>;
}
