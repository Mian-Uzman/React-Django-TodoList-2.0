import React from 'react';
import { Card, Button } from 'react-bootstrap';
import '../style.css';

export default function Footer() {
    return (
        <div className='footer'>
            <Card bg="dark" text="light">
                <Card.Body>
                    <Card.Title>Get things done from today !</Card.Title>
                    <Card.Text>
                        About Me!
                    </Card.Text>
                    <li>
                        <Button variant="dark" href='https://www.linkedin.com/in/mian-uzman-munib-b250501ba/'>LinkedIn</Button>
                    </li>
                    <li>
                        <Button className="mt-2" variant="dark" href='https://www.instagram.com/mian__uzman/'>Instagram</Button>
                    </li>
                    <li>
                        <Button className="mt-2" variant="dark" href='https://www.facebook.com/uzman.munib/'>Facebook</Button>
                    </li>
                    <Card.Text className="mt-3">
                        Contact Me!
                    </Card.Text>
                    <li>
                        uzmanA3@gmail.com
                    </li>
                </Card.Body>
                <Card.Footer className="text-muted">Made By Uzman</Card.Footer>
            </Card>
        </div>
    )
}
