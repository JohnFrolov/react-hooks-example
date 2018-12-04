import * as React from "react";
import "./style";

export class ClassApp extends React.Component {
    constructor(props) {
        super (props);

        this.state = {
            value: props.value,
            result: "",
            tick: 0
        };

        this.timeout = null;

        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleTick = this.handleTick.bind(this);
    }
    
    componentDidMount() {
        this.timeout = setInterval(() => this.handleTick(), 1000);
        this.calculateResult();
    }

    componentDidUpdate(_prevProps, prevState) {
        if (prevState.value !== this.state.value) {
            this.calculateResult();
        }
    }

    componentWillUnmount() {
        clearInterval(this.timeout);
    }
    
    handleTick() {
        this.setState((prevState => ({...prevState, tick: prevState.tick + 1 })));
    }

    handleOnChange(e) {
        this.setState({value: e.target.value});
    }
    
    //side effect
    calculateResult() {
        const {value} = this.state;
        const result = value
            .split("")
            .filter(e => Number.parseInt(e, 10) >= 0)
            .join(", ");
    
        this.setState({result});
    }

    render () {
        const {value, result, tick} = this.state;

        return (
            <div className="container">
                <span className="title">Test app</span>
                <div className="textField">
                    <label for="someText">Enter some text</label>
                    <input
                        id="someText"
                        type="text"
                        onChange={this.handleOnChange}
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
}
