import React from 'react'
import { FaHome } from 'react-icons/fa';
import Link from './link';
import {Col} from 'reactstrap'
import Box from '../components/box'

let Service = ({title, path, Icon = FaHome}) => {
    return (
        <Col>
            <Box>
                <Link to={path} >
                    <Icon size={30} />
                    <h4 className="mt-3">{title}</h4>
                </Link>   
            </Box>
        </Col>
    )
}

export default Service