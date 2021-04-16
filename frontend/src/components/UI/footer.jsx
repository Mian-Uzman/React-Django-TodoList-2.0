import React from 'react';
import { Card } from 'react-bootstrap';
import '../style.css';


function Footer() {
    return (
        <div className='footer'>
            <Card bg="dark" text="light">
                <Card.Body>
                    <Card.Title style={{ fontSize: '20px', textAlign: 'center' }}>Get things done from today !</Card.Title>
                    <p style={{ fontWeight: '350', fontSize: '16px' }}>
                        About Me!
                </p>
                    <ul className='footer-list'>
                        <button
                            type="button"
                            className="btn btn-outline-light">
                            <a style={{ fontWeight: '350', textDecoration: 'none', color: 'white' }} href='https://www.linkedin.com/in/mian-uzman-munib-b250501ba/'>LinkedIn</a>
                        </button>
                        <button
                            type="button"
                            className="btn  btn-outline-light">
                            <a style={{ fontWeight: '350', textDecoration: 'none', color: 'white' }} href='https://www.instagram.com/mian__uzman/'>Instagram</a>
                        </button>
                        <button
                            type="button"
                            className="btn  btn-outline-light">
                            <a style={{ fontWeight: '350', textDecoration: 'none', color: 'white' }} href='https://www.facebook.com/uzman.munib/'>Facebook</a>
                        </button>

                    </ul>

                    <Card.Text style={{ fontWeight: '350', fontSize: '16px' }} >
                        Contact Me!
                </Card.Text>
                    <a>Email: <a style={{ fontWeight: '300', fontSize: '16px' }}>uzmanA3@gmail.com </a></a>
                </Card.Body>
                <Card.Footer style={{ textAlign: 'center', fontSize: '14px' }} className="text-muted">Made By Uzman</Card.Footer>
            </Card>
        </div>
    )
}

export default Footer;

