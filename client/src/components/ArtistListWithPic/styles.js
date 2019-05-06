import styled from 'styled-components';

export const List = styled.ul`
    margin:0;
    padding:0;
    list-style-type:none;
    display:flex;
    width:100%;
    flex-wrap:wrap;
    max-width:1080px;
    margin:0 auto;
    overflow:hidden;

    @media(max-width:767px){
        max-width:320px;
    }
`;