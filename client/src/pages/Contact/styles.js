import styled from 'styled-components';
import { InputTextBase , themeProps} from '../../components/shared/styles';


export const Title = styled.h2`
  font-family:'GothamMedium';
  font-size:40px;
  font-weight:500;
  line-height:1.1;
  letter-spacing:1.78;
  max-width:400px;
  span{
    color:${themeProps.colors.orange}
  }
`;

export const Col = styled.div`
  position:relative;
  &.col-1{
    width:400px
  }  
  &.col-2{
      flex:1;
      max-width:543px;
  }
`;

export const Wrapper = styled.div`
    display:flex;
    width:100%;
    align-items:center;

    @media(max-width:767px){
      display:block;
      margin-bottom:35px;
      
      ${Col}.col-1{
        margin: 0 auto;
        padding-right:35px;
        width:calc(100% - 35px);
        max-width:400px;
      }

      ${Col}.col-2{
          max-width:none;
          display:flex;
          flex-direction:column;
          align-items:center;
          margin-top:-112px;
          position:relative;
          z-index:1;
          text-align:center;
      }
      ${Title}{
        font-size:36px;
        margin-top:65px;
      }

    }
`;

