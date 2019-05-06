import styled from 'styled-components';
import {themeProps} from '../../../components/shared/styles';

export const Section = styled.section`
    background-color:${props => props.backgroundColor};
`;
Section.defaultProps = {
    backgroundColor:themeProps.colors.white
};
