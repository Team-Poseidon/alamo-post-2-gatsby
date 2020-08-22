import React from 'react'
import {graphql} from 'gatsby'
import { Row, Container, Col } from 'reactstrap'
import Img from 'gatsby-image'


export const query = graphql`
query NewsPostQuery($id: Int!) {
	strapiNewsPosts(strapiId: {eq: $id}) {
	  strapiId
	  title
	  content
	  slug
	  updated_at(locale: "en-US", formatString: "MMM Do YYYY, h:mm:ss a")
	  avatar {
		childImageSharp {
		  fluid(maxWidth: 350) {
			...GatsbyImageSharpFluid
		  }
		}
	  }
	}
  } 
`

const News = ({data}) => {
	const {Name, Title, Email, Biography, avatar} = data.strapiOfficer
	return(
		<React.Fragment>
			<Container className="my-4">
				<Row>
					<Col md={6}>
					<Img fluid={avatar.childImageSharp.fluid} />
					<h3>{Title}</h3>
					<p className="font-weight-bold">{Name}</p>
					<p><a href={`mailto:${Email}`}>{Email}</a></p>
					<p>{Biography}</p>
					</Col>
				</Row>
			</Container>
		</React.Fragment>
	)
}


export default News