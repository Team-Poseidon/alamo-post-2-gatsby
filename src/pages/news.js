import React from 'react'
import Box from '../components/box'
import Link from '../components/link'
import { Row,Col, Container } from 'reactstrap'
import PageTitle from '../components/page-title'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

export default ({data}) => {
	const newsPosts = data.allStrapiNewsPosts.edges
	return (
		<React.Fragment>
			<PageTitle title="Post News"/>
			<Container>
				<Row className="py-5">
					<Col md={12} className="d-flex justify-content-around">
						{newsPosts.map( ({node}) => {
							const {strapiId, title, content,slug, avatar} = node
							return (
								<Link key={strapiId} to={`/news/${slug}`} >
									<Box>
										<Img fluid={avatar.childImageSharp.fluid} />
										<h4>{title}</h4>
										<p>{content}</p>
									</Box>
								</Link>
							)
						})}
						
					</Col>
				</Row>
			</Container>
		</React.Fragment>
	)
}

export const query = graphql`
query NewsPostsQuery {
	allStrapiNewsPosts {
	  edges {
		node {
		  strapiId
		  title
		  content
		  slug
		  avatar {
			childImageSharp {
			  fluid(maxWidth: 350){
				  ...GatsbyImageSharpFluid
			  }
			}
		  }
		}
	  }
	}
  }
  
`