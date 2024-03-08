import React from 'react'
import './header.css'
const Header = () => {
  return (
    <div style={{display:"flex", justifyContent:"space-around", borderBottom:"1px solid grey", alignItems:"center", height:"14vh", fontWeight:"bold"}}>
   <div><h1 id="headerh1">Geekfoods</h1>
   </div>
   <div>
    <ul style={{listStyle:"none", display:"flex", gap:"4vw"}} id="ulList">
        <li style={{color:"blue"}}>Home</li>
        <li>Quotes</li>
        <li>Resturants</li>
        <li>Foods</li>
        <li>Contact</li>

    </ul>
   </div>
   <button  id="btn">Get started</button>
    </div>
  )
}

export default Header