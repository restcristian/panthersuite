import React from 'react';
import { Field, ErrorMessage } from 'formik';
import { Input } from './styles';

function FormInput(props) {
    return (
        <>
            <Field
                name={props.name}
                render={({ field }) => (
                    <Input {...field} placeholder={props.label} />
                )}
            />
        </>
    );
}

export default FormInput;
