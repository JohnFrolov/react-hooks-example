import * as React from "react";
import {useState, useEffect} from "react";
import "./style";

export const HookApp = (props) => {
    const [value, setValue] =  useState(props.value);
    const handleOnChange = (e) => setValue(e.target.value);

    const [result, setResult] =  useState('');

    //componentDidMount & componentDidUpdate
    useEffect(() => {
        const calculateResult = () => (
            value
                .split("")
                .filter(e => Number.parseInt(e, 10) >= 0)
                .join(", ")
        )
    
        setResult(calculateResult());
    }, [value]);

    const [tick, setTick] =  useState(0);
    
    //componentDidMount & componentWillUnmount
    useEffect(() => {
        const handleTick = () => setTick(prevTick => prevTick + 1);
        const timeout = setInterval(
            handleTick,
            1000
        );
        return () =>  clearInterval(timeout);
    }, [tick]);

    return (
        <div className="container">
            <span className="title">Hook App</span>
            <div className="textField">
                <label for="someText">Enter some text</label>
                <input
                    id="someText"
                    type="text"
                    onChange={handleOnChange}
                    value={value}
                />
            </div>
            <div className="result">
                <label for="result">Only numbers</label>
                <span id="result">{result}</span>
            </div>
            <div className="upTime">
                <label for="upTime">Up time</label>
                <span>{`${tick} s`}</span>
            </div>      
        </div>
    )
}
