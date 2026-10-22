
import './App.css'

// components

import HeroComponent from './components/Hero';
import NavComponent from './components/Navigation';
import FooterComponent from './components/Footer';
import TopChoiceComponent from './components/Topchoice';
import ShowBurgerComponent from './components/ShowBurger';
import LimitedMenuComponent from './components/LimitedAccessMenu';
import MeetChefsComponent from './components/Chefs';
import MapComponent from './components/onMap';
//
function App() {
  

  return (
    <>
    <NavComponent/>
    <HeroComponent/>
    <TopChoiceComponent/>
    <ShowBurgerComponent/>
    <LimitedMenuComponent/>
    <MapComponent/>
    <MeetChefsComponent/>
    <FooterComponent/>
    </>
  )
}

export default App;
