// ProductContent.js

import ProductLi from './ProductLi'

export default function ProductContent({data}) {
  const list = data;
  return (
    <div className="content_part">      
      <h2>{list.pageTitle}</h2>
      <p>{list.pageContent}</p>

      <ul>
        { list.products.map((card,idx)=> <ProductLi key={idx} data={card}/> )}
      </ul>
    </div>
  )
}

