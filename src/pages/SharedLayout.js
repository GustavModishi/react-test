import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import Header from '../components/Header';


const Home = () => {
    return (
      <>
      <Header />
      <Sidebar />
      <div className="page">

      {/* <span className="tags top-tags top-tag-html">&lt;/html&gt;</span> */}
        <span className="tags top-tags">&lt;body&gt;</span>

        <Outlet />
        <span className="tags bottom-tags">
          &lt;/body&gt;
          <br />
        
        </span>
      </div>
      <Footer />
    </>
    );
  };
  export default Home;