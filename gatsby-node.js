const path = require('path')

exports.createPages = async ({graphql, actions}) => {
	const { createPage } = actions
	const result = await graphql(`
	{
		officers: allStrapiOfficers {
		  edges {
			node {
			  strapiId
			}
		  }
		}
	  }
	`)

	if(result.errors){
		throw result.errors
	}

	// Create officer pages.
	const officers = result.data.officers.edges
	officers.forEach( (officer, idx) => {
		createPage({
			path: `/officers/${officer.node.strapiId}`,
			component:  path.resolve('src/templates/officerTemplate.js'),
			context: {
				id: officer.node.strapiId,
			}
		})
	})
}