import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import axios from 'axios';
// import '../App.css'; 

const initialState = {
    name: "",
    phone: "",
    comments: ""
};

export function Feedback() {
    const [validated, setValidated] = useState(false);
    const [values, setValues] = useState(initialState);


    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
        // setValues({ ...values, [e.target.name]: e.target.value });
    };

    const hChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        const { name, phone, comments } = values;
        console.log("hello");
        const currentFeedback = { name, phone, comments };
        createFeedback(currentFeedback);

    }

    const createFeedback = async (currentFeedback) => {
        try {
            const response = await axios.post("/api/feedback", currentFeedback);
            console.log("created");
        } catch (error) {
            console.log(error.response);
        }
    };


    return (
        <div style={{ marginLeft: 36 }}>
            <Form noValidate validated={validated} onSubmit={(e) => { handleSubmit(e); onSubmit(e) }}>
                {/* <Row className="mb-3">
                <Form.Group as={Col} md="6" controlId="validationCustom01">
                    <Form.Label>Id</Form.Label>
                    <Form.Control
                        required
                        name='id'
                        onChange={hChange}
                        value={values.id}
                        type="text"
                        placeholder="Id"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
            </Row> */}

                <Row className="mb-3">
                    <Form.Group as={Col} md="6" controlId="validationCustom02">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            required
                            name='name'
                            onChange={hChange}
                            value={values.name}
                            type="text"
                            placeholder="Name"
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} md="6" controlId="validationCustomUsername">
                        <Form.Label>Phone</Form.Label>
                        <InputGroup hasValidation>
                            <InputGroup.Text id="inputGroupPrepend">+91</InputGroup.Text>
                            <Form.Control
                                name='phone'
                                onChange={hChange}
                                value={values.phone}
                                type="text"
                                pattern='[0-9]{10}'
                                placeholder="Contact Number (Only Digits Allowed)"
                                aria-describedby="inputGroupPrepend"
                                maxlength="10"
                                minlength="10"
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                Please enter your phone number.
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} md="6" controlId="validationCustom02">
                        <Form.Label>Feedback</Form.Label>
                        <Form.Control
                            required
                            name='comments'
                            onChange={hChange}
                            value={values.comments}
                            type="text"
                            maxlength="200"
                            placeholder="Comments Max length 200 characters"
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Button type="submit">Submit Feedback</Button>
            </Form>
        </div>
    );
}