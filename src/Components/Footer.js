import React,{useState} from 'react';
import ReactDom from 'react-dom';
import {AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";
import {MdAttachEmail} from "react-icons/md"
import {BiLogoInstagramAlt} from "react-icons/bi"
import {FaInstagram} from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="links">
          <a href="https://github.com/Sagunthala-A" target="_blank"> <AiOutlineGithub/></a>
          <a href="https://www.linkedin.com/in/sagunthala-a-79755623b/" target="_blank"> <AiFillLinkedin/></a>
          <a href="mailto:sagunthala9925@gmail.com" target="_blank"> <MdAttachEmail/></a>
          <a href="#" target="_blank"> <FaInstagram/></a>
          
        </div>

        <div className ="theme">
          <select>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="black">Black</option>
            <option value="white">White</option>
            <option value="green">Green</option>
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="purple">Purple</option>
            <option value="pink">Pink</option>
            <option value="yellow">Yellow</option>
            <option value="orange">Grey</option>


          </select>
        </div>
      </div>

    

    </div>
  )
}

export default Footer