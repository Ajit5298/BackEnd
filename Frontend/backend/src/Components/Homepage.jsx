import React from 'react'
import "../Components/Style.css"
import { Routes, Route } from 'react-router-dom'
import img1 from "../Components/image/logo-png.png";
import { useNavigate } from 'react-router-dom';
import { Footer } from './Footer';
import { AuthContext } from '../context/User.context';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { Navbar } from './Navbar';



export const Homepage = () => {
    const [user, setUser] = useState({});
    const { state, login, logout } = useContext(AuthContext);
    console.log(user, "- user updated state")

    useEffect(() => {
        if (state.user) {
            setUser(state?.user)
        } else {
            setUser({});
        }
    }, [state])
    
    const router = useNavigate();
    const [showMenu, setShowMenu] = useState(false);

    const handleMenuToggle = () => {
        setShowMenu(!showMenu);
    };
    function handleHome() {
        Router('/');
    }

    const images = [
        {
            imageUrl: 'https://staticm2.paragonfootwear.com/media/wysiwyg/homepage2021/HeroBanners/Girls_and_boys_desktop_1.jpg',
            linkUrl: 'https://example1.com'
        },
        {
            imageUrl: 'https://dxkvlfvncvqr8.cloudfront.net/media/images/cms-banner/image_path/sparx-1684913470.png',
            linkUrl: 'https://example1.com'
        },
        {
            imageUrl: 'https://staticm2.paragonfootwear.com/media/wysiwyg/Har-Kadam-SaatH-Banner.jpg',
            linkUrl: 'https://example1.com'
        },
        {
            imageUrl: 'https://dxkvlfvncvqr8.cloudfront.net/media/images/cms-banner/image_path/bahamas-1684913475.png',
            linkUrl: 'https://example1.com'
        },
        {
            imageUrl: 'https://dxkvlfvncvqr8.cloudfront.net/media/images/cms-banner/image_path/bahamas-1684913475.png',
            linkUrl: 'https://example1.com'
        },
        {
            imageUrl: 'https://storage.sg.content-cdn.io/in-resources/25c7d1c6-73be-4ff9-b000-0bf110b5c461/Images/userimages/banners/May2023/twinkler_d120508.jpg',
            linkUrl: 'https://example1.com'
        },
    ];
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
      function handleHomes() {
        Router('/');
      }

    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPreviousSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const goToNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

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

    function handleLogout() {
        localStorage.removeItem("CurrentUser");
        Router('/');
        alert("Logged out successfully");
    }

    // Get the username from local storage if available
    const currentUser = JSON.parse(localStorage.getItem("CurrentUser"));
    const username = currentUser ? currentUser.currentUserName : "";


    return (
        <div id="bg">
            <div class="logo">
                <p id="Logo">नणंदकर शू मार्ट</p>
                
                <div id="ilogo">
                    <div id="insta">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256">
                            <path
                                d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z">
                            </path>
                        </svg>
                    </div>
                    <div id="insta">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256">
                            <path
                                d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z">
                            </path>
                        </svg>
                    </div>
                    <div id="insta">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256">
                            <path
                                d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z">
                            </path>
                        </svg>
                    </div>
                </div>
                <div id="phone">
                    <svg id="svg" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000"
                        viewBox="0 0 256 256">
                        <path
                            d="M152.27,37.93a8,8,0,0,1,9.8-5.66,86.22,86.22,0,0,1,61.66,61.66,8,8,0,0,1-5.66,9.8A8.23,8.23,0,0,1,216,104a8,8,0,0,1-7.73-5.94,70.35,70.35,0,0,0-50.33-50.33A8,8,0,0,1,152.27,37.93Zm-2.33,41.8c13.79,3.68,22.65,12.54,26.33,26.33A8,8,0,0,0,184,112a8.23,8.23,0,0,0,2.07-.27,8,8,0,0,0,5.66-9.8c-5.12-19.16-18.5-32.54-37.66-37.66a8,8,0,1,0-4.13,15.46Zm81.94,95.35A56.26,56.26,0,0,1,176,224C96.6,224,32,159.4,32,80A56.26,56.26,0,0,1,80.92,24.12a16,16,0,0,1,16.62,9.52l21.12,47.15,0,.12A16,16,0,0,1,117.39,96c-.18.27-.37.52-.57.77L96,121.45c7.49,15.22,23.41,31,38.83,38.51l24.34-20.71a8.12,8.12,0,0,1,.75-.56,16,16,0,0,1,15.17-1.4l.13.06,47.11,21.11A16,16,0,0,1,231.88,175.08Zm-15.88-2s-.07,0-.11,0h0l-47-21.05-24.35,20.71a8.44,8.44,0,0,1-.74.56,16,16,0,0,1-15.75,1.14c-18.73-9.05-37.4-27.58-46.46-46.11a16,16,0,0,1,1-15.7,6.13,6.13,0,0,1,.57-.77L104,87.15l-21-47a.61.61,0,0,1,0-.12A40.2,40.2,0,0,0,48,80,128.14,128.14,0,0,0,176,208,40.21,40.21,0,0,0,216,173.07Z">
                        </path>
                    </svg>
                    <h1 id="contact">:<a> 9403008925 </a> |<a> 7796403080 </a></h1>
                </div>
            </div>


       <Navbar/>
            <div className="slider">
                <button className="slider-button previous" onClick={goToPreviousSlide}>&#8249;</button>
                <img className="slider-image" src={images[currentIndex].imageUrl} alt={`Image ${currentIndex + 1}`} />
                <button className="slider-button next" onClick={goToNextSlide}>&#8250;</button>
            </div>



            <div>
                <img src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw78fb320b/images/home/Line-Design.svg" />
            </div>
            <div>
                <h2>Best Sellers (men)</h2>
            </div>

            <div class="bestsellers">
                <div id="maindiv">
                    <div id="sibdiv1">Formal Shoes</div>
                    <div id="sibdiv2"><img id="imgfs" src="https://staticm2.paragonfootwear.com/media/catalog/product/cache/5074d18cfdcf25b731fc457aa81f59f8/a/1/a1rb11225gpblk_1.jpg" /></div>
                    <div id="sibdiv3"> Max Black Semi-Formal Shoes</div>
                    <div id="sibdiv4">MRP
                        Rs.1,000.00
                        Rs.1,999.00 ( 50% off )</div>
                    <div id="sibdiv5">Incl. of all taxes</div>
                </div>
                <div id="maindiv">
                    <div id="sibdiv1">Casual shoes</div>
                    <div id="sibdiv2"><img id="imgfs" src="https://staticm2.paragonfootwear.com/media/catalog/product/cache/5074d18cfdcf25b731fc457aa81f59f8/k/1/k1213g_blu_1.jpg" /></div>
                    <div id="sibdiv3">Blue Snug-Fit Anti-Skid Walking Shoes</div>
                    <div id="sibdiv4">
                        MRP
                        Rs.899.00
                        Rs.1,799.00 ( 50% off )
                    </div>
                    <div id="sibdiv5">Incl. of all taxes</div>
                </div>
                <div id="maindiv">
                    <div id="sibdiv1">Sport sandals</div>
                    <div id="sibdiv2"><img id="imgfs" src="https://storage.sg.content-cdn.io/cdn-cgi/image/width=1000,height=1000,quality=75,format=auto,fit=cover,g=top/in-resources/25c7d1c6-73be-4ff9-b000-0bf110b5c461/Images/ProductImages/Source/94691A10_1_nw.jpeg" /></div>
                    <div id="sibdiv3">SPRINT MEN'S SPORTS SANDAL</div>
                    <div id="sibdiv4">
                        MRP
                        Rs.699.00
                        Rs.1,399.00 <br /> ( 50% off )
                    </div>
                    <div id="sibdiv5">Incl. of all taxes</div>
                </div>
                <div id="maindiv">
                    <div id="sibdiv1">School shoes</div>
                    <div id="sibdiv2"><img id="imgfs" src="https://staticm2.paragonfootwear.com/media/catalog/product/cache/3a88550bbe8642ae5e71ba6d62fc1851/f/b/fbk0774b_wht_1.jpg" /></div>
                    <div id="sibdiv3"> Comfortable White School Shoes</div>
                    <div id="sibdiv4">
                        MRP
                        Rs.349.00
                        Rs.699.00<br /> ( 50% off )
                    </div>
                    <div id="sibdiv5">Incl. of all taxes</div>
                </div>
                <div id="maindiv">
                    <div id="sibdiv1">Slipper</div>
                    <div id="sibdiv2"><img id="imgfs" src="https://staticm2.paragonfootwear.com/media/catalog/product/cache/3a88550bbe8642ae5e71ba6d62fc1851/a/1/a1hw0145gred00010g110_2.jpg" /></div>
                    <div id="sibdiv3">Rubber Based Red Flip Flops</div>
                    <div id="sibdiv4">
                        MRP
                        Rs.139.00<br />
                        ( 0% off )
                    </div>
                    <div id="sibdiv5">Incl. of all taxes</div>
                </div>
                <div id="maindiv">
                    <div id="sibdiv1">Loafres</div>
                    <div id="sibdiv2"><img id="imgfs" src="https://staticm2.paragonfootwear.com/media/catalog/product/cache/5074d18cfdcf25b731fc457aa81f59f8/k/1/k11235g_blk_1_1.jpg" /></div>
                    <div id="sibdiv3"> Loafers ( Metal Accents)</div>
                    <div id="sibdiv4">
                        MRP
                        Rs.675.00
                        Rs.1,349.00<br /> ( 50% off )
                    </div>
                    <div id="sibdiv5">Incl. of all taxes</div>
                </div>
            </div>

            <div>
                <div>
                    <img src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw78fb320b/images/home/Line-Design.svg" />
                </div>
                <h2>Best Sellers (Women)</h2>
            </div>

            <div class="bestsellers">
                <div id="maindiv">
                    <div id="sibdiv1">Heals</div>
                    <div id="sibdiv2"><img id="imgfs" src="https://storage.sg.content-cdn.io/cdn-cgi/image/width=undefined,height=undefined,quality=75,format=auto,fit=cover,g=top/in-resources/25c7d1c6-73be-4ff9-b000-0bf110b5c461/Images/ProductImages/Source/82525A52_1_2_nw.jpeg" /></div>
                    <div id="sibdiv3"> WOMEN'S HIGH HEEL </div>
                    <div id="sibdiv4">
                        MRP
                        Rs.1839.00
                        Rs.2,299.00 <br />  ( 20% off )
                    </div>
                    <div id="sibdiv5">Incl. of all taxes</div>

                </div>
                <div id="maindiv">
                    <div id="sibdiv1">Pumpies</div>
                    <div id="sibdiv2"><img id="imgfs" src="https://storage.sg.content-cdn.io/cdn-cgi/image/width=undefined,height=undefined,quality=75,format=auto,fit=cover,g=top/in-resources/25c7d1c6-73be-4ff9-b000-0bf110b5c461/Images/ProductImages/Source/61528A01_1_2_nw.jpeg" /></div>
                    <div id="sibdiv3">WOMEN'S PUMP SHOE </div>
                    <div id="sibdiv4">
                        MRP
                        Rs.1490.00
                        Rs.1,192.00 <br />  ( 50% off )
                    </div>
                    <div id="sibdiv5">Incl. of all taxes</div>

                </div>
                <div id="maindiv">
                    <div id="sibdiv1">Sandals</div>
                    <div id="sibdiv2"><img id="imgfs" src="https://storage.sg.content-cdn.io/cdn-cgi/image/width=undefined,height=undefined,quality=75,format=auto,fit=cover,g=top/in-resources/25c7d1c6-73be-4ff9-b000-0bf110b5c461/Images/ProductImages/Source/62552A77_1_2_nw.jpeg" /></div>
                    <div id="sibdiv3">WOMEN'S PEEP TOE SANDAL </div>
                    <div id="sibdiv4">
                        MRP
                        Rs.399.00
                        Rs.799.00<br />  ( 50% off )
                    </div>
                    <div id="sibdiv5">Incl. of all taxes</div>

                </div>
                <div id="maindiv">
                    <div id="sibdiv1">Sport shoe </div>
                    <div id="sibdiv2"><img id="imgfs" src="https://storage.sg.content-cdn.io/cdn-cgi/image/width=undefined,height=undefined,quality=75,format=auto,fit=cover,g=top/in-resources/25c7d1c6-73be-4ff9-b000-0bf110b5c461/Images/ProductImages/Source/64550A29_2_nw.jpeg" /></div>
                    <div id="sibdiv3">WOMEN'S SPORTS SHOE </div>
                    <div id="sibdiv4">
                        MRP
                        Rs.675.00
                        Rs.1,349.00 <br /> ( 50% off )
                    </div>
                    <div id="sibdiv5">Incl. of all taxes</div>

                </div>
                <div id="maindiv">
                    <div id="sibdiv1">Canvas</div>
                    <div id="sibdiv2"><img id="imgfs" src="https://storage.sg.content-cdn.io/cdn-cgi/image/width=undefined,height=undefined,quality=75,format=auto,fit=cover,g=top/in-resources/25c7d1c6-73be-4ff9-b000-0bf110b5c461/Images/ProductImages/Source/63580A43_1_2_nw.jpeg" /></div>
                    <div id="sibdiv3"> WOMEN'S CANVAS</div>
                    <div id="sibdiv4">
                        MRP
                        Rs.479.00
                        Rs.599.00 <br />  ( 50% off )
                    </div>
                    <div id="sibdiv5">Incl. of all taxes</div>

                </div>
                <div id="maindiv">
                    <div id="sibdiv1">Slipper</div>
                    <div id="sibdiv2"><img id="imgfs" src="https://staticm2.paragonfootwear.com/media/catalog/product/cache/3a88550bbe8642ae5e71ba6d62fc1851/p/u/pu7941l_black_1.jpg" /></div>
                    <div id="sibdiv3">Slipper </div>
                    <div id="sibdiv4">
                        MRP
                        Rs.157.00
                        Rs.175.00 <br /> ( 10% off )
                    </div>
                    <div id="sibdiv5">Incl. of all taxes</div>

                </div>
            </div>
            <div>
                <img src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw78fb320b/images/home/Line-Design.svg" />
            </div>

            <div>
                <h2>Best Sellers (Kids)</h2>
            </div>

            <div class="bestsellers">
                <div id="maindiv">
                    <div id="sibdiv1">Sandal</div>
                    <div id="sibdiv2"><img id="imgfs" src="http://vkcparivar.com/uploads/catlog/product/VKC%20Pride-LP1674-Pink-Kids_1.jpg" /></div>
                    <div id="sibdiv3">LP1674 </div>
                    <div id="sibdiv4">
                        MRP
                        Rs.675.00
                        Rs.1,349.00 <br />  ( 50% off )
                    </div>
                    <div id="sibdiv5">Incl. of all taxes</div>

                </div>
                <div id="maindiv">
                    <div id="sibdiv1">Casual Shoes</div>
                    <div id="sibdiv2"><img id="imgfs" src="https://staticm2.paragonfootwear.com/media/catalog/product/cache/3a88550bbe8642ae5e71ba6d62fc1851/a/1/a1pv2704cpnyb00018g174_1.jpg" /></div>
                    <div id="sibdiv3">Navy Blue Fookids </div>
                    <div id="sibdiv4">
                        MRP
                        Rs.165.00
                        Rs.174.00 <br />  ( 5% off )
                    </div>
                    <div id="sibdiv5">Incl. of all taxes</div>

                </div>
                <div id="maindiv">
                    <div id="sibdiv1">Shoes</div>
                    <div id="sibdiv2"><img id="imgfs" src="https://storage.sg.content-cdn.io/cdn-cgi/image/width=undefined,height=undefined,quality=75,format=auto,fit=cover,g=top/in-resources/25c7d1c6-73be-4ff9-b000-0bf110b5c461/Images/ProductImages/Source/41595A41_4.jpeg" /></div>
                    <div id="sibdiv3">BOY'S CASUAL SHOE </div>
                    <div id="sibdiv4">
                        MRP
                        Rs.299.00
                        Rs.349.00 <br />  ( 17% off )
                    </div>
                    <div id="sibdiv5">Incl. of all taxes</div>

                </div>
                <div id="maindiv">
                    <div id="sibdiv1">Slipper</div>
                    <div id="sibdiv2"><img id="imgfs" src="https://staticm2.paragonfootwear.com/media/catalog/product/cache/3a88550bbe8642ae5e71ba6d62fc1851/a/1/a1hw0183bpylw00002g125_5.jpg" /></div>
                    <div id="sibdiv3"> Yellow Flip-Flops</div>
                    <div id="sibdiv4">
                        MRP
                        Rs.121.00
                        Rs.135.00 <br />  ( 10% off )
                    </div>
                    <div id="sibdiv5">Incl. of all taxes</div>

                </div>
                <div id="maindiv">
                    <div id="sibdiv1">Sandal</div>
                    <div id="sibdiv2"><img id="imgfs" src="https://storage.sg.content-cdn.io/cdn-cgi/image/width=undefined,height=undefined,quality=75,format=auto,fit=cover,g=top/in-resources/25c7d1c6-73be-4ff9-b000-0bf110b5c461/Images/ProductImages/Source/42592A09_new_1.jpeg" /></div>
                    <div id="sibdiv3">TWINKLER BOY'S SANDAL </div>
                    <div id="sibdiv4">
                        MRP
                        Rs.675.00
                        Rs.1,349.00 <br />  ( 50% off )
                    </div>
                    <div id="sibdiv5">Incl. of all taxes</div>

                </div>
                <div id="maindiv">
                    <div id="sibdiv1">Shoes</div>
                    <div id="sibdiv2"><img id="imgfs" src="https://storage.sg.content-cdn.io/cdn-cgi/image/width=undefined,height=undefined,quality=75,format=auto,fit=cover,g=top/in-resources/25c7d1c6-73be-4ff9-b000-0bf110b5c461/Images/ProductImages/Source/41525A38_new_4.jpeg" /></div>
                    <div id="sibdiv3">TWINKLER BOY'S CASUAL  </div>
                    <div id="sibdiv4">
                        MRP
                        Rs.769.00
                        Rs.1099.00 <br />  ( 30% off )
                    </div>
                    <div id="sibdiv5">Incl. of all taxes</div>

                </div>
            </div>
            <div>
                <img src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw78fb320b/images/home/Line-Design.svg" />
            </div>
            <div>
                <h2>Newly launched</h2>
            </div>

            <div class="bestsellers">
                <div id="maindiv">
                    <div id="sibdiv1">NEW</div>
                    <div id="sibdiv2"><img id="imgfs" src="https://staticm2.paragonfootwear.com/media/catalog/product/cache/5074d18cfdcf25b731fc457aa81f59f8/p/u/pu7126l_blu_1.jpg" /></div>
                    <div id="sibdiv3">Blue Fabric Rexine </div>
                    <div id="sibdiv4">
                        MRP
                        Rs.202.00
                        Rs.269.00 <br />  ( 25% off )
                    </div>
                    <div id="sibdiv5">Incl. of all taxes</div>

                </div>
                <div id="maindiv">
                    <div id="sibdiv1">NEW</div>
                    <div id="sibdiv2"><img id="imgfs" src="https://staticm2.paragonfootwear.com/media/catalog/product/cache/3a88550bbe8642ae5e71ba6d62fc1851/k/3/k3307l_pnk_2.jpg" /></div>
                    <div id="sibdiv3"> Flip flops for Women</div>
                    <div id="sibdiv4">
                        MRP
                        Rs.314.00
                        Rs.349.00 <br />  ( 10% off )
                    </div>
                    <div id="sibdiv5">Incl. of all taxes</div>

                </div>
                <div id="maindiv">
                    <div id="sibdiv1">NEW</div>
                    <div id="sibdiv2"><img id="imgfs" src="http://vkcparivar.com/uploads/catlog/product/VKC%20Pride-GP4655-Brown-Gents_1.jpg" /></div>
                    <div id="sibdiv3">GP4655 </div>
                    <div id="sibdiv4">
                        MRP
                        Rs.719.00
                        Rs.899 <br />  ( 20% off )
                    </div>
                    <div id="sibdiv5">Incl. of all taxes</div>

                </div>
                <div id="maindiv">
                    <div id="sibdiv1">NEW</div>
                    <div id="sibdiv2"><img id="imgfs" src="http://vkcparivar.com/uploads/catlog/product/VKC%20Pride-LP1615-Blue-Ladies_1.jpg" /></div>
                    <div id="sibdiv3">LP1615 </div>
                    <div id="sibdiv4">
                        MRP
                        Rs.509.00
                        Rs.599.00 <br />  ( 50% off )
                    </div>
                    <div id="sibdiv5">Incl. of all taxes</div>

                </div>
                <div id="maindiv">
                    <div id="sibdiv1">NEW</div>
                    <div id="sibdiv2"><img id="imgfs" src="https://staticm2.paragonfootwear.com/media/catalog/product/cache/3a88550bbe8642ae5e71ba6d62fc1851/e/v/ev1120g_black_1_1.jpg" /></div>
                    <div id="sibdiv3"> Paralite Flip-Flops</div>
                    <div id="sibdiv4">
                        MRP
                        Rs.149.00
                        Rs.199.00 <br />  ( 25% off )
                    </div>
                    <div id="sibdiv5">Incl. of all taxes</div>

                </div>
                <div id="maindiv">
                    <div id="sibdiv1">NEW</div>
                    <div id="sibdiv2"><img id="imgfs" src="https://storage.sg.content-cdn.io/cdn-cgi/image/width=undefined,height=undefined,quality=75,format=auto,fit=cover,g=top/in-resources/25c7d1c6-73be-4ff9-b000-0bf110b5c461/Images/ProductImages/Source/42525A68_4_nw.jpeg" /></div>
                    <div id="sibdiv3">TWINKLER BOY'S SANDAL </div>
                    <div id="sibdiv4">
                        MRP
                        Rs.1,086.00
                        Rs.1,449.00 <br />  ( 25% off )
                    </div>
                    <div id="sibdiv5">Incl. of all taxes</div>

                </div>

            </div>
            <div>
                <img src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw78fb320b/images/home/Line-Design.svg" />
            </div>
            <div className="corner-div" onClick={handlechat}>
                Need help ?
            </div>


























            <Footer/>
        </div>
       
    )
}
