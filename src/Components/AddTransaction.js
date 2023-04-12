import React,  {useState} from "react";


export const AddTransaction = () => {
    const [text, setText] = useState('');
    const [Amount, setAmount] = useState('0');
    return(
        <>
            <h3>Add Transaction</h3>
            <form>
                <div className="form-control">
                <label htmlFor="txt">Text</label>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..."/>
                </div>
                <div className="form-control">
                <label htmlFor="Amount" 
                >Amount <br /> (Negative -expense, positive -income)</label>
                <input type="number" value={Amount} onChange={(e) => setAmount(e.target.value)} placeholder="Amount..."/>
                </div>

            </form>
        </>
    )
};



