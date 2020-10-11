import React from 'react'
import Link from '../components/link'
import { Row,Col, Container } from 'reactstrap'
import PageTitle from '../components/page-title'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

const OfficerCard = styled.div`
	border-radius: 0.5rem;
	padding: 2rem;
	box-shadow: 1px 1px 6px rgba(0,0,0,0.1);
	transition-duration: 0.3s;
	text-align: center;
	min-height: min-content;
`

const StyledLink = styled(Link)`
	height: max-content;
`


export default ({data}) => {
	const officers = data.allStrapiOfficers.edges
	return (
		<React.Fragment>
			<PageTitle title="Officers"/>
			<Container>
				<Row className="py-5">
					<Col md={12} className="d-flex justify-content-around flex-wrap">
						{officers.map( ({node}) => {
							const {strapiId, Name, Title, avatar} = node
							return (
								<StyledLink key={strapiId} to={`/officers/${strapiId}`} >
									<OfficerCard>
										<Img fixed={avatar.childImageSharp.fixed} />
										<h4>{Title}</h4>
										<p>{Name}</p>
									</OfficerCard>
								</StyledLink>
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
				fixed(width: 200, height: 200) {
					...GatsbyImageSharpFixed
				}
			}
		  }
		}
	  }
	}
  }
`