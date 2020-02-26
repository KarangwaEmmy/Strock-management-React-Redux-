import products from './ProductData'
import { ADD_PRODUCT, REMOVE_PRODUCT} from '../actions/actionsTypes'

const INITIAL_DATA = products;

const ProductReducer = (state=INITIAL_DATA, action) => {
    switch (action.type){
        case ADD_PRODUCT:
        return [
            ...state,{
                id: action.id,
                name: action.name,
                price: action.price,
                date: action.date,
            }
        ]
        case REMOVE_PRODUCT:
        const prodIndex = parseInt(action.id)
        return state.filter(item => item.id !== prodIndex);
        default:
        return state
    }
}

export default ProductReducer