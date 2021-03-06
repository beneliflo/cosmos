import React from 'react'
import styled from '@auth0/cosmos/styled'
import PropTypes from 'prop-types'
import Automation from '../../_helpers/automation-attribute'
import { deprecate } from '../../_helpers/custom-validations'

const imageFit = {
  contain: 'contain',
  cover: 'cover',
  none: 'unset',
  'scale-down': 'scale-down'
}

const Image = props => (
  <Image.Element
    src={props.src || props.source}
    alt={props.alt}
    {...Automation('image')}
    {...props}
  />
)

Image.Element = styled.img`
  display: block;
  height: ${props => (props.height ? props.height : 'auto')};
  width: ${props => (props.width ? props.width : 'auto')};
  max-width: ${props => (props.disableResponsive ? 'auto' : '100%')};
  object-fit: ${props => imageFit[props.fit]};
`

Image.propTypes = {
  /** @depreacted:src URL of the image */
  source: PropTypes.string,
  /** URL of the image */
  src: PropTypes.string,
  /** Alt text is mandatory, please read the accessibility section */
  alt: PropTypes.string,
  /** Image height, can be any length unit, absolute or relative */
  height: PropTypes.string,
  /** Image width, can be any length unit, absolute or relative */
  width: PropTypes.string,
  /** Sets how the content of the image is been resized to fit its container. */
  fit: PropTypes.oneOf(['none', 'contain', 'cover', 'scale-down']),
  /** Sets the image width to auto */
  disableResponsive: PropTypes.bool,

  /** deprecate source prop */
  _source: props => deprecate(props, { name: 'source', replacement: 'src' })
}

Image.defaultProps = {
  source: null,
  alt: null,
  width: null,
  height: null,
  fit: 'none'
}

export default Image
