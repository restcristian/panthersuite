import React from 'react';
import Logo from '../../../assets/imgs/footer_logo.svg';
import { Row } from '../../shared/styles';
import SocialIcon from '../../SocialIcon/SocialIcon';
import {
    Col,
    FooterWrapper,
    FooterContainer,
    EmailLink,
    LogoText,
    LinksColumnWrapper,
    LinksList,
    LinksListWrapper,
    IconsWrapper
} from './styles';
const Footer = props => {
    return (
        <FooterContainer>
            <Row>
                <FooterWrapper>
                    <Col className="logoColumn">
                        <img src={Logo} alt="PantherSuite Logo Footer" />
                        <LogoText className = "logoText">
                            Making Music<br />
                            Greater than<br />
                            Yesterday<br />
                            <EmailLink
                                href="mailto:info@panthersuite.net">info@panthersuite.net
                            </EmailLink>
                        </LogoText>
                    </Col>
                    <Col className="linksColumn">
                        <LinksColumnWrapper>
                            <LinksListWrapper>
                                <LinksList>
                                    <li>Concerts</li>
                                    <li>About us</li>
                                    <li>Contact</li>
                                </LinksList>
                                <LinksList>
                                    <li>Concerts</li>
                                    <li>About us</li>
                                    <li>Contact</li>
                                </LinksList>
                            </LinksListWrapper>
                            <IconsWrapper>
                                <ul>
                                    <li><SocialIcon name="facebook" /></li>
                                    <li><SocialIcon name="twitter" /></li>
                                    <li><SocialIcon name="instagram" /></li>
                                    <li><SocialIcon name="youtube" /></li>
                                </ul>
                            </IconsWrapper>
                        </LinksColumnWrapper>
                    </Col>
                </FooterWrapper>
            </Row>
        </FooterContainer>
    );
};

export default Footer;