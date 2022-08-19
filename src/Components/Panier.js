import React, { useState } from 'react'
import Table from 'react-bootstrap/Table';
import TrCard from './TrCard';


function Panier({pn,dl,pantotal,total}) {
  console.log(pn)
  
 
  return (
    <div>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>Product name :</th>
          <th>Product pic :</th>
          <th>Quantity :</th>
          <th>Prix unitaire :</th>
          <th>Prix total :</th>
        </tr>
      </thead>
      <tbody>
        {pn.map(
          (el,i)=><TrCard tl={pantotal} el={el} key={i} dl={dl}/>
        )}
      
        <tr>
          <td>Total</td>
          <td>{total}</td>
        </tr>
      </tbody>
    </Table>
    </div>
  )
}

export default Panier