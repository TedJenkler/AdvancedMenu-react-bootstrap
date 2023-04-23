import './App.css';
import { useState } from 'react';
import Logo from "./images/logo.svg"
import Hero from "./images/image-hero-mobile.png"
import DataBiz from "./images/client-databiz.svg"
import AudioPhile from "./images/client-audiophile.svg"
import Meet from "./images/client-meet.svg"
import Maker from "./images/client-maker.svg"
import BurgerMenu from "./Components/BurgerMenu"
import MobileMenu from './Components/MobileMenu';

function App() {

  const [mobileMenu, setMobileMenu] = useState(false);

  const handleClick = () => {
    if(mobileMenu === false){
      setMobileMenu(true)
    }
    else {
      setMobileMenu(false)
    }
    console.log(mobileMenu)
  }

  return (
    <div className='container'>
      <div className='row header-part'>
        <div className='col left-header'>
          <img className='logo' src={Logo} alt='logo' />
        </div>
        <div className='col right-header'>
          <BurgerMenu onClick={handleClick}/>
        </div>
      </div>
      {mobileMenu ? null : <MobileMenu />}
      <div className='row hero'>
        <div className='col'>
          <img className='hero-img' src={Hero} alt='hero' />
        </div>
      </div>
      <div className='row'>
        <div className='col text'>
          <h1 className='text-h1'>Make Remote Work</h1>
          <p className='text-p'>Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
          <button className='text-btn'>Learn More</button>
        </div>
      </div>
      <div className='row footer-part'>
        <div className='col footer'>
          <img className='databiz' src={DataBiz} alt='databiz' />
          <img className='audiophile' src={AudioPhile} alt='audiophile' />
          <img className='meet' src={Meet} alt='meet' />
          <img className='maker' src={Maker} alt='maker' />
        </div>
      </div>
    </div>
  );
}

export default App;
