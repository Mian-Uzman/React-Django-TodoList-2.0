import React, { Component } from 'react'
import axios from "axios";
import "./style.css"
import { Link } from 'react-router-dom';

export default class NewItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { handleAddText, handleSubmitButton } = this.props;
        return (
            <React.Fragment>
                <div className="item-input">
                    <h3>Add Item</h3>

                    <div className="input-group mb-3" >
                        <input
                            type="text"
                            className="form-control"
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"
                            placeholder="New Item"
                            onChange={handleAddText} />
                    </div>

                    <button
                        type="button"
                        className="btn btn-success"
                        onClick={handleSubmitButton}>Create
                            </button>

                    <Link to="/lists/">
                        <button className="ml-2 btn btn-dark" variant="dark">Back</button>
                    </Link>
                </div>
            </React.Fragment>
        )
    }
}