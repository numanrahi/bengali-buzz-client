import React from 'react';
import Header from '../shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
// import 'Main.css' 

const Main = () => {
    return (
        <div className='main-59'>
            <Header></Header>
            <Outlet></Outlet>
            <Footer className ="mt-5"></Footer>
        </div>
    );
};

export default Main;