import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import AdjustIcon from "@material-ui/icons/Adjust";
import SurroundSoundIcon from "@material-ui/icons/SurroundSound";

const Footer = () => {
  return (
    <Box>
      <h1 style={{ color: "black", textAlign: "center", marginTop: "-50px" }}>
        Belgium Webnet @ Rahul Jain
      </h1>
      <Container>
        <Row>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href="#">
              <AdjustIcon />
              Aim
            </FooterLink>
            <FooterLink href="#">
              <SurroundSoundIcon />
              Vision
            </FooterLink>
          </Column>
          <Column>
            <Heading>Services</Heading>
            <FooterLink href="#">
              <img src="./favicon1.ico" />
              Diamond
            </FooterLink>
            <FooterLink href="#">
              <img src="./1.ico" />
              Gem Stones
            </FooterLink>
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="https://www.google.com/maps/dir/22.7465272,75.8860845/belgium+webnet/@1.9365862,-85.9148472,3z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x89c2590a50b3a235:0x8af09874060f51fc!2m2!1d-73.9798343!2d40.7569558">
              <LocationCityIcon />
              New York
            </FooterLink>
            <FooterLink href="#">
              <LocationOnIcon />
              Indore
            </FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="https://www.facebook.com/belgiumwebnet/">
              <FacebookIcon />
              <span style={{ marginLeft: "10px" }}>Facebook</span>
            </FooterLink>
            <FooterLink href="https://www.instagram.com/belgium_webnet/?hl=en">
              <InstagramIcon />
              <span style={{ marginLeft: "10px" }}>Instagram</span>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;
