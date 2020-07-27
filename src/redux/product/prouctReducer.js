import * as Type from './productType'

var initialState = {
    loading: false,
    productList : [],
    searchList : [],
    filterList : [],
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
                ...state,
                loading : false,
                productList : action.payload,
                error : null
            }
        case Type.PRODUCT_FAILURE:
            return {
                ...state,
                loading : false,
                productList : [],
                error : action.payload
            }
        case Type.PRODUCT_SEARCH: 
            return {
                ...state,
                loading : false,
                searchList : [],
                error : null
            }        
        case Type.PRODUCT_FILTER: 
            return {
                ...state,
                loading : false,
                filterList : action.payload,
                error : null
            }            
        default:
            return state
    }
}