import React from "react";

export const Incomexpenses = () =>{
    return(
        <div className="inc-exp-container">
            <div>
            <h4>Income</h4>
            <p className="money plus">+<bold>$</bold>0.00</p>
            </div>
            <div>
            <h4>Expense</h4>
            <p className="money minus">-<bold>$</bold>0.00</p>
            </div>
        </div>
    )
}