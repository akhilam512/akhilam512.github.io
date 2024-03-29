//import addToMailchimp from "gatsby-plugin-mailchimp"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import "bootstrap/dist/css/bootstrap.css"

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
  text-align: center;
  display: block;
`

const SubStackDiv = styled.iframe`
  background: white;
  border: none;
  border-radius: 20px;
  margin: 0;
  margin-bottom: 0.5em;
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

export default class MailChimpForm extends React.Component {
  constructor() {
    super()
    this.state = { email: "", result: null }
  }
  // _handleSubmit = async (e) => {
  //   const result = await addToMailchimp(this.state.email)
  //   this.setState({ result: result })
  // }
  // handleChange = (event) => {
  //   this.setState({ email: event.target.value })
  // }

  render() {
    return (
      <div>
        <br />
        <SocialMediaDiv>
          <MailHeader>
            {" "}
            Yes. Another newsletter. {" "}
          </MailHeader>

          <SubStackDiv
            src="https://akhilkg.substack.com/embed"
            width="480"
            height="320"
            frameborder="0"
            scrolling="no"
          ></SubStackDiv>
        </SocialMediaDiv>
        <Container maxWidth="sm">
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
            crossorigin="anonymous"
          />
        </Container>
        <SocialMediaDiv>
          <a
            href="https://twitter.com/akhlkg/"
            target="_blank"
            rel="noopener noreferrer"
            class="fa fa-twitter"
          ></a>
          <a
            href="https://www.linkedin.com/in/akhil-k-g/"
            target="_blank"
            rel="noopener noreferrer"
            class="fa fa-linkedin"
          ></a>
          <a
            href="https://github.com/akhilam512/"
            target="_blank"
            rel="noopener noreferrer"
            class="fa fa-github"
          ></a>
          <br /> <br />© 2021 akhilkg
        </SocialMediaDiv>
      </div>
    )
  }
}
