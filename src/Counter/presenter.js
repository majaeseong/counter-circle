import React from 'react';
import Counter from './Counter';
import Button from '../Button/Button';
import './counterlist.css';

function Presenter ({create,remove,counters,add,sub,change}){
    let counter_list = [];
    if(counters){
        counter_list = counters.map(
            (counter,index)=>(
                <Counter
                    key={index}
                    index={index}
                    {...counter}
                    add={add}
                    sub={sub}
                    change={change}
                />
            )
        )
    }
    
    return(
        <div>
            <Button create={create} remove={remove}/>
            <div className="counter_list">
                {counter_list}
            </div>
        </div>
    )
}

export default Presenter;