import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
// initial state
const initialState = {
    transactions: [
    { id:1, text:'flower', amount: -20},
    { id:2, text:'money', amount: 200},
    { id:3, text:'phone', amount: -20},
    { id:4, text:'trouser', amount: 50},
    
    ]
}

// create content
export const GlobalContext = createContext(initialState);


// provider component
export const GlobalProvider = ({children})=>{
    const [state, dispatch] = useReducer(AppReducer, initialState);


    return(<GlobalContext.Provider value={{
        transactions: state.transactions
    }}>
        {children}
    </GlobalContext.Provider>);
}