import React from 'react';
import "./Home.css";
import Cards from "../Cards/Cards";

const Home = () => {
    return (
        <div>
            <div className="banner">
                <div className="banner-title">
                    <h1>Home Page</h1>
                </div>
                <div className="banner-container">
                    <section className="banner-header">
                        <h1>Flexbox Example Site</h1>
                        <p>This website was created by Ryku Prime to help learn the basics of flexbox.
                            Flexbox is a very important and useful tool in CSS.</p>
                    </section>
                    <img src="https://traversymedia.com/images/grid.svg" alt=""/>
                </div>
            </div>
            <Cards/>
        </div>
    );
};

export default Home;