import React,{ useContext } from "react";
import { Transaction } from "./Transaction";

import { GlobalContext, GlobalProvider } from "../Context/GlobalState";    

export const TransactionList = () => {
    const { transactions} = useContext(GlobalContext);
    
    return(
        <div>
            <h3>History</h3>
            <ul className="list">
                {transactions.map(transactions =>(<Transaction transaction={ transactions } /> ))}
            </ul>
        </div>
    )
}