import React from 'react';
import { Row } from '../../../components/shared/styles';
import {
    Section,
    Wrapper,
    Heading
} from './styles.js';
import EmailForm from '../../../components/EmailForm/EmailForm';

const SectionNewsletter = () => {
    return (
        <Section>
           <Row>
               <Wrapper>
                    <Heading>Want to <span>know</span> about concerts around you?</Heading>
                    <EmailForm />
               </Wrapper>
           </Row>
        </Section>
    );
};

export default SectionNewsletter;