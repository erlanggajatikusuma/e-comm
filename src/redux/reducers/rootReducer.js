import j from '../../jacket.jpg';
import leatherJacket from '../../Leather Biker Jacket.jpg';
const initialState = {
    counter: 1,
    cart: [],
    products: [
       {
           id: 1,
           name: 'Rompi KKK',
           unit: 1,
           price: 120000,
           image: j
       },
       {
           id: 2,
           name: 'Celana Jeans',
           unit: 1,
           price: 100000,
           image: leatherJacket
       },
       {
           id: 3,
           name: 'Celana Boxer',
           unit: 1,
           price: 20000,
           image: leatherJacket
       },
       {
           id: 4,
           name: 'Celana chinos',
           unit: 1,
           price: 130000,
           image: leatherJacket
       },
       {
           id: 5,
           name: 'Jacket Bomber',
           unit: 1,
           price: 230000,
           image: leatherJacket
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