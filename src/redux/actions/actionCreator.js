import { ADD_PRODUCT, REMOVE_PRODUCT} from './actionsTypes'

let Id = 6;

export const addProduct = (name, price, date, quantity) => ({
    type: ADD_PRODUCT,
    id: Id++,
    name,
    price,
    quantity,
    date
})

export const deleteProduct  = (id) => ({
    type: REMOVE_PRODUCT,
    id: id
})
