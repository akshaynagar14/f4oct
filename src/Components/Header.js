import React,{useState} from 'react';
import ReactDom from 'react-dom';

import { FaRegKeyboard } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

const Header = () => {
  return (
    <div id="header-container">
        <div>
          <h1>TypeCat</h1>
          <h3><FaRegKeyboard /></h3>
        </div>
        <h1><CgProfile /></h1>
         </div>
  )
}

export default Header

