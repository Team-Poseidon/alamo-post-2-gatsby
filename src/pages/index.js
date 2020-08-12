import React from "react"

import { Container, Row } from 'reactstrap'
import Layout from "../components/layout"
import SEO from "../components/seo"
import { FaRegMoneyBillAlt, FaMedkit, FaFlagUsa, FaGraduationCap } from 'react-icons/fa'
import Slider from '../components/slider'
import Service from '../components/service'
import Benefits from '../components/benefits'
import styled from 'styled-components'

let StyledBackground = styled.div`
  background: linear-gradient(to bottom,#f9fbfd 0,#fff 100%);
`

export default () => (
	<Layout>
		<SEO title="Home" />
		<Slider />
		<Container className="pt-4">
			<div className="text-center">
				<h3 className="text-uppercase">General Membership Meetings</h3>
				<p className="text-muted font-weight-bold">Please join us for our monthly meeting on the 1st Wednesday of every month &amp; 6:30pm</p>
			</div>
		</Container>
		<Container className="py-5">
			<h2 className="text-center mb-4">Services</h2>
			<Row>
				<Service title="Financial" Icon={FaRegMoneyBillAlt} path="/financial-services" />
				<Service title="Health" Icon={FaMedkit} path="/health-services" />
				<Service title="Veteran Affairs" Icon={FaFlagUsa} path="/veteran-services" />
				<Service title="Legion Caps" Icon={FaGraduationCap} isInternal="false" path="http://emblem.legion.org/help_uniform_cap.asp" />
			</Row>
		</Container>
		<StyledBackground>
			<Benefits />
		</StyledBackground>
	</Layout>
)
