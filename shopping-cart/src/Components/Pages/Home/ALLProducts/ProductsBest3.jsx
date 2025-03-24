import { use } from "react"

export const ProductsBest3 = ({curdata}) => {
  console.log(curdata)
    return (            
               <li className="product-best3" key={curdata.id}>
                     <div  className="product-best3-img">
                        <img src={curdata.images?.[0] || curdata.image || 'fallback-image-url.jpg'} alt={curdata.images?.[1] || 'Fallback Alt Text'} loading="lazy" />
                     </div>
                     <div className="product-best3-details">
                       <h4 className="product-best3-title" >{curdata.title}</h4>
                       <p className="product-best3-price">
                         {curdata.price}$ <del>100.0$</del>
                       </p>
                     </div>
                </li>
    )
}