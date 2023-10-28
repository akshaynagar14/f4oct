import React from 'react';
import {MdOutlineRefresh} from 'react-icons/md'


const CenterBox = () => {
  return (
    <div className='center-box'>
        <h2><MdOutlineRefresh/></h2>
        <div className='row-2'>
            <button >esc</button>
            <p>- reset</p>
        </div>
        <div className='row-3'>
            <button>10</button>
            <button>50</button>
            <button>80</button>
            <button>100</button>
            <p>- no. of words</p>
        </div>
    </div>
  )
}

export default CenterBox