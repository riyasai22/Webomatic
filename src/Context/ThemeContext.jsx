import React from "react";
import { createStore } from "redux";
import { Provider, connect } from "react-redux";

const initialState={
    theme:"light",
}

const actions={
    SET_THEME:"SET_THEME",
}
function reducer(state=initialState,action)
{
    switch(action.type){
        case actions.SET_THEME:
            return {...state,theme:action.value}
        default:
            return state
    }
}
const store=createStore(reducer)


module.exports={store}