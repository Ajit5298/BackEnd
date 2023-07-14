import React from 'react'
import img2 from "../Components/image/logo1-transparent-png.png"
import "../Components/Style.css"
import { useNavigate } from 'react-router-dom'

export const Footer = () => {
    const Router = useNavigate();
    function handlehome() {
        Router('/');
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
      function handleadd() {
        Router('/Address');
      }
      function handleconnect() {
        Router('/conectus');
      }
  return (
    <div id="ddd">
     <div class="footer">
        <div id="divF1">
            <img id="footerlogo" src={img2} />
        </div>
        <div id="divF2">
            <div id="list1">
                <ul>
                    <li onClick={handlehome}>Home</li>
                    <li onClick={handlemen}>Mens</li>
                    <li onClick={handlewomen}>Womens</li>
                    <li onClick={handlekids}>Kids</li>
                </ul>
            </div>
            <div id="list2">
                <ul>
                    <li>Our Products</li>
                    <li>Our Staff</li>
                    <li>Founder</li>
                    <li onClick={handleadd}>shop Address</li>
                    
                </ul>
            </div>
            <div id="list3">
                <ul>
                    <li>size Chart</li>
                    <li>Terms & conditions</li>
                    <li onClick={handleconnect}>Connect US</li>
                    <li>Return & Exchange</li>
                </ul>
            </div>
            <div id="list4">
                {/* <img id="footerlogo2" src=""/> */}

            </div>


        </div>
       

    </div>
    <div id="copyrights">
        <span >All Rights Reserved. Copyright 2023 | Nanandkar Shoe mart Nilanga</span>
    </div>
    </div>
  )
}
