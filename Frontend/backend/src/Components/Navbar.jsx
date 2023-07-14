import React from 'react'
import "../Components/Style.css"
import { Routes, Route } from 'react-router-dom'
import img1 from "../Components/image/logo-png.png";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Navbar = () => {
    const [showLoginForm, setShowLoginForm] = useState(false);
    const Router = useNavigate();

    const handleAccountClick = () => {
        setShowLoginForm(!showLoginForm);
    };



    function handleRegister() {
        Router('/register');
    }

    function handleLogin() {
        Router('/Login');
    }
    const [showMenu, setShowMenu] = useState(false);

    const handleMenuToggle = () => {
        setShowMenu(!showMenu);
    };
    function handleLogout() {
        localStorage.removeItem("CurrentUser");
        Router('/');
        alert("Logged out successfully");
    }
    function handlemen() {
        Router('/Men');
    }
    function handlewomen() {
        Router('/Women');
    }
    function handlekids() {
        Router('/Kids');
    }
    function handlenew() {
        Router('/New');
    }
    function handlechat() {
        Router('/Chat');
    }
    function handleHome() {
        Router('/');
    }
    function handleHomes() {
        Router('/');
    }
    return (
        <>
            <div id="navbar">
                <div id="imglogo">
                    <img id="logoimg" src={img1} />
                </div>
                <div id="mmdiv">
                    <div id="menu-icon" onClick={handleMenuToggle}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256">
                            <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path>
                        </svg>
                    </div>
                    {showMenu && (
                        <div id="dropdown-menu">
                                <div onClick={handleRegister} id="menu-item">Register</div>
                                <div onClick={handleLogin} id="menu-item">Login</div>
                            <div onClick={handleHome} id="menu-item"> Home</div>
                            <div onClick={handlemen} id="menu-item"> MEN</div>
                            <div onClick={handlewomen} id="menu-item"> WOMEN</div>
                            <div onClick={handlekids} id="menu-item">Kids</div>
                            <div onClick={handlenew} id="menu-item">Newly LAUNCHED</div>
                            <div onClick={handleLogout} id="menu-item">Logout</div>
                          
                        
                            
                        </div>
                    )}
                </div>
                <div id="sale" onClick={handleHomes}>
                    Home
                </div>
                <div id="men" onClick={handlemen}>
                    MEN
                </div>
                <div id="women" onClick={handlewomen}>
                    WOMEN
                </div>
                <div id="kids" onClick={handlekids}>
                    KIDS
                </div>
                <div id="newL" onClick={handlenew}>
                    NEWLY LAUNCHED
                </div>
                <div id="loginicon">
                    <svg onClick={handleAccountClick} xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256">
                        <path
                            d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM74.08,197.5a64,64,0,0,1,107.84,0,87.83,87.83,0,0,1-107.84,0ZM96,120a32,32,0,1,1,32,32A32,32,0,0,1,96,120Zm97.76,66.41a79.66,79.66,0,0,0-36.06-28.75,48,48,0,1,0-59.4,0,79.66,79.66,0,0,0-36.06,28.75,88,88,0,1,1,131.52,0Z">
                        </path>
                    </svg>
                    {/* <span>{username}</span> */}

                    {showLoginForm && (
                        <div class="LoginForm">


                            <div>
                                <button onClick={handleLogin} id="T10">Login</button>
                                <button onClick={handleRegister} id="T10">Register</button>
                                <button id="T10" onClick={handleLogout}>Logout</button>
                            </div>

                        </div>
                    )}

                </div>


            </div>
        </>
    )
}
