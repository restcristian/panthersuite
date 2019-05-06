import React, { useState } from 'react';
import {
    Form,
    Input,
    SubmitButton
} from './styles.js'

import SocialIcon from '../SocialIcon/SocialIcon';

const EmailForm = props => {
    const [email, setEmail] = useState('');

    const onEmailChange = e => {
        setEmail(e.target.value);
    };

    const onEmailSubmit = e => {
        e.preventDefault();
    };
    return (
        <Form onSubmit={onEmailSubmit}>
            <div>
                <Input
                    type="email"
                    onChange={onEmailChange}
                    value={email}
                    placeholder = "Enter Email"
                />
                <SubmitButton type = "submit">
                    <SocialIcon name="email" />
                </SubmitButton>
            </div>
        </Form>
    );
};

export default EmailForm;