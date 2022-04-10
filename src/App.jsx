import React from 'react'
import Navbar from "./components/navbar/Navbar";
import Home from "./components/Home/Home";
import Content from "./components/Home/Content";
import Roadmap from "./components/roadmap/Roadmap";
import Scrolling from "./components/roadmap/Scrolling";
import Utility from "./components/Utility/Utility";
import Team from "./components/Team/Team";
import Unlockyourvibe from "./components/abovefooter/Unlockyourvibe";
import Footer from "./components/Footer/Footer";

const App = () => {
  return <div>
    <Navbar/>
    <Home/>
    <Content/>
    <Roadmap/>
    <Scrolling/>
    <Utility/>
    <Team/>
    <Unlockyourvibe/>
    <Footer/>
  </div>;
};

export default App;
