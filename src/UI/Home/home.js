import React from 'react';
import './home.css';
import Button from 'react-bootstrap/Button';
import { Navbar, NavDropdown, Nav, Form, FormControl } from 'react-bootstrap';
import Home_First from '../../media/images/home/home_first.png'

function Home() {

    
    return (
        <div >
            <div id="first-home-card">
                <h1>On2Retails</h1>
                <input id="first-home-input" placeholder="Search for product"></input>
                <Button id="home-download-btn">Download Catalogue</Button>
                <Button id="home-help-btn">Help</Button>
            </div>
            {/* <div id="second-home-card" >
                <input id="first-home-input" placeholder="Search for product"></input>
            </div> */}
            <div id="home_nav_div">
                <p id="home_p_first">Home</p>
                <div id="home_nav_planter" style={{height:40}}>
                <p id="home_p_first">Planters</p>
                <p id="home_p_first">Planters</p>
                <p id="home_p_first">Planters</p>
                </div>
                <p id="home_p_first">Lamps</p>
                <p id="home_p_first">Gift</p>
                <p id="home_p_first">Garden</p>
            </div>
        </div>
    );
}

export default Home;