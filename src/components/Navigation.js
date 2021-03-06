import React, {Component} from 'react';

export default class Navigation extends Component {

    constructor(props){
        super(props);

        this.state = {
            color: "#6fa8dc"
        }
    }

    render() {
        return (
            <div onMouseOver={() => this.setState({color: "rebeccapurple"})} 
            onMouseOut={() => this.setState({color: "#6fa8dc"})} className="col-3 mr-4" style={{height: "400px", backgroundColor: this.state.color}}></div>
        );
    }
}