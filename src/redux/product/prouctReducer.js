import * as Type from './productType'

var initialState = {
    loading: false,
    data : [],
    error : null
}
export const productReducer = (state = initialState, action) => {
    console.log("productReducer ",state," action ",action.type)
    switch(action.type) {
        case Type.PRODUCT_INITIATE:
            return {
                ...state,
                loading : true
            }
        case Type.PRODUCT_SUCCESS:
            return {
                loading : false,
                data : action.payload,
                error : null
            }
        case Type.PRODUCT_FAILURE:
            return {
                loading : false,
                data : [],
                error : action.payload
            }
        case Type.PRODUCT_SEARCH: 
            return {
                loading : false,
                data : [],
                error : null
            }        
        case Type.PRODUCT_FILTER: 
            return {
                loading : false,
                data : [],
                error : null
            }            
        default:
            return state
    }
}