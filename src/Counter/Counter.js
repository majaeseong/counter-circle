import React from 'react';
import './Counter.css';

function Counter ({index,color,number,add,sub,change}){
    return(
        <div className='Counter'
        onClick={()=>add(index)}
        onContextMenu={()=>sub(index)}
        onDoubleClick={()=>change(index)}
        style={{backgroundColor:color}}>
            {number}
        </div>
    )
}

export default Counter;