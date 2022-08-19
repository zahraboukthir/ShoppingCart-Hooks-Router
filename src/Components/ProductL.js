import React from 'react'
import ProductC from './ProductC'
import {Link} from 'react-router-dom'

function ProductL({list, HundleAdd}) {
  return (
    <div style={{display:'flex', justifyContent:'space-around', flexWrap:'wrap'}}>
        {list.map(
            (el,i)=><ProductC key={el.id} el={el} HundleAdd={HundleAdd}/>
        )}
    </div>
  )
}

export default ProductL