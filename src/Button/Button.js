import React from 'react';
import './Button.css';

function Button ({create,remove}){
    return(
        <div className="button_container">
            <button onClick={create} className="button button_create">Create</button>
            <button onClick={remove} className="button button_remove">Remove</button>
        </div>
    )
}

export default Button;