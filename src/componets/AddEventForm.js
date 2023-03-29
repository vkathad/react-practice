import {  json, redirect, useActionData, useNavigate, useNavigation, useSubmit } from 'react-router-dom';
import Form from 'react-bootstrap/Form';

import { Field, Formik,useFormikContext } from 'formik';
import { Button, Col, Modal, Row } from 'react-bootstrap';
import { getAuthToken } from '../Utils/auth';


import * as yup from "yup";
import { useEffect } from 'react';


const schema = yup.object().shape({

    title: yup.string().required(),
    image: yup.string().required(),
    description: yup.string().required(),
    date: yup.string().required(),

});

function AddEventForm() {
   
    const submit = useSubmit();

    
    function handleSave(){
        Formik.submitForm();
        alert("form save");
    }

    return <>
        <Row>
            <Col   >

                <Formik
                    validationSchema={schema}
                    onSubmit={async (values) => {
                        submit(values, { method: "post" });
                        // await new Promise((r) => setTimeout(r, 500));
                        // alert(JSON.stringify(values, null, 2));
                    }}
                    
                    initialValues={{
                        title: "",
                        image: "",
                        description: "",
                        date: "",
                        method: "post",
                    }}
                >
                    {
                        ({
                            handleSubmit,
                            handleChange,
                            handleBlur,
                            values,
                            touched,
                            isValid,
                            errors,
                        }) => (
                            <Form id='my-form' noValidate onSubmit={handleSubmit}>
                                <Form.Group className="mb-3" controlId="formGroupEmail">
                                    <Form.Label>Title</Form.Label>
                                    <Form.Control type="text" name='title' placeholder="Enter title" value={values.title} onChange={handleChange}
                                        isValid={touched.title && !errors.title} isInvalid={!!errors.title} />

                                    <Form.Control.Feedback type="invalid">
                                        {errors.title}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formGroupImage">
                                    <Form.Label>Image</Form.Label>
                                    <Form.Control type="text" name='image' placeholder="Enter image" value={values.image} onChange={handleChange}
                                        isValid={touched.image && !errors.image} isInvalid={!!errors.title} />

                                    <Form.Control.Feedback type="invalid">
                                        {errors.image}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formGroupEmail">
                                    <Form.Label>Date</Form.Label>
                                    <Form.Control type="text" name='date' placeholder="Enter date" value={values.date} onChange={handleChange}
                                        isValid={touched.date && !errors.date} isInvalid={!!errors.title} />

                                    <Form.Control.Feedback type="invalid">
                                        {errors.date}
                                    </Form.Control.Feedback>
                                </Form.Group>


                                <Form.Group className="mb-3" controlId="formGroupEmail">
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control type="text" name='description' placeholder="Enter description" value={values.description} onChange={handleChange}
                                        isValid={touched.description && !errors.description} isInvalid={!!errors.title} />

                                    <Form.Control.Feedback type="invalid">
                                        {errors.description}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                
                                {/* <Button type="submit">Submit form</Button> */}
                                
                            </Form>
                            
                             
                        )}
                </Formik>

               
            </Col>
        </Row>

    </>

}
export async function action({ request, params }) {
    alert("fs");
    const formData = await request.formData();

    const eventData = Object.fromEntries(formData);

    console.log(eventData);
    const method = formData.get('method');

    console.log(method);

    const token = getAuthToken();
    
    // const eventData = {
    //   title: data.get('title'),
    //   image: data.get('image'),
    //   date: data.get('date'),
    //   description: data.get('description'),
    // };

    let url = 'http://localhost:8080/events';

    if (method === 'PATCH') {
        const eventId = params.eventId;
        url = 'http://localhost:8080/events/' + eventId;
    }

    const response = await fetch(url, {
        method: method,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify(eventData),
    });

    if (response.status === 422) {
        return response;
    }

    if (!response.ok) {
        throw json({ message: 'Could not save event.' }, { status: 500 });
    }

    return redirect('/events');
}

export default AddEventForm;