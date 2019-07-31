import React from 'react';
import SlideButton from '../../../components/Buttons/SlideButton/SlideButton';
import { Formik, Form } from 'formik';
import FormInput from '../../../components/FormInput/FormInput';
import {
    Row,
    Col,
    Wrapper
} from './styles.js'
function ContactForm() {
    return (
        <div>
            <Formik
                initialValues={{ name: '', email: '', comments:'' }}
                validate={validate}>
                {({ isSubmitting }) => (
                    <Form>
                       <Wrapper>
                       <Row>
                            <Col>
                                <FormInput
                                    type="text"
                                    name="name"
                                    label="Name"
                                />
                            </Col>
                            <Col>
                                <FormInput
                                    type="text"
                                    name="email"
                                    label="Email"
                                />
                            </Col>
                        </Row>
                        <div>
                            <FormInput
                                type="text"
                                name="comments"
                                label="Any Comments?"
                            />
                        </div>
                       </Wrapper>
                        <SlideButton type="submit">Subscribe</SlideButton>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

function validate(values) {
    console.log(values);
}
export default ContactForm;
