import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/defaultComponents/Sidebar';
import Footer from '../components/defaultComponents/Footer';
import Header from '../components/defaultComponents/Header';

const Home = () => {
  return(
    <div>
		<Header />
    <Sidebar />
    <div className="footer-container">
    <Footer />
    </div>
    
	</div>
  );
};

export default Home;
