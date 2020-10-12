import React from 'react'
import Link from '../components/link'
import SEO from '../components/seo'
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
const StyledContainer = styled.div`
	padding: 2rem 0;
	max-width: 1500px;
	margin: 0 10vw;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(260px, max-content));
	grid-template-rows: auto;
	grid-gap: 1rem;
`

export default ({data}) => {
	const officers = data.allStrapiOfficers.edges
	return (
		<React.Fragment>
			<PageTitle title="Officers"/>
			<SEO title="Elected Officers" />
			<StyledContainer>
				{officers.map( ({node}) => {
					const {strapiId, Name, Title, avatar} = node
					const officerUrl = "/officers/" + strapiId
						return (
							<OfficerCard>
								<Link key={strapiId} to={officerUrl}>
									<Img fixed={avatar.childImageSharp.fixed} />
									<h4>{Title}</h4>
									<p>{Name}</p>
								</Link>
							</OfficerCard>
						)
				})}
			</StyledContainer>
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