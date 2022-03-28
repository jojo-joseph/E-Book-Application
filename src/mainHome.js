import Sidebar from './sideBar/sideBar';
import Home from './home';
import Footer from './footer';
import './App.css'

function MainHome() {
  return (
    <div >
      <div className='mainHome'>
            <span className='sideBarHome'>
                  <Sidebar/>
            </span>
            <span className='home'>
                  <Home/>
            </span>   
        </div>
        <Footer/>
    </div>
  );
}

export default MainHome;
