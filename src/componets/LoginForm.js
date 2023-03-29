import { Formik } from 'formik';
import { Button, Col, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useSubmit } from 'react-router-dom';
import * as yup from "yup";



const schema = yup.object().shape({

    email: yup.string().required().email(),
    password: yup.string().required().min(6),

});
function LoginForm() {
    const submit = useSubmit();


    return <>
        <Row>
            <Col md={6}  >

                <Formik
                    validationSchema={schema}
                    onSubmit={async (values) => {
                        submit(values, { method: "post" });
                        // await new Promise((r) => setTimeout(r, 500));
                        // alert(JSON.stringify(values, null, 2));
                      }}
                    initialValues={{
                        email: '',
                        password: '',
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
                            <Form noValidate onSubmit={handleSubmit}>
                                <Form.Group className="mb-3" controlId="formGroupEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" name='email' placeholder="Enter email" value={values.email} onChange={handleChange}
                                        isValid={touched.email && !errors.email} isInvalid={!!errors.email} />

                                    <Form.Control.Feedback type="invalid">
                                        {errors.email}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formGroupPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" value={values.Password} name='password' onChange={handleChange}
                                        isValid={touched.password && !errors.password} isInvalid={!!errors.password} />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.password}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Button type="submit">Submit form</Button>
                            </Form>
                        )}
                </Formik>
            </Col>
        </Row>

    </>

}

export default LoginForm;