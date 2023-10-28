import React from 'react';
import ReactDom from 'react-dom';
import Header from './Components/Header';
import Typingbody from './Components/Typingbody';
import Footer from './Components/Footer';

import './style.css'

// 'rafce' stands for React Arrow Function Component with Export

const App = () => {
  return (
    <div>
        <div className='container'>
            <Header />
            {/* <ShowData paragraph={paragraph} /> */}
            <Typingbody />
            <Footer />
        </div>
    </div>
  )
}

export default App
