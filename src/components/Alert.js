import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

export default function AlertDismissible() {
    const [show, setShow] = useState(false);

    return (
        <>
            <Alert show={show} variant="dark bg-primary">
                <Alert.Heading>How's it going?!</Alert.Heading>
                <p>
                    "Welcome to my portfolio website! I'm excited to share my skills and achievements with you. Take a look around and explore my portfolio to see some of my best work. And if you have any questions or would like to learn more about my skills and experience, please don't hesitate to get in touch.
                    Thanks for stopping by!"
                </p>
                <hr />
                <div className="d-flex justify-content-end ">
                    <Button onClick={() => setShow(false)} variant="outline-dark">
                        Close Message!
                    </Button>
                </div>
            </Alert>

            {!show && <Button className="button" onClick={() => setShow(true)}>My Message</Button>}
        </>
    );
}

// render(<AlertDismissible />);