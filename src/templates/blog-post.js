import React from "react"
import { graphql } from "gatsby"
import styled from "@emotion/styled"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogFooter from "../components/BlogFooter"
import SEOCard from "../images/seo_card.png"

const Content = styled.div`
  margin: 0 auto;
  max-width: 860px;
  padding: 1.45rem 1.0875rem;
  font-size: 1.2em;
`

const MarkedHeader = styled.p`
  display: inline;
  background-image: linear-gradient(
    -100deg,
    rgba(246, 252, 58, 0.79),
    rgba(246, 252, 58, 0.8) 100%,
    rgba(246, 252, 58, 0.81)
  );
  line-height: 1.6;
  font-size: 2rem;
  border-radius: 10px;
  padding-left: 0.2em;
  padding-right: 0.2em;
`

const HeaderDate = styled.p`
  margin-top: 5px;
  color: #606060;
  font-size: 1em;
`
const LightLine = styled.hr`
    border-top: 1px solid gray;
    opacity: 0.6;
}`

// STYLE THE TAGS INSIDE THE MARKDOWN HERE
const MarkdownContent = styled.div`
  a {
    text-decoration: none;
    position: relative;

    background-image: linear-gradient(
      rgba(246, 252, 58, 0.8),
      rgba(246, 252, 58, 0.8)
    );
    background-repeat: no-repeat;
    background-size: 100% 0.2em;
    background-position: 0 88%;
    transition: background-size 0.25s ease-in;
    &:hover {
      background-size: 100% 88%;
    }
  }

  a > code:hover {
    text-decoration: underline;
  }
`

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        keywords={post.frontmatter.title}
        image={SEOCard}
      />
      <Content>
        <MarkedHeader>{post.frontmatter.title}</MarkedHeader>
        {!new String(post.frontmatter.description).includes("1")? <HeaderDate>{post.frontmatter.date}</HeaderDate> : <HeaderDate></HeaderDate> }
        {/* <HeaderDate>{post.frontmatter.date}</HeaderDate> */}
        <br></br>
        <MarkdownContent dangerouslySetInnerHTML={{ __html: post.html }} />
      </Content>
      <LightLine />
      <BlogFooter/>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      excerpt(pruneLength: 160)
      frontmatter {
        date(formatString: "DD MMMM, YYYY")
        path
        title
        description
      }
      fields {
        readingTime {
          text
        }
      }
    }
  }
`
