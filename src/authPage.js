import React from "react";
export default class Authentication extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ' '};
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(event) {
        this.setState({value: event.target.value})
    }
    handleSubmit(event) {
        event.preventDefault();
        console.log('user is' + this.state.value)
    }
    render(){
        return (
            <>
                <form id="IptContainer" onSubmit={this.handleSubmit}>
                        <h3>Name:</h3> <br />
                        <input type="text" id="IptText" value={this.state.value} onChange={this.handleChange} />
                        <br />
                        <h3>Password:</h3> <br />
                        <input type="password" id="IptPswrd" /> <br />
                        <input type='submit' id="btnSubmit"/>
                </form>
            </>
        );
    } 
}