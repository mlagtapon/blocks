import React, {Component} from 'react';

export default class Main extends Component {

    constructor(props){
        super(props);

        this.state = {
            color: "#e06666"
        }
    }

    render() {
        return (
            <div onMouseOver={() => this.setState({color: "gainsboro"})} 
            onMouseOut={() => this.setState({color: "#e06666"})}
            className="col-8 row p-4" style={{height: "500px", backgroundColor: this.state.color}}>
                {this.props.children}
            </div>
        );
    }
}