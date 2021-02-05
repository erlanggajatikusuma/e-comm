const initialState = {
    counter: 1,
    products: [
       {
           id: 1,
           name: 'Rompi KKK',
           unit: 1,
           price: 120000
       },
       {
           id: 2,
           name: 'Celana Jeans',
           unit: 1,
           price: 100000
       },
       {
           id: 3,
           name: 'Celana Boxer',
           unit: 1,
           price: 20000
       },
       {
           id: 4,
           name: 'Celana chinos',
           unit: 1,
           price: 130000
       },
       {
           id: 5,
           name: 'Jacket Bomber',
           unit: 1,
           price: 230000
       },
    ],
    
}

function rootReducer(state = initialState, action){
    
    switch(action.type){
        case 'INCREMENT' :
            return {...state, counter: state.counter + 1}
        case 'DECREMENT' :
            return {...state, counter: state.counter - 1}
        // case 'INCREMENT' :
        //     return {counter: state.counter + 1}
        // case 'DECREMENT' :
        //     return {counter: state.counter - 1}
        default:
            return state;
    }
}

export default rootReducer;