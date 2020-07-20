import * as actionTypes from '../actions/actionTypes';

const initialState = {
    ingredients: null,
    selectedIngredients: null,
    totalPrice: 0    
};

const addIngredient = ( state, action ) => {
    const selectedIngredients=state.selectedIngredients.map((item)=>{
        if(item.name==action.ingredientName){
            return {name:item.name,price:item.price,qty:item.qty+1,total:(item.price*(item.qty+1))}
        }
        else{
            return item;
        }
    })    
    return {
        ...state,
        selectedIngredients:selectedIngredients
        
    };
};

const removeIngredient = (state, action) => {
    const selectedIngredients=state.selectedIngredients.map((item)=>{
        if(item.name==action.ingredientName){
            return item.qty>0?{name:item.name,price:item.price,qty:item.qty-1,total:(item.price*(item.qty-1))}:item
        }
        else{
            return item;
        }
    })    
    return {
        ...state,
        selectedIngredients:selectedIngredients
        
    };
};

const getIngredients = (state, action) => {
    const selectedIngredients=action.ingredients.ingredients.map((ing)=>{
        return {name:ing.name,price:ing.price,qty:0,total:0}
    })
    return { 
        ...state,
        ingredients:action.ingredients.ingredients,
        selectedIngredients:selectedIngredients
    };
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.ADD_INGREDIENT: return addIngredient( state, action );
        case actionTypes.REMOVE_INGREDIENT: return removeIngredient(state, action);
        case actionTypes.GET_INGREDIENTS: return getIngredients(state, action);    
        default: return state;
    }
};

export default reducer;