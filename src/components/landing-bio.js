import "bootstrap/dist/css/bootstrap.css"
import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"
import avatarImg from "./../images/akhil_yellow_compressed.png"
import kdenliveImg from "./../images/kdenlive.png"
import blockistanImg from "./../images/gitlit_logo_final.svg"
import amfossImg from "./../images/amfoss.jpeg"
import growtraImg from "./../images/growtra.png"
import dailyImg from "./../images/daily.svg"
import { Link } from "react-scroll"

const Container = styled.div`
  text-align: center;
  display: block;
  max-width: 100%;
  caret-color: transparent;
`
const Container2 = styled.div`
  text-align: center;
  display: block;
  max-width: 100%;
  min-height: 100vh;
`

const OuterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: col;
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

const NameText2 = styled.span`
  background-image: linear-gradient(
    rgba(246, 252, 58, 0.8),
    rgba(246, 252, 58, 0.8)
  );
  padding-left: 0.2em;
  padding-right: 0.2em;
  padding-top: 0.1em;
  padding-bottom: 0.2em;
`

const NameText3 = styled.span`
  background-image: linear-gradient(
    rgba(246, 252, 58, 0.8),
    rgba(246, 252, 58, 0.8)
  );
  padding-left: 0.2em;
  padding-right: 0.2em;
`

const NameHeader = styled.h1`
  text-decoration: none;
  font-size: 4rem;
  margin-bottom: 0em;
  font-family: Poppins;
  font-weight: normal;
`

const NameHeader2 = styled.h4`
  text-decoration: none;
  font-size: 2rem;
  margin-bottom: 0.3em;
`

const NameHeader3 = styled.h4`
  text-decoration: none;
  text-weight: bold;
  font-size: 1.6rem;
  margin-bottom: 0em;
`
const NameHeader3half = styled.h4`
  text-decoration: none;
  font-size: 1.4rem;
  margin-bottom: 0em;
`

const NameHeader4 = styled.h5`
  text-decoration: none;
  font-size: 1.2rem;
  margin-bottom: 0em;
  margin-left: 1em;
`

const HRBreakFull = styled.hr`
  width: 70%;
  max-width: 100%;
  margin: 0 auto;
  display: block;
  margin-bottom: 0.9rem;
  border: 0.01em solid grey;
  border-radius: 2px;
  margin-top: 0.5em;
`
const AvatarContainer = styled.div`
  max-width: 34%;
  min-width: 30%;
  min-height: 30%;
  display: block;
  margin: auto;
`

const ImageContainer = styled.div`
  width: auto;
  margin: auto;
  text-align: center;
`

const MainItemContainer = styled.div`
  margin-left: 1em;
`

const NameText = styled.span`
  background-image: linear-gradient(
    rgba(246, 252, 58, 0.8),
    rgba(246, 252, 58, 0.8)
  );
  padding-left: 0.2em;
  padding-right: 0.2em;
  border-radius: 10px;
`

const ParaText = styled.p`
  font-size: 1.1rem;
  padding-top: 0.5em;
  text-weight: normal;
`

const SubItemContainer = styled.div`
  margin-left: 1em;
  border-left: 1px solid black;
  padding-left: 1em;
`
const SecondContainer = styled.div`
  padding-top: 9em;
  text-center: center;
  margin: auto;
  min-height: 100vh;
`
const HeaderItem = styled.div`
  margin-bottom: 1em;
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
      <div className="col" style={{ caretColor: "transparent" }}>
        <div className="row-sm">
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
            crossorigin="anonymous"
          />
          <OuterContainer>
          <Container>
            {/* <AvatarContainer>
              <img src={avatarImg} className="avatarImg img-responsive" />
            </AvatarContainer> */}

            <NameHeader>
              {" "}
              <strong> Akhil</strong>{" "}
            </NameHeader>
            {/* <NameHeader2> biz dev-ing at <a href="daily.co" target="_blank"> Daily</a></NameHeader2> <br/> */}
            <NameHeader3 style={{ marginTop: "0.2em"}}>
              is doing stuff at the intersection of <br />
              <NameText> sales, biz dev, & code </NameText>
            </NameHeader3>

            {/* <HRBreakFull /> */}
          </Container>
          </OuterContainer>
        </div>
      </div>
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
