import React from 'react'
import Layout from '../components/layout'
import Box from '../components/box'
import Link from '../components/link'
import { Row,Col, Container } from 'reactstrap'
import PageTitle from '../components/page-title'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

export default ({data}) => {
	const officers = data.allStrapiOfficers.edges
	return (
		<React.Fragment>
			<PageTitle title="Officers"/>
			<Container>
				<Row className="py-5">
					<Col md={12} className="d-flex justify-content-around">
						{officers.map( ({node}) => {
							const {strapiId, Name, Title, avatar} = node
							console.log(node)
							return (
								<Link key={strapiId} to={`/officers/${strapiId}`} >
									<Box>
										<Img fluid={avatar.childImageSharp.fluid} />
										<h4>{Name}</h4>
										<p>{Title}</p>
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
query Officers {
	allStrapiOfficers {
	  edges {
		node {
		  strapiId
		  Name
		  Title
		  avatar {
			childImageSharp {
				fluid(maxWidth: 200, maxHeight: 200) {
					...GatsbyImageSharpFluid
				}
			}
		  }
		}
	  }
	}
  }
`