import React from 'react';

function Button ({create,remove}){
    return(
        <div>
            <button onClick={create}>Create</button>
            <button onClick={remove}>Remove</button>
        </div>
    )
}

export default Button;