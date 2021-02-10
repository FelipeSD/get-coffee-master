import React from 'react';

// STYLES

import './Home.css';

// COMPONENTS
import Header from '../../components/Header';

// SVGS
import instagram from '../../assets/img/instagram.svg';
import linkedin from '../../assets/img/linkedin.svg';
import twitter from '../../assets/img/twitter.svg';

import shape1 from '../../assets/img/forma1.svg';
import shape2 from '../../assets/img/forma2.svg';
import coffe from '../../assets/img/copo.svg';

const Home = () => {
    return (
        <div>
            <Header />
            <section id="Home">
                <div id="home-container">

                    <p id="title" className="nunito-bold">
                        The best way to get your coffee<br />
                        without leaving the confort<br />
                        of your house
                    </p>

                    <button id="order-button" className="btn btn-bg btn-primary nunito-bold">
                        make your order
                    </button>

                    <div id="social-icons">
                        <a target="_blank" href="https://www.instagram.com/feilipesd/">
                            <img src={instagram} />
                        </a>
                        <a target="_blank" href="https://www.linkedin.com/in/felipe-da-silva-damasceno/">
                            <img src={linkedin} />
                        </a>
                        <img src={twitter} />
                    </div>

                    <div id="shapes">
                        <img className="coffe" src={coffe} />
                        <img className="shape1" src={shape1} />
                        <img className="shape2" src={shape2} />
                    </div>

                </div>

            </section>
        </div>
    )
}

export default Home;