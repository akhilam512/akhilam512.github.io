import "bootstrap/dist/css/bootstrap.css"
import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"
import avatarImg from "./../images/me.jpeg"

const Container = styled.div`
  text-align: center;
  display: block;
  max-width: 100%;
`
const OuterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: 65vh;
`
const Description = styled.p`
  padding: 0;
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
  text-align: left
  display: block;
  margin: auto;
`
const NameHeader = styled.h1`
  text-decoration: none;
  font-size: 3.3rem;
  margin-bottom: 0em;
`
const NameHeader2 = styled.h4`
  text-decoration: none;
  font-size: 2rem;
  margin-bottom: 0em;
`
const NameHeader3 = styled.h4`
  text-decoration: none;
  font-size: 2.1rem;
  margin-bottom: 0em;
`
const HRBreakFull = styled.hr`
  width: 70%;
  max-width: 100%;
  margin: 0 auto;
  display: block;
  margin-bottom: 0.9rem;
  border: 0.01em solid grey;
  border-radius: 2px;
  border-color: grey;
  margin-top: 0.8em;
`
const AvatarContainer = styled.div`
  height: 100%;
  max-width: 40%;
  min-width: 30%;
  min-height: 30%;
  display: block;
  margin: auto;
`
const NameText = styled.span`
  background-image: linear-gradient(
    rgba(246, 252, 58, 0.8),
    rgba(246, 252, 58, 0.8)
  );
  padding-left: 0.2em;
  padding-right: 0.2em;
`
const LandingBio = () => (
  <StaticQuery
    query={graphql`
      query LandingSiteTitleQuery {
        site {
          siteMetadata {
            title
            subtitle
          }
        }
      }
    `}
    render={(data) => (
      <OuterContainer>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          crossorigin="anonymous"
        />
        <Container>
          <br></br>
          <AvatarContainer>
            <img src={avatarImg} className="avatarImg img-responsive" />
          </AvatarContainer>
          <NameHeader> Akhil K G </NameHeader>

          <NameHeader2>
            {" "}
            <NameText> {data.site.siteMetadata.subtitle} </NameText>
          </NameHeader2>

          <Description>
            ‣ Co-Founder @
            <a
              href="https://gitlit.co/"
              target="_blank"
              rel="noopener noreferrer"
              class="Link2"
            >
              GitLit
            </a>{" "}
            🔥
            <br /> ‣ Member @
            <a
              href="https://amfoss.in/"
              target="_blank"
              rel="noopener noreferrer"
              class="Link2"
            >
              amFOSS
            </a>{" "}
            💡
          </Description>
          <HRBreakFull />
          <div>
            <a
              href="https://twitter.com/akhlkg/"
              target="_blank"
              rel="noopener noreferrer"
              class="fa fa-twitter"
            ></a>
            <a
              href="https://github.com/akhilam512/"
              target="_blank"
              rel="noopener noreferrer"
              class="fa fa-github"
            ></a>
            <a
              href="https://www.linkedin.com/in/akhil-k-g/"
              target="_blank"
              rel="noopener noreferrer"
              class="fa fa-linkedin"
            ></a>
            <a
              href="mailto:akhilkg@amfoss.in"
              target="_blank"
              rel="noopener noreferrer"
              class="fa fa-envelope"
            ></a>
            <a
              href="https://www.quora.com/profile/Akhil-K-Gangadharan-2"
              target="_blank"
              rel="noopener noreferrer"
              class="fa fa-quora"
            ></a>
          </div>
        </Container>
      </OuterContainer>
    )}
  />
)

NameHeader.propTypes = {
  siteTitle: PropTypes.string,
  subtitle: PropTypes.string,
}

NameHeader.defaultProps = {
  siteTitle: ``,
  subtitle: ``,
}

export default LandingBio
