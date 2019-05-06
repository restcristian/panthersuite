import styled from 'styled-components';
import {ButtonBase, InputTextBase} from '../shared/styles';

export const ModalContainer = styled.div`
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    z-index:200;
    background-color:#0a1c2e;
    display:flex;
    justify-content:center;
    align-items:center;
    padding:48px;
    @media(max-width:768px){
        padding:24px;
    }
`;

export const ModalWrapper = styled.div`
    background-color:#fff;
    width:100%;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    position:relative;
    padding:24px;  
`;
export const Form = styled.form`
    display:flex;
    position:relative;
    
`
export const CloseButton = styled(ButtonBase)`
    position:absolute;
    top:24px;
    right:24px;
    color:${props => props.color};
    font-size:27px;
    border:2px solid ${props => props.color};
`;

CloseButton.defaultProps = {
    color:'#000'
};

export const SubmitButton = styled(ButtonBase)`
    color:${props => props.color};
    border:2px solid ${props => props.color};
    padding:20px;
    margin-bottom:4px;
    position: absolute;
    bottom: 0;
    right: 0;
    font-size:16px;
    font-weight:bold;
`;
SubmitButton.defaultProps = {
    color:"#000"
};

export const InputText = styled(InputTextBase)`
    padding:20px;
    border-bottom:1px solid gray;
    font-size:40px;
    padding-right: 76px;
    width: 100%;
`;


