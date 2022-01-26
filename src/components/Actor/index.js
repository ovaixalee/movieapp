import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Image } from './ActorStyles';

const Actor = ({name, character, imageUrl}) => {
  return (
  <Wrapper>
      <Image src={imageUrl} alt='actor-thumb'/>
      <h3>{name}</h3>
      <p>{character}</p>
  </Wrapper>
  )
}
//props data type checking
  Actor.propTypes = {
    name: PropTypes.string,
    character: PropTypes.string,
    imageUrl: PropTypes.string
  }



export default Actor;
