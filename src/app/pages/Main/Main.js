import React from 'react';
import Footer from "../../components/Footer/Footer";
import Gallery from "../../components/Gallery/Gallery";
import Header from "../../components/Header/Header";
import {useSelector} from "react-redux";
import './Main.css'

const Main = () => {
    const modal = useSelector(store => store.modal);

    return (
        <div className={'content'}>
            <Header/>
            <Gallery/>
            <Footer/>
            {modal}
        </div>
    );
};

export default Main;