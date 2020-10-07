import React from "react"
import { Link, graphql } from "gatsby"
import { css } from "@emotion/core"
import styled from "@emotion/styled"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Head1 = styled.h1`
    text-align: center;
    font-size: 3rem;
`

const Content = styled.div`
  margin: 0 auto;
  max-width: 860px;
  padding: 1.45rem 1.0875rem;
`

const ArticleDate = styled.h5`
  display: inline;
  color: #606060;
`

const MarkerHeader = styled.h3`
  display: inline;
  border-radius: 1em 0 1em 0;
  font-size: 1.7em;

`

const ReadingTime = styled.h5`
  display: inline;
  color: #606060;
`
const LightLine = styled.hr`
    border-top: 1px dotted gray;
    opacity: 0.6;
}`

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Blog" />
      <Content>
        <Head1> Blog </Head1> <br/> <br/>
        {data.allMarkdownRemark.edges
          .filter(({ node }) => {
            const rawDate = node.frontmatter.rawDate
            const date = new Date(rawDate)
            return date < new Date()
          })
          .map(({ node }) => (
            <div key={node.id}>
              <Link
                to={node.frontmatter.path}
                css={css`
                  text-decoration: none;
                  color: inherit;
                  :hover {
                    text-decoration: none;
                    color: black;
                    background-image: linear-gradient(
                      rgba(246, 252, 58, 0.8),
                      rgba(246, 252, 58, 0.8)
                    );
                  }
                `}
              >
                <MarkerHeader>{node.frontmatter.title}</MarkerHeader>
              </Link>
              <div>
                <ArticleDate>{node.frontmatter.date}</ArticleDate>
              </div>
              <LightLine/>
            </div>

          ))}
      </Content>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { draft: { eq: false } } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD/MM/YYYY")
            rawDate: date
            path
          }
          fields {
            slug
            readingTime {
              text
            }
          }
          excerpt
        }
      }
    }
  }
`
