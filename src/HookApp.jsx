import * as React from "react";
import {useState, useEffect} from "react";
import "./style";

export const HookApp = (props) => {
    const [value, setValue] = useFormValue(props.value);
    const result = useResult(value);
    const tick = useInterval(0, 1000);

    return (
        <div className="container">
            <span className="title">Custom Hook App</span>
            <div className="textField">
                <label for="someText">Enter some text</label>
                <input
                    id="someText"
                    type="text"
                    onChange={setValue}
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

function useResult(value) {
    const [result, setResult] = useState("");

    useEffect(() => {
        setResult(value
            .split("")
            .filter(e => Number.parseInt(e, 10) >= 0)
            .join(", ")
        )
    }, [value]);

    return result
}

function useFormValue(initialValue) {
    const [value, setValue] = useState(initialValue);
    const handler = (e) =>  setValue(e.target.value);

    return [
        value,
        handler
    ]
}

function useInterval(start, tickTimeout) {
    const [tick, setTick] = useState(start);

    useEffect(() => {
        const handleTick = () => setTick(tick => tick + 1);
        const timeout = setInterval(handleTick, tickTimeout);
        
        return () => clearInterval(timeout);
    }, [tick]);

    return tick;
}
