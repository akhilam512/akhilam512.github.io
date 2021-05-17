import "bootstrap/dist/css/bootstrap.css"
import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"
import avatarImg from "./../images/akhil_yellow_compressed.png"
import kdenliveImg from "./../images/kdenlive.png"
import blockistanImg from "./../images/blockistan.png"
import amfossImg from "./../images/amfoss.jpeg"
import growtraImg from "./../images/growtra.png"
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

const NameHeader = styled.h1`
  text-decoration: none;
  font-size: 3.3rem;
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
          <Container>
            <br></br>
            <AvatarContainer>
              <img src={avatarImg} className="avatarImg img-responsive" />
            </AvatarContainer>
            <NameHeader>
              {" "}
              <strong> akhil kg </strong>{" "}
            </NameHeader>
            <NameHeader2> engineer + artist + salesman</NameHeader2>
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
                href="https://dribbble.com/akhilkg"
                target="_blank"
                rel="noopener noreferrer"
                class="fa fa-dribbble"
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
        </div>
        <div class="arrow bounce">
          <Link
            activeClass="active"
            to="story"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            {" "}
            <a
              class="fa fa-arrow-down linkz"
              style={{ textDecoration: "none" }}
              href="#"
            />
          </Link>
        </div>
        <SecondContainer className="row-sm" id="story">
          <NameHeader2 style={{ textDecoration: "underline" }}>
            {" "}
            <NameText2>my story </NameText2>
          </NameHeader2>{" "}
          <br />
          <NameHeader3>
            {" "}
            as an engineer{" "}
            <ParaText>
              {" "}
              Making, googling, breaking <br />{" "}
            </ParaText>{" "}
          </NameHeader3>{" "}
          <br />
          <MainItemContainer>
            <h5
              style={{
                fontSize: "1.4rem",
                fontWeight: "bold",
                paddingBottom: "0.6em",
              }}
            >
              {" "}
              > Open Source <br />{" "}
            </h5>
            <SubItemContainer>
              <NameHeader3half>
                {" "}
                <i style={{ fontSize: "0.9rem", fontWeight: "normal" }}>
                  {" "}
                  Tools used: C++, C, Qt, Git
                </i>
              </NameHeader3half>{" "}
              <br />
              <HeaderItem>
                <NameHeader4>
                  {" "}
                  →{" "}
                  <span style={{ marginLeft: "0.3em" }}>
                    {" "}
                    <strong>
                      {" "}
                      Kdenlive
                      <i style={{ fontSize: "0.9rem", fontWeight: "normal" }}>
                        , a video editor from KDE
                      </i>{" "}
                    </strong>{" "}
                    - Developer{" "}
                  </span>
                </NameHeader4>{" "}
                <span style={{ fontSize: "1em", marginLeft: "3em" }}>
                  {" "}
                  <a
                    href="https://github.com/KDE/kdenlive/commits?author=akhilam512"
                    target="_blank"
                  >
                    {" "}
                    [Commits]{" "}
                  </a>{" "}
                </span>
              </HeaderItem>
              <HeaderItem>
                <NameHeader4>
                  {" "}
                  →{" "}
                  <span style={{ marginLeft: "0.3em" }}>
                    {" "}
                    <strong> Google Summer of Code, 2019 </strong> - Developer{" "}
                  </span>
                </NameHeader4>{" "}
                <span style={{ fontSize: "1em", marginLeft: "3em" }}>
                  {" "}
                  <a
                    href="https://summerofcode.withgoogle.com/archive/2019/projects/4967044749983744/"
                    target="_blank"
                  >
                    {" "}
                    [Work Report]{" "}
                  </a>{" "}
                </span>
              </HeaderItem>
              <HeaderItem>
                <NameHeader4>
                  {" "}
                  →{" "}
                  <span style={{ marginLeft: "0.3em" }}>
                    {" "}
                    <strong> Google Summer of Code, 2020 </strong> - Mentor{" "}
                  </span>{" "}
                </NameHeader4>
                <span style={{ fontSize: "1em", marginLeft: "3em" }}>
                  {" "}
                  <a
                    href="https://summerofcode.withgoogle.com/archive/2020/projects/6615488269910016/"
                    target="_blank"
                  >
                    {" "}
                    [Work Report]{" "}
                  </a>{" "}
                </span>{" "}
              </HeaderItem>
              <HeaderItem>
                <p style={{ paddingBottom: "0.1em" }}> Projects developed </p>
                <HeaderItem>
                  <NameHeader4>
                    {" "}
                    →{" "}
                    <span style={{ marginLeft: "0.3em" }}>
                      {" "}
                      <strong> QmlRenderer </strong> <br />{" "}
                    </span>{" "}
                  </NameHeader4>
                  <p
                    style={{
                      marginLeft: "3em",
                      textDecoration: "none",
                      fontSize: "1rem",
                      textAlign: "justify",
                      textWeight: "none",
                      marginTop: "-1em",
                    }}
                  >
                    QmlRenderer is a Qt library that can render QML into frames
                    at a custom frame rate.
                  </p>{" "}
                  <span style={{ fontSize: "1em", marginLeft: "3em" }}>
                    {" "}
                    <a
                      href="https://github.com/akhilam512/QmlRenderer"
                      target="_blank"
                    >
                      {" "}
                      [GitHub]{" "}
                    </a>{" "}
                  </span>{" "}
                </HeaderItem>
                <HeaderItem>
                  <NameHeader4>
                    {" "}
                    →{" "}
                    <span style={{ marginLeft: "0.3em" }}>
                      {" "}
                      <strong> MLT Module for rendering QML </strong> <br />
                    </span>{" "}
                  </NameHeader4>
                  <p
                    style={{
                      marginLeft: "3em",
                      textDecoration: "none",
                      fontSize: "1rem",
                      textAlign: "justify",
                      textWeight: "none",
                      marginTop: "0.4em",
                    }}
                  >
                    MLT is a multimedia framework used by Kdenlive. I integrated
                    QmlRenderer in MLT's codebase (written in C) to allow
                    Kdenlive to render QML into video frames.
                  </p>{" "}
                  <span style={{ fontSize: "1em", marginLeft: "3em" }}>
                    {" "}
                    <a href="https://github.com/akhilam512/mlt" target="_blank">
                      {" "}
                      [GitHub]{" "}
                    </a>{" "}
                  </span>{" "}
                </HeaderItem>
              </HeaderItem>
            </SubItemContainer>
          </MainItemContainer>
          <ImageContainer>
            <img
              src={kdenliveImg}
              style={{ marginTop: "1em", marginBottom: "4em", width: "70%" }}
              alt="kdenlive"
            />
          </ImageContainer>
          <MainItemContainer>
            <h5
              style={{
                fontSize: "1.4rem",
                fontWeight: "bold",
                paddingBottom: "0.6em",
                paddingTop: "0.9em",
              }}
            >
              {" "}
              > SaaS <br />{" "}
            </h5>
            <SubItemContainer>
              <NameHeader3half>
                {" "}
                <i style={{ fontSize: "0.9rem", fontWeight: "normal" }}>
                  {" "}
                  Tools used: ReactJS, Django, GraphQL
                </i>
              </NameHeader3half>{" "}
              <br />
              <HeaderItem>
                <NameHeader4>
                  {" "}
                  →{" "}
                  <span style={{ marginLeft: "0.3em" }}>
                    {" "}
                    <strong>
                      {" "}
                      GitLit <br />
                    </strong>{" "}
                  </span>
                </NameHeader4>{" "}
                <p
                  style={{
                    marginLeft: "3em",
                    textDecoration: "none",
                    fontSize: "1rem",
                    textAlign: "justify",
                    textWeight: "none",
                    marginTop: "-1em",
                  }}
                >
                  GitLit was my first SaaS. It was meant to be a platform for
                  students to 1) find open source projects and kickstart their
                  open source journey easily 2) build a work profile, a resume
                  of sorts with commits, testimonials, from the projects they
                  contribute to 3) get hired by startups.
                  <br /> GitLit did not make it beyond MVP due to a variety of
                  reasons, the major one being a lack of a clear monetising
                  strategy and funds. Learned a lot tho!
                </p>{" "}
                <span style={{ fontSize: "1em", marginLeft: "3em" }}>
                  {" "}
                  <a href="https://gitlit.co" target="_blank">
                    {" "}
                    [Website]{" "}
                  </a>{" "}
                </span>
              </HeaderItem>
              <HeaderItem>
                <NameHeader4>
                  {" "}
                  →{" "}
                  <span style={{ marginLeft: "0.3em" }}>
                    {" "}
                    <strong> Blockistan </strong>{" "}
                  </span>
                </NameHeader4>{" "}
                <p
                  style={{
                    marginLeft: "3em",
                    textDecoration: "none",
                    fontSize: "1rem",
                    textAlign: "justify",
                    textWeight: "none",
                    marginTop: "0.4em",
                  }}
                >
                  Blockistan was my next experiment, along with my friend,{" "}
                  <a href="https://harshithpabbati.me/" target="_blank">
                    {" "}
                    Harshith{" "}
                  </a>
                  . Blockistan is a "micro-SaaS", SaaS built on top of existing
                  PaaS/SaaS. It allows you to mass block users on Twitter with a
                  single click.
                  <br /> Blockistan received a lot of hype and it remains to be
                  the single solution for mass blocking users on Twitter. Cool
                  project, again learned a lot - power of niches, affiliate
                  marketing, and made a bunch of friends in the SaaS and sales
                  world.
                </p>{" "}
                <span style={{ fontSize: "1em", marginLeft: "3em" }}>
                  {" "}
                  <a href="https://blockistan.com" target="_blank">
                    {" "}
                    [Website]{" "}
                  </a>{" "}
                </span>
              </HeaderItem>
            </SubItemContainer>
          </MainItemContainer>
        </SecondContainer>
        <ImageContainer>
          <img
            src={blockistanImg}
            style={{ marginTop: "1em", marginBottom: "4em", width: "70%" }}
            alt="kdenlive"
          />
        </ImageContainer>
        <hr style={{ marginTop: "3em" }} />

        <SecondContainer className="row-sm" style={{ marginTop: "-6em" }}>
          <NameHeader3>
            {" "}
            as an artist{" "}
            <ParaText>
              {" "}
              Writing, designing, building <br />{" "}
            </ParaText>{" "}
          </NameHeader3>{" "}
          <br />
          <MainItemContainer>
            <h5
              style={{
                fontSize: "1.4rem",
                fontWeight: "bold",
                paddingBottom: "0.6em",
              }}
            >
              {" "}
              > amFOSS <br />{" "}
            </h5>
            <SubItemContainer>
              <NameHeader3half>
                {" "}
                <i style={{ fontSize: "0.9rem", fontWeight: "normal" }}>
                  {" "}
                  <a href="http://amfoss.in" target="_blank">
                    amFOSS{" "}
                  </a>{" "}
                  is a student community in Amrita Vishwa Vidyapeetham,
                  Amritapuri and the reason everything I am now. I joined amFOSS
                  as a student and with the help of the seniors and Vipin sir,
                  kicked off my open source journey and with it everything else
                  in 2018
                </i>
              </NameHeader3half>{" "}
              <br />
              <HeaderItem>
                <NameHeader4>
                  {" "}
                  →{" "}
                  <span style={{ marginLeft: "0.3em" }}>
                    {" "}
                    <strong> Content Writer </strong>{" "}
                  </span>
                </NameHeader4>{" "}
                <p
                  style={{
                    marginLeft: "3em",
                    textDecoration: "none",
                    fontSize: "1rem",
                    textAlign: "justify",
                    textWeight: "none",
                    marginTop: "0.4em",
                  }}
                >
                  In my first year at amFOSS, I was part of the Content Writing
                  Team. I wrote all forms of content including long-form
                  articles and social media posts to short-engaging content like
                  tweets and copywriting. I continue doing it till date, now
                  mostly focusing on copywriting, along with reviewing and
                  managing the team's work.
                </p>{" "}
                {/* <span style={{ fontSize: "1em", marginLeft: "3em" }}>
                  {" "}
                  <a href="https://blockistan.com" target="_blank">
                    {" "}
                    [Website]{" "}
                  </a>{" "}
                </span> */}
              </HeaderItem>
              <HeaderItem>
                <NameHeader4>
                  {" "}
                  →{" "}
                  <span style={{ marginLeft: "0.3em" }}>
                    {" "}
                    <strong> Graphic Designer + Illustrator </strong>{" "}
                  </span>
                </NameHeader4>{" "}
                <p
                  style={{
                    marginLeft: "3em",
                    textDecoration: "none",
                    fontSize: "1rem",
                    textAlign: "justify",
                    textWeight: "none",
                    marginTop: "0.4em",
                  }}
                >
                  From around second year at amFOSS, I started learning how to
                  design posters and visual media for social media. I learnt how
                  to create illustrations, using tools like Adobe Illustrator,
                  InDesign, Canva, Premiere Pro. All of this turned out to be
                  real handy skills that proved extremely useful when I started
                  working on my SaaS projects.
                </p>{" "}
                {/* <span style={{ fontSize: "1em", marginLeft: "3em" }}>
                  {" "}
                  <a href="https://blockistan.com" target="_blank">
                    {" "}
                    [Website]{" "}
                  </a>{" "}
                </span> */}
              </HeaderItem>
              <HeaderItem>
                <NameHeader4>
                  {" "}
                  →{" "}
                  <span style={{ marginLeft: "0.3em" }}>
                    {" "}
                    <strong> Marketing </strong>{" "}
                  </span>
                </NameHeader4>{" "}
                <p
                  style={{
                    marginLeft: "3em",
                    textDecoration: "none",
                    fontSize: "1rem",
                    textAlign: "justify",
                    textWeight: "none",
                    marginTop: "0.4em",
                  }}
                >
                  Around the end of 2nd year, we started focusing on marketing
                  as a different department. Along with my peers and juniors at
                  amFOSS, we strategized ways to capture organic traffic and
                  grow an audience for amFOSS social media accounts. As part of
                  the the team, we spearheaded some campaigns like{" "}
                  <a
                    href="https://twitter.com/amfoss_in/status/1388438844064747525?s=20"
                    target="_blank"
                  >
                    {" "}
                    'The amFOSS Monthly'{" "}
                  </a>
                  .
                </p>{" "}
                {/* <span style={{ fontSize: "1em", marginLeft: "3em" }}>
                  {" "}
                  <a href="https://blockistan.com" target="_blank">
                    {" "}
                    [Website]{" "}
                  </a>{" "}
                </span> */}
              </HeaderItem>
              <HeaderItem>
                <NameHeader4>
                  {" "}
                  →{" "}
                  <span style={{ marginLeft: "0.3em" }}>
                    {" "}
                    <strong> And a lot of stuff </strong>{" "}
                  </span>
                </NameHeader4>{" "}
                <p
                  style={{
                    marginLeft: "3em",
                    textDecoration: "none",
                    fontSize: "1rem",
                    textAlign: "justify",
                    textWeight: "none",
                    marginTop: "0.4em",
                  }}
                >
                  3 headings really can't sum up everything I learned and did as
                  part of the club. Other things that I failed to mention
                  include conducting conferences, programs, hackathons -
                  inviting speakers, outreach efforts - mentoring juniors -
                  setting up systems and pipelines for teams - working on real
                  life projects, both technical and non-technical <br />
                  Today I continue to mentor juniors and be an active member of
                  the club
                </p>{" "}
                {/* <span style={{ fontSize: "1em", marginLeft: "3em" }}>
                  {" "}
                  <a href="https://blockistan.com" target="_blank">
                    {" "}
                    [Website]{" "}
                  </a>{" "}
                </span> */}
              </HeaderItem>
            </SubItemContainer>
          </MainItemContainer>
        </SecondContainer>
        <ImageContainer>
          <img
            src={amfossImg}
            style={{
              marginTop: "1em",
              marginBottom: "4em",
              borderRadius: "1em",
            }}
            alt="kdenlive"
          />
        </ImageContainer>
        <hr style={{ marginTop: "3em" }} />
        <SecondContainer className="row-sm" style={{ marginTop: "-6em" }}>
          <NameHeader3>
            {" "}
            as a salesman{" "}
            <ParaText>
              {" "}
              Prospecting, qualifying, selling <br />{" "}
            </ParaText>{" "}
          </NameHeader3>{" "}
          <br />
          <MainItemContainer>
            <h5
              style={{
                fontSize: "1.4rem",
                fontWeight: "bold",
                paddingBottom: "0.6em",
              }}
            >
              {" "}
              > Growtra <br />{" "}
            </h5>
            <SubItemContainer>
              <NameHeader3half>
                {" "}
                <i style={{ fontSize: "0.9rem", fontWeight: "normal" }}>
                  {" "}
                  <a href="https://growtra.com" target="_blank">
                    Growtra{" "}
                  </a>{" "}
                  is an on-demand lead generation agency for B2B cybersecurity
                  SaaS.
                </i>
              </NameHeader3half>{" "}
              <br />
              <HeaderItem>
                <NameHeader4>
                  {" "}
                  →{" "}
                  <span style={{ marginLeft: "0.3em" }}>
                    {" "}
                    <strong> What we do </strong>{" "}
                  </span>
                </NameHeader4>{" "}
                <p
                  style={{
                    marginLeft: "3em",
                    textDecoration: "none",
                    fontSize: "1rem",
                    textAlign: "justify",
                    textWeight: "none",
                    marginTop: "0.4em",
                  }}
                >
                  At Growtra, we specialize in obtaining warm, high qualified
                  leads for B2B enterprise cybersecurity SaaS. We conduct
                  personalized outreach campaigns for our clients through email,
                  LinkedIn, and phone calls and qualify leads so that our
                  clients can focus on closing deals.
                </p>{" "}
                {/* <span style={{ fontSize: "1em", marginLeft: "3em" }}>
                  {" "}
                  <a href="https://blockistan.com" target="_blank">
                    {" "}
                    [Website]{" "}
                  </a>{" "}
                </span> */}
              </HeaderItem>
              <HeaderItem>
                <NameHeader4>
                  {" "}
                  →{" "}
                  <span style={{ marginLeft: "0.3em" }}>
                    {" "}
                    <strong> Contact us </strong>{" "}
                  </span>
                </NameHeader4>{" "}
                <p
                  style={{
                    marginLeft: "3em",
                    textDecoration: "none",
                    fontSize: "1rem",
                    textAlign: "justify",
                    textWeight: "none",
                    marginTop: "0.4em",
                  }}
                >
                  B2B SaaS looking for warm leads? We charge on per lead basis.
                  If you'd like to work together, book a call here:{" "}
                  <a href="https://growtra.com/contact" target="_blank">
                    {" "}
                    Growtra 📞{" "}
                  </a>
                </p>{" "}
                {/* <span style={{ fontSize: "1em", marginLeft: "3em" }}>
                  {" "}
                  <a href="https://blockistan.com" target="_blank">
                    {" "}
                    [Website]{" "}
                  </a>{" "}
                </span> */}
              </HeaderItem>
            </SubItemContainer>
            <ImageContainer>
              <img
                src={growtraImg}
                style={{
                  marginTop: "1em",
                  marginBottom: "4em",
                  borderRadius: "1em",
                  width: "60%",
                }}
                alt="kdenlive"
              />
            </ImageContainer>
          </MainItemContainer>
        </SecondContainer>
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
