export default function Card({carro}){
   const urlId = carro.url.slice(17)
    return (
       <div>
      <iframe width="560" height="315" src={`https://www.youtube.com/embed/` + urlId.url.slice(17)} 
      title="YouTube video player" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      allowfullscreen></iframe>
       </div>
    )
}
