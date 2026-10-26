import React from "react";
import {ACTIVITES,A_VENIR} from "../data";

export default function NewsTicker({go}){
  const news=[
    ...A_VENIR.map(item=>({title:item.title,category:item.category,date:item.date})),
    ...[...ACTIVITES].sort((a,b)=>b[0].localeCompare(a[0])).map(item=>({title:item[2],category:item[4],date:item[1]}))
  ];
  return <div className="news" aria-label="Actualités à la une">
    <div className="news-l">À la une</div>
    <div className="news-v">
      <div className="news-t">{[0,1].map(group=><div className="news-g" key={group} aria-hidden={group===1}>{news.map((item,i)=><React.Fragment key={item.title}><button className="news-i" onClick={()=>go("activites")} tabIndex={group===1?-1:undefined}><b>{item.category}</b><span>{item.title}</span><span>{item.date}</span></button><span className="news-sep" aria-hidden="true">✦</span></React.Fragment>)}</div>)}</div>
    </div>
  </div>;
}
