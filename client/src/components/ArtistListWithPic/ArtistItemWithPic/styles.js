import styled from 'styled-components';
import { themeProps } from '../../../components/shared/styles.js';
import { backgroundGenerator} from '../../../utils/helpers';


export const Content = styled.div`
   position:absolute;
   top:0;
   left:0;
   width:100%;
   height:100%;
   font-family:'GothamMedium';    
   font-weight:500;
   letter-spacing:1px;
   color:${props =>props.color };       
`;

Content.defaultProps = {
    color:themeProps.colors.orange  
};



export const BottomContent = styled.div`
    position:absolute;
    bottom:0;
    left:0;
    padding:24px;  
    padding-bottom:58px;
`;

export const ArtistTitle = styled.h3`
    font-size:22px;
    margin:0;
    padding:0;
`;

export const ArtistVenue = styled.p`
    margin:0;
    padding:0;
    font-size:16px;
    line-height:25px;
`;

export const ArtistLocation = styled(ArtistVenue)`
    font-family:'GothamBook';
    font-size:14px;
`;

export const SeeMoreBtn = styled.div`
    position:absolute;
    bottom:0;
    right:0;
    width:60px;
    height:60px;
    background-color:rgba(224, 89, 21, 0.8);
    color:${props => props.color};
    transition:width .2s ease-in-out;

    >div {
        position:absolute;
        top:0;
        right:40px;
        width:auto;
        height:100%;
        white-space:nowrap;
        display:flex;
        align-items:center;
        justify-content:center;
        max-width:0;
        overflow:hidden;
        transition:max-width .2s ease-in-out;
    }
    &:before{
        content:'';
        position:absolute;
        top:50%;
        right:27px;
        width:10px;
        height:10px;
        border-top:2px solid ${props => props.color };
        border-right:2px solid ${props => props.color };
        transform:translateY(-50%) rotate(45deg);
    }
`;
SeeMoreBtn.defaultProps = {
    color:themeProps.colors.white
};

export const Date = styled.div`
    position:absolute;
    transform-origin:0px 0px;
    transform:rotate(90deg);
    top:0;
    left:24px;
    padding-left:90px;
    font-size:14px;
    &:before{
        content:'';
        position:absolute;
        top:50%;
        left:10px;
        transform:translateY(-50%);
        width:70px;
        height:1px;
        background:currentColor;
    }
`;

export const ListItemInner = styled.div`
        width:100%;
        height:0;
        padding-top:126.26865671641791044776119402985%;
        background-size:cover;
        background-repeat:no-repeat;
        background-position:center;
        position:relative;
        cursor:pointer; 
        opacity:0;
        visibility:hidden
        transform:translateX(-100px);

        &:before{
            content:'';
            position:absolute;
            top:0;
            left:0;
            width:0;
            height:100%;
            background-color: ${props => backgroundGenerator(props.index)};
            opacity:0.5;
            transition:width .2s ease-in-out;
        }

        &:hover{
            ${SeeMoreBtn} {
                width:147px;
                >div{
                    max-width:100%;
                }
            }
            &:before{
                width:100%;
            }
            ${Content}{
                color:${props => themeProps.colors.white};
            }
        }
`;

ListItemInner.defaultProps = {
    index:0
};

export const ListItem = styled.li`
    width:33.3333%;
    padding:26px;
    
    @media(max-width:1023px){
        width:50%;
    }
    @media(max-width:767px){
        width:100%;
    }
`;