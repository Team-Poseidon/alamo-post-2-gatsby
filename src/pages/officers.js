import React from 'react'
import Layout from '../components/layout'
import Box from '../components/box'
import Link from '../components/link'
import { Row,Col, Container } from 'reactstrap'
import PageTitle from '../components/page-title'
import { graphql } from 'gatsby'


export default ({data}) => {
	const officers = data.allStrapiOfficers.edges
	return (
		<Layout>
			<PageTitle title="Officers"/>
			<Container>
				<Row className="py-5">
					<Col md={4} className="m-auto">
						{officers.map( ({node}) => {
							const {id, Email, Name, Title, avatar} = node
							console.log({id, Email, Name, Title, avatar})
							return (
								<Link to={id}>
									<Box>
										<h4>{Name}</h4>
										<p>{Title}</p>
									</Box>
								</Link>
							)
						})}
						
					</Col>
				</Row>
			</Container>
		</Layout>
	)
}

export const query = graphql`
query Officer {
	allStrapiOfficers {
	  edges {
		node {
		  id
		  Name
		  Title
		  Email
		  avatar {
			childImageSharp {
			  fixed(width: 160) {
				src
			  }
			}
		  }
		}
	  }
	}
  }
`