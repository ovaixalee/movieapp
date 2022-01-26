import React from 'react'
import { Wrapper, Content } from './Gridstyles'
import PropTypes from 'prop-types';


const Grid = ({header, children}) => {
    return (
        <Wrapper>
            <h1>{header}</h1>
            <Content>{children}</Content>
        </Wrapper>
    )
}
Grid.propTypes = {
    header: PropTypes.string
}

export default Grid
