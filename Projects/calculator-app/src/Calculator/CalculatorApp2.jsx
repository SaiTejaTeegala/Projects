import React,{useState} from 'react';
import './Calculator.css';

const CalculatorApp2 = () => {
    const[calcu, setCalcu]= useState("");
    const[result, setResult]= useState("");

    const ops= ['/','*','+','-','.'];

    const updateCalc= value => {
        if (
            ops.includes(value) && calcu === '' ||
            ops.includes(value) && ops.includes(calcu.slice(-1)
            )
        ) {
            return;
        }
        setCalcu(calcu + value);

        if (!ops.includes(value)) {
            setResult(eval(calcu + value).toString());
        }
    }
    const createDigits = () =>{
        const digits = [];
        for(let i=1;i<10;i++){
            digits.push(
                <button onClick={() => updateCalc(i.toString())} key={i}>{i}</button>
            )
        }
        return digits;
    }
    
    const calculate = () => {
        setCalcu(eval(calcu).toString());
    }
    return(
        <div className="calc">
            <div className="calculator">
                <div className="display">
                    {result ? <span></span> : ''} &nbsp;
                    {calcu || "0"}

                </div>

                <div className="operators">
                    <button onClick={() => updateCalc('/')}>/</button>
                    <button onClick={() => updateCalc('*')}>*</button>
                    <button onClick={() => updateCalc('+')}>+</button>
                    <button onClick={() => updateCalc('-')}>-</button>

                    <button onClick={() => setCalcu('') }>Del</button>

                </div>
                
                <div className="digits">
                    {createDigits()}
                    <button onClick={() => updateCalc('0')}>0</button>
                    <button onClick={() => updateCalc('.')}>.</button>
                    <button onClick={calculate}>=</button>

                </div>

            </div>

        </div>
    );
}
export default CalculatorApp2;