import React, { Component } from 'react'
import { Navbar, Nav } from "react-bootstrap";
import PropTypes from 'prop-types';


export default class Navbar1 extends Component {

    logged_out_nav = () => {
        return (
            <Nav className="justify-content-end">
                <Navbar.Brand >Not logged in</Navbar.Brand>

            </Nav>
        )

    };

    logged_in_nav = () => {
        return (
            <Nav className="justify-content-end">
                <Navbar.Brand >Current User: {this.props.username}</Navbar.Brand>
                <Nav.Link
                    href="/">
                    <li onClick={this.props.handle_logout}>Logout</li></Nav.Link>
            </Nav>

        )
    };

    render() {
        return (
            <React.Fragment>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand style={{ fontFamily: "Blackadder ITC", fontSize: "35px" }}>Uzman</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/home">Home</Nav.Link>
                            <Nav.Link href="/lists/">All Lists</Nav.Link>
                        </Nav>

                        <Nav>{this.props.logged_in ? this.logged_in_nav() : this.logged_out_nav()}</Nav>
                    </Navbar.Collapse>
                </Navbar>
            </React.Fragment>
        )
    }


}
Navbar1.propTypes = {
    logged_in: PropTypes.bool.isRequired,
    display_form: PropTypes.func.isRequired,
    handle_logout: PropTypes.func.isRequired
};