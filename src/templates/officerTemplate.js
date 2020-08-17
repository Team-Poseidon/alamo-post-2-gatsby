import React from 'react'
import {graphql} from 'gatsby'
import { Row, Container, Col } from 'reactstrap'
import Img from 'gatsby-image'


export const query = graphql`
query OfficerQuery($id: Int!) {
	strapiOfficers(strapiId: {eq: $id}) {
	  strapiId
	  Name
	  Title
	  Email
	  Biography
	  avatar {
		childImageSharp {
		  fluid(maxWidth: 250){
			...GatsbyImageSharpFluid		
		  }
		}
	  }
	}
  }  
`

const Officer = ({data}) => {
	const {Name, Title, Email, Biography, avatar} = data.strapiOfficers
	return(
		<React.Fragment>
			<Container className="my-4">
				<Row>
					<Col md={6}>
					<Img fluid={avatar.childImageSharp.fluid} />
					<h3>{Name}</h3>
					<p className="font-weight-bold">{Title}</p>
					<p><a href={`mailto:${Email}`}>{Email}</a></p>
					<p>{Biography}</p>
					</Col>
				</Row>
			</Container>
		</React.Fragment>
	)
}


export default Officer