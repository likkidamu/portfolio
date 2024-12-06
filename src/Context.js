import {useReducer } from "react";

import { createContext } from "react";

export const themeContext = createContext();

const intialState= {darkmode: false}

const themeReducer = (state,action)=>
{
    switch(action.type){
        case 'toggle':
            return{ darkmode: !state.darkmode};
        default:
            return state;
    }
};
export const ThemeProvider = (props)=>{
    const [state,dispatch]= useReducer(themeReducer,intialState);
    return(
        <themeContext.Provider value={{state,dispatch}}>
            {props.children}
        </themeContext.Provider>
    );
};