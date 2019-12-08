import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import '../App.css';
export default function AdvertiseJobs() {

    let advertisementCategoryOptions = advertisementCategory.map((data) =>
        <option>{data.name}</option>
        )

    return (
        <div className = "page">
            <div className = "page-title">Creating Your Job Advertisment</div>
            <Form >
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formGridState">
                    <Form.Label>Category</Form.Label>
                    <Form.Control as="select">
                       {advertisementCategoryOptions} 
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="formBasicAdTitle">
                    <Form.Label>Title of advertisement</Form.Label>
                    <Form.Control as="textarea" rows="1" />
                </Form.Group>

                <Form.Group controlId="formBasicAdContect">
                    <Form.Label>Content of advertisement</Form.Label>
                    <Form.Control as="textarea" rows="3" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="I agree to Brighton Board terms and conditions" />
                </Form.Group>
                <Button variant="outline-success" type="submit">
                    Submit
  </Button>
            </Form>

        </div>
    )
}

//to be moved to a better place

var advertisementCategory =
    [{ value: 'Engineering', name: 'Engineering' },
{ value: 'Technology', name: 'Technology' },
{ value: 'Finance', name: 'Finance' },
{ value: 'Hospitality', name: 'Hospitality' }

    ]