import styled from 'styled-components';
import { ButtonBase } from '../../shared/styles';

export const ToggleBtn = styled(ButtonBase)`
    color:${props => props.color}
    font-size:0;
    position:relative;
    width: 20px;
    height: 20px;
    margin:0 8px;
    
    .stick{
        position:absolute;
        left:0;
        width:100%;
        height:4px;
        background-color:${props => props.color}
        transition: top .2s ease-in-out,
                    bottom .2s ease-in-out;
        &:first-child{
            top:0;
        }
        &:nth-child(2){
            top:50%;
            margin-top:-2px;
        }
        &:nth-child(3){
            bottom:0;
        }
    }
    &.isOpen{
        .stick{
            &:first-child{
                top:8px;
            }
            &:nth-child(3){
                bottom:8px;
            }
        }
    }
`;

ToggleBtn.defaultProps = {
    color: '#fff'
};