import './App.css';
import Navbar from './navbar/Navbar';
import Header from  './header/Header'
import Brand from './brand/Brand';
import WhatGPT from './WhatGPT/WhatGPT'
import FutureNow from './FutureNow/FutureNow'
import Possibility from './Possibility/Possibility'
import Start from './Start/Start'
import Block from './Block/Block'
import Footer from './Footer/Footer';


function App() {
  return (
    <div className="">
      <div className="gradient_bg">
      <Navbar/>
      <Header/>
      <div className="black">
      <Brand/>
      <WhatGPT/>
      <FutureNow/>
      <Possibility/>
      <Start/>
      <Block/>
      <Footer/>
      </div>

    </div>
    </div>
  );
}

export default App;
