//import addToMailchimp from "gatsby-plugin-mailchimp"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import "bootstrap/dist/css/bootstrap.css"
import avatarImg from "./../images/akhil_yellow_compressed.png"
import { Link } from "react-scroll"

import { Typography } from "@material-ui/core"
import React from "react"
import styled from "@emotion/styled"
import { withStyles } from "@material-ui/styles"

const HRHalfBreak = styled.hr`
  width: 50%;
  max-width: 100%;
  margin: 0 auto;
  display: block;
  margin-bottom: 0.5em;
`

const MailContainer = styled.div`
  margin: auto;
  width: 75%;
`
const MailHeader = styled.div`
  margin: 0 auto;
  padding: 1rem 1.0875rem;
  text-align: center;
  font-size: 1em;
`
const SocialMediaDiv = styled.div`
  text-align: left;
  display: block;
`

const SubStackDiv = styled.iframe`
  background: white;
  border: none;
  border-radius: 20px;
  margin: 0;
  margin-bottom: 0.5em;
`
const AvatarContainer = styled.div`
  max-width: 10em;
  display: block;
  text-align: right;
  float: right;
  margin-right: 0em;
`

const NameText2 = styled.span`
  background-image: linear-gradient(
    rgba(246, 252, 58, 0.8),
    rgba(246, 252, 58, 0.8)
  );
  padding-left: 0.2em;
  padding-right: 0.2em;
`

const BootstrapButton = withStyles({
  root: {
    color: "black",
    boxShadow: "none",
    textTransform: "capitalize",
    fontSize: 16,
    padding: "6px 12px",
    border: "1px solid",
    backgroundColor: "#f7fc62",
    borderColor: "lightgrey",
    fontFamily: "Lato",
    opacity: "0.8",
    "&:hover": {
      backgroundColor: "#c3c748",
      borderColor: "lightgrey",
      boxShadow: "none",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#c3c748",
      borderColor: "lightgrey",
    },
    "&:focus": {
      boxShadow: "0 0 0 0.1rem rgba(0,123,255,.5)",
    },
  },
})(Button)

export default class BlogFooter extends React.Component {
  render() {
    return (
      <div style={{ textAlign: "center" }}>
                  <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
            crossorigin="anonymous"
          />
          <br />


      
      <div style={{marginBottom: "2em"}}>
          
            <a
              href="https://www.linkedin.com/in/akhil-k-g/"
              target="_blank"
              rel="noopener noreferrer"
              class="fa fa-linkedin"
            ></a>
            <a
              href="mailto:akhilkg@growtra.com"
              target="_blank"
              rel="noopener noreferrer"
              class="fa fa-envelope"
            ></a>
            <a
              href="https://twitter.com/akhlkg/"
              target="_blank"
              rel="noopener noreferrer"
              class="fa fa-twitter"
            ></a>
            </div>
<br/>
   <span >      Go back to top</span>
        <div class="arrow2 bounceinf">
          <Link
            activeClass="active"
            to="header"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            {" "}
            <a
              class="fa fa-arrow-up linkz"
              style={{ textDecoration: "none", marginTop: '1.5em'}}
              href="#"
            />
          </Link>
        </div>
        <br /> <br />© 2021, Akhil
      </div>
    )
  }
}
