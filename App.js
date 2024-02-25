import Navbar from './components/Navbar';
import Categories from './components/Categories';
import './App.css';
import WebsiteBuilder from './components/WebsiteBuilder';
import SecondCard from './components/SecondCard';
import ThirdCard from './components/ThirdCard';
import FourthCard from './components/FourthCard';
import DealCard from './components/DealCard';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <h1 className="main-heading">Best website builders in the US</h1>
      <div className="sub-container">
       <hr/>
       <div className="recent-details">
        <>
       <p className="one">Last Updated - February 22 ,2020 </p>
       <p className="two">Advertising Disclosuer</p>
       </>
       <p className="three">Top Relevent</p>
       </div>
       <hr/>
       <Categories/>
       <div className="path">
       <p>Home {`${">"}`} Hoisting for all {`${">"}`} Hosting {`${">"}`} Hosting6  {`${">"}`}  Hosting5 </p>
       </div>
       <WebsiteBuilder/>
       <SecondCard/>
       <ThirdCard/>
       <FourthCard/>
       <h2>Related deals you might like for</h2>
       <div className="dealCard1">
       <DealCard/>
       <DealCard/>
       <DealCard/>
       </div>

       <div className="sign-up">
        <h2 className="sign-para">Sign Up and get exclusive <br/> special deals</h2>
        <div className="middlebtn">
        <input type="search" className="input"/>
        <button type="button" className="sign-btn">Sign Up</button>
        </div>
       </div>
        

      </div>
      <Footer/>
     
    </div>
  );
}

export default App;
