import addToMailchimp from "gatsby-plugin-mailchimp"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"

import { Typography } from "@material-ui/core"
import React from "react"
import styled from "@emotion/styled"
import { withStyles } from "@material-ui/styles"

const MailContainer = styled.div`
  margin: auto;
  width: 75%;
`
const MailHeader = styled.div`
  margin: 0 auto;
  padding: 1rem 1.0875rem;
  text-align: center;
  font-size: 1.2em;
`

const BootstrapButton = withStyles({
  root: {
    color: 'black',
    boxShadow: 'none',
    textTransform: 'capitalize',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    backgroundColor: '#f7fc62',
    borderColor: 'lightgrey',
    fontFamily: 'Lato',
    opacity: '0.8',
    '&:hover': {
      backgroundColor: '#c3c748',
      borderColor: 'lightgrey',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#c3c748',
      borderColor: 'lightgrey',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.1rem rgba(0,123,255,.5)',
    },
  },
})(Button);

export default class MailChimpForm extends React.Component {
  constructor() {
    super()
    this.state = { email: "", result: null}

  }
  _handleSubmit = async(e) => {
    const result = await addToMailchimp(this.state.email);
    this.setState({ result: result })
  }
  handleChange = (event) => {
    this.setState({ email: event.target.value })
  }

  render() {
    return (
      <Container maxWidth="sm">
        <MailHeader> Get not-so-frequent updates of new posts </MailHeader>
        <form onSubmit={this._handleSubmit}>
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid item >
              <Paper>
                <TextField
                  id="outlined-email-input"
                  label="Email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  variant="outlined"
                  className="TextField"
                  onChange={this.handleChange}
                />
              </Paper>
            </Grid>
            &nbsp;&nbsp;&nbsp;
            <Grid item >
              <Paper>
                <BootstrapButton
                  variant="contained"
                  label="Subscribe"
                  type="submit"
                >
                  <Typography> Subscribe </Typography>
                </BootstrapButton>
              </Paper>
            </Grid>
          </Grid>
        </form>
      </Container>
    );
  }
}
