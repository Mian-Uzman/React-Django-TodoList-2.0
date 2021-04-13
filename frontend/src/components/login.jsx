import "./style.css";
import PropTypes from 'prop-types';
import { useState } from "react";


function Login({ handle_login }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    function handle_change(e) {
        const name = e.target.name;
        const value = e.target.value;
        setUsername(name);
        setPassword(value);

    };


    return (
        <div>
            <form>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Username</label>
                    <input
                        className="form-control"
                        type="text"
                        name="username"
                        placeholder="Enter email"
                        value={username}
                        onChange={handle_change}
                    />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input
                        className="form-control"
                        placeholder="Enter password"
                        type="password"
                        name="password"
                        value={password}
                        onChange={handle_change}
                    />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button
                    type="submit"
                    className="btn btn-primary btn-block"
                    onClick={(e) => handle_login(e, username, password)}>Login</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
        </div>
    )
}

export default Login



Login.propTypes = {
    handle_login: PropTypes.func.isRequired
};
