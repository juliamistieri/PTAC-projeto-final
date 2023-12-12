import React from "react"

export default function Card({carros}){
   const urlId = carros.url.slice(17);
    return (
       <div>
      <iframe width="560" height="315" src={`https://www.youtube.com/embed/${urlId}`}
      title="YouTube video player"
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      allowfullscreen></iframe>
       </div>
    )
};