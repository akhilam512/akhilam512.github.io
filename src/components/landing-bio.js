import 'bootstrap/dist/css/bootstrap.css';
import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"
import avatarImg from "./../images/me2.jpg"


const Container = styled.div`
  text-align: center;
`

const OuterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: 78vh;
`

const Description = styled.p`
  padding: 0;
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
  text-align: center;
`
const NameHeader = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 0;
`
const NameHeader2 = styled.h2`
  font-size: 2.0rem;
  margin-bottom: 1rem;
`
const NameHeader3 = styled.h3`
  font-size: 2.1rem;
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
          <div>
          <img
            src={avatarImg}
            className="avatarImg"
          />
          </div>
          <NameHeader>Akhil K G</NameHeader>
          <NameHeader2>{data.site.siteMetadata.subtitle}</NameHeader2>
          <Description> Founder @<a href="https://gitlit.co/" target="_blank" rel="noopener noreferrer">GitLit </a> , Member @<a href="https://amfoss.in/" target="_blank" rel="noopener noreferrer">amFOSS </a> </Description>
          <br></br>
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
              href="https://www.quora.com/profile/Akhil-K-Gangadharan-2"
              target="_blank"
              rel="noopener noreferrer"
              class="fa fa-quora"
            ></a>
            <br></br> <br></br>
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
