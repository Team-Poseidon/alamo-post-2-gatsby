import React from 'react'
import { FaHome } from 'react-icons/fa';
import Link from './link';
import {Col} from 'reactstrap'
import Box from '../components/box'

let Service = ({title, path, isInternal = true, Icon = FaHome}) => {
    if(isInternal){
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
    } else {
        return (
            <Col>
                <Box>
                    <a href={path} >
                        <Icon size={30} />
                        <h4 className="mt-3">{title}</h4>
                    </a>
                </Box>
            </Col>
        )
    }
}

export default Service