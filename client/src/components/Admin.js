import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import axios from 'axios';

const initialState = {
    id: "",
    name: "",
    phone: "",
    comments: ""
};

export function Admin() {
    const [validated, setValidated] = useState(false);
    const [values, setValues] = useState(initialState);
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [comments, setComments] = useState("");

    const [feedbacks, setFeedbacks] = useState(null);
    useEffect(() => {
        axios.get("/api/feedback").then((res) => { setFeedbacks(res.data) });
    }, ["/api/feedback"]);

    console.log(feedbacks);

    const deleteFeedback = async (feedbackId) => {
        try {
            await axios.delete(`/api/feedback/${feedbackId}`);
            axios.get("/api/feedback").then((res) => { setFeedbacks(res.data) });
        } catch (error) {
            console.log(error);
        }
    }


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
        const { id, name, phone, comments } = values;
        console.log("hello");
        const currentFeedback = { id, name, phone, comments };
        updateFeedback(currentFeedback);

    }

    const updateFeedback = async (currentFeedback) => {
        try {
            const response = await axios.put("/api/feedback", currentFeedback);
            console.log("updated");
        } catch (error) {
            console.log(error.response);
        }
    };


    return (
        <div>
            {feedbacks !== null ? (
                <div>
                    {
                        feedbacks.map((feedback) => {
                            return (
                                <>
                                    <Form noValidate validated={validated} onSubmit={(e) => { handleSubmit(e); onSubmit(e) }}>
                                        <Row className="mb-3">
                                            <Form.Group as={Col} md="6" controlId="validationCustom01">
                                                <Form.Label>Id</Form.Label>
                                                <Form.Control
                                                    required
                                                    name='id'
                                                    onChange={(e) => setId(e.target.value)}
                                                    value={feedback.id}
                                                    type="text"
                                                    placeholder="Id"
                                                />
                                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                            </Form.Group>
                                        </Row>

                                        <Row className="mb-3">
                                            <Form.Group as={Col} md="6" controlId="validationCustom02">
                                                <Form.Label>Name</Form.Label>
                                                <Form.Control
                                                    required
                                                    name='name'
                                                    onChange={(e) => setName(e.target.value)}
                                                    value={feedback.name}
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
                                                        onChange={(e) => setPhone(e.target.value)}
                                                        value={feedback.phone}
                                                        type="text"
                                                        placeholder="Contact Number"
                                                        aria-describedby="inputGroupPrepend"
                                                        required
                                                    />
                                                    <Form.Control.Feedback type="invalid">
                                                        Please choose a username.
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
                                                    onChange={(e) => setComments(e.target.value)}
                                                    value={feedback.comments}
                                                    type="text"
                                                    maxlength="200"
                                                    placeholder="Comments Max length 200 characters"
                                                />
                                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                            </Form.Group>
                                        </Row>
                                        {/* <Button variant="primary" type='submit'>Update</Button> */}
                                        <Button variant="primary" onClick={() => deleteFeedback(feedback.id)}>Delete</Button>
                                    </Form>
                                    <br /><br />
                                </>
                            )
                        })
                    }
                </div>
            ) : (
                <div>Loading post...</div>
            )
            }
        </div >
    );
}