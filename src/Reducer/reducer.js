
//action
const CREATE = 'CREATE';
const REMOVE = 'REMOVE';

const ADD = 'ADD';
const SUB = 'SUB';
const CHANGE = 'CHANGE';

//action creators
function create(){
    return{
        type:CREATE
    }
}
function remove(){
    return{
        type:REMOVE
    }
}

function add(index){
    return{
        type:ADD,
        index
    }
}
function sub(index){
    return{
        type:SUB,
        index
    }
}
function change(index,color){
    return{
        type:CHANGE,
        index,
        color
    }
}

function getColor(){
    const colors=[
        '#58D3F7',
        '#FAAC58',
        '#FA58F4',
        '#BDBDBD',
        '#CC2EFA',
        'black',
        '#2EFE2E'
    ]
    const random = Math.floor(Math.random()*7);

    return colors[random]
}

//reducer
const initialState={
    counters:[
        {
            color:'black',
            number:0
        }
    ]
}

function reducer(state=initialState, action){
    switch(action.type){
        case CREATE:
        console.log(action.type)
            return applyCreate(state);
        case REMOVE:
            return applyRemove(state);
        case ADD:
            return applyAdd(state,action.index)
        case SUB:
            return applySub(state,action.index)
        case CHANGE:
            return applyChange(state,action.index)
        default:
            return state;
    }
}

//reducer function
function applyCreate(state){
    const {counters} = state;
    return{
        counters:[
            ...counters,
            {
                color:'black',
                number:0
            }
        ]
    }
}
function applyRemove(state){
    const {counters} = state;
    return{
        counters:[
            ...counters.slice(0,counters.length-1)
        ]
    }
}
function applyAdd(state,index){
    const {counters} = state;
    return{
        counters:[
            ...counters.slice(0,index),
            {
                ...counters[index],
                number:counters[index].number+1
            },
            ...counters.slice(index+1,counters.length)
        ]
    }
}
function applySub(state,index){
    const {counters} = state;
    return{
        counters:[
            ...counters.slice(0,index),
            {
                ...counters[index],
                number:counters[index].number-1
            },
            ...counters.slice(index+1,counters.length)
        ]
    }
}
function applyChange(state,index){
    const {counters} = state;
    return{
        counters:[
            ...counters.slice(0,index),
            {
                ...counters[index],
                color:getColor()
            },
            ...counters.slice(index+1,counters.length)
        ]
    }
}

//export action creators
const actionCreators={
    create,
    remove,
    add,
    sub,
    change
}

export {actionCreators}

//export reducer
export default reducer;