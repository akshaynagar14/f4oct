import React,{useState} from 'react'
import ReactDom from 'react-dom'
import {MdOutlineRefresh} from 'react-icons/md'
// import CenterBox from './CenterBox';


const Typingbody = () => {

  let displaytext =
  "eat happily low wooden fight me frighten distant solve move being tin improve guard unhappy band east capital noun myself strike thought turn weather scientist canal finger roll move wonder settlers camera traffic honor compass victory whose health vast ought fresh dog successful straw these of cheese simply answer finally";
  let keychar=0;

  const [timer,setTimer] = useState('15')

  return (
    <div>
      {/* first row of body which is timer */}
      <div id='timer-container'>
        <p>{timer}</p>
          <div>
            <p onClick={()=>{setTimer(15)}}>15s</p>
            <p onClick={()=>{setTimer(30)}}>30s</p>
            <p onClick={()=>{setTimer(60)}}>60s</p>
          </div>
      </div>
      
      {/* second row of body which is typing text */}
      <div id="text-body">
        {/* {console.log(displaytext.split(""))} */}
        {/* split will convert string into an array */}
        
        <div class="words-wrapper">
        {displaytext.split("").map((char)=>(<span className="word" key={'char'+(keychar++)}>{char}</span>))}
        {/* {displaytext.split("").map((char)=>(<input style={{outline:'none', border:'none'}} placeholder={char}></input>))} */}
        {/* <span contenteditable="true" className="word" key={'char'+(keychar++)}>{char}</span> */}
        </div>

{/* third row of body which is button center container */}
        <div className='center-box'>
          <h2 id='refresh'><MdOutlineRefresh/></h2>
          <div className='row-2'>
              <button >esc</button>
              <span>-</span>
              <span>reset</span>
          </div>
          <div className='row-3'>
              <button>10</button>
              <button>50</button>
              <button>80</button>
              <button>100</button>
              <span>-</span>
              <span>no. of words</span>
          </div>
      </div>





      </div>

      {/* <CenterBox ></CenterBox> */}

     

    </div>
  )
}

export default Typingbody