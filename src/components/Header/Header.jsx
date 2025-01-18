import React, { useState } from 'react'
import Logo from '../../assets/logo.png'
import Bars from '../../assets/bars.png'
import {Link} from 'react-scroll'
import './Header.css'
const Header = () => {
  const mobile = window.innerWidth<=768 ? true :false;
  const [menuOpened,setMenuopened] = useState(false)
  return (
    <div className='Header'>
      <img src={Logo} alt="" className='logo'/>
    {
      menuOpened === false && mobile === true ?(
        <div style={{backgroundColor:"var(--appColor)",padding :"0.5rem", borderRadius:"5px"}}
        onClick={()=>{setMenuopened(true)}}
        >
          <img src={Bars} alt=""  style={{width: "1.5rem", height:"1.5rem"}}/>
        </div>
      ) : (
      <ul className='Header-menu'>
        <li>
          <Link onClick={()=>setMenuopened(false)}
          to='hero'
          spy={true}
          smooth={true}
          >Home</Link></li>
        <li>
          <Link
          onClick={()=>setMenuopened(false)}
          to='programs'
          spy={true}
          smooth={true}
          >Programs</Link></li>
        <li>
          <Link 
          onClick={()=>setMenuopened(false)}
          to='Reasons'
          spy={true}
          smooth={true}
          >Why Us</Link></li>
        <li>
          <Link
          onClick={()=>setMenuopened(false)}
          to='plans'
          spy={true}
          smooth={true}
          >Plans</Link></li>
        <li>
          <Link
          onClick={()=>setMenuopened(false)}
          to="testimonials"
          spy={true}
          smooth={true}
          >Testimonials</Link>
          </li>
      </ul>
    )}
    </div>
  )
}

export default Header
