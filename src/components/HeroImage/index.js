import React from 'react'
import { Wrapper, Content, Text } from './HeroImageStyles'
import PropTypes from 'prop-types';


const HeroImage = ({image, title, text}) => {
    return (
        <Wrapper image={image}>
            <Content title={title}>
                <Text text={text}>
                    <h1>{title}</h1>
                    <p>{text}</p>
                </Text>
            </Content>
        </Wrapper>
    )
}
HeroImage.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string
}

export default HeroImage

