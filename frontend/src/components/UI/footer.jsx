import React from 'react';
import { Card } from 'react-bootstrap';
import '../style.css';


function Footer() {
    return (
        <div className='footer'>
            <Card bg="dark" text="light">
                <Card.Body>
                    <Card.Title >Get things done from today !</Card.Title>
                    <p>
                        About Me!
                </p>
                    <ul className='footer-list'>
                        <button
                            type="button"
                            className="btn btn-outline-light">
                            <a style={{ textDecoration: 'none', color: 'white' }} href='https://www.linkedin.com/in/mian-uzman-munib-b250501ba/'>LinkedIn</a>
                        </button>
                        <button
                            type="button"
                            className="btn  btn-outline-light">
                            <a style={{ textDecoration: 'none', color: 'white' }} href='https://www.instagram.com/mian__uzman/'>Instagram</a>
                        </button>
                        <button
                            type="button"
                            className="btn  btn-outline-light">
                            <a style={{ textDecoration: 'none', color: 'white' }} href='https://www.facebook.com/uzman.munib/'>Facebook</a>
                        </button>

                    </ul>

                    <Card.Text className="mt-5" >
                        Contact Me!
                </Card.Text>
                    <button

                        type="button"
                        className="btn btn-light"
                        href='https://www.facebook.com/uzman.munib/'>uzmanA3@gmail.com
                        </button>
                </Card.Body>
                <Card.Footer style={{ textAlign: 'center' }} className="text-muted">Made By Uzman</Card.Footer>
            </Card>
        </div>
    )
}

export default Footer;

