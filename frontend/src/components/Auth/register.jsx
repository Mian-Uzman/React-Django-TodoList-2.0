import React, { Component } from 'react'
import PropTypes from 'prop-types';


export default class Register extends Component {
    state = {
        username: '',
        password: '',
        passwordAgain: ''
    };

    handle_change = e => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState(prevstate => {
            const newState = { ...prevstate };
            newState[name] = value;
            return newState;
        });
    };

    handleWrongPass = (e) => {
        e.preventDefault();
        console.log("Passwords Dont Match");
    }

    render() {
        return (

            <form>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input
                        className="form-control"
                        placeholder="Username"
                        type="text"
                        name="username"
                        value={this.state.username}
                        onChange={this.handle_change}
                    />                            </div>


                <div className="form-group">
                    <label>Password</label>
                    <input
                        className="form-control"
                        placeholder="Enter password"
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handle_change}
                    />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input
                        className="form-control"
                        placeholder="Re-Enter password"
                        type="password"
                        name="passwordAgain"
                        value={this.state.passwordAgain}
                        onChange={this.handle_change}
                    />
                </div>

                <button
                    type="submit"
                    className="btn btn-primary btn-block"
                    onClick={(e) => {
                        (this.state.password === this.state.passwordAgain)
                            ? this.props.handle_signup(e, this.state)
                            : this.handleWrongPass(e)
                    }}>Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="#">sign in?</a>
                </p>
            </form>




        )
    }
}
Register.propTypes = {
    handle_signup: PropTypes.func.isRequired
};