import * as actionTypes from './actionTypes';
import axios from 'axios';

export const addIngredient = ( name ) => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        ingredientName: name
    };
};

export const removeIngredient = ( name ) => {
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        ingredientName: name
    };
};

export const getIngredientsFromJson = ( ingredients ) => {
    return {
        type: actionTypes.GET_INGREDIENTS,
        ingredients: ingredients
    };
};

export const getIngredients = () => {
    return dispatch => {
        axios.get("data/ingredients.json")
            .then(res =>{
                console.log(res);
                dispatch(getIngredientsFromJson(res.data));
            },
              (error) => {
              console.log(error);
              }
            )
    };
    
};