import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Link from '../../atoms/link'
import Paragraph, { StyledParagraph } from '../../atoms/paragraph'
import { colors, spacing } from '../../tokens'

const Alert = props => (
  <Alert.Element type={props.type}>
    <Paragraph>
      <em>{props.title}</em> {props.text}
      {props.link && (
        <Link href={props.link} target="_blank">
          Read more
        </Link>
      )}
    </Paragraph>
  </Alert.Element>
)

Alert.Element = styled.div`
  padding: ${spacing.xsmall} ${spacing.medium};
  background-color: ${props => colors.alert[props.type].background};
  ${StyledParagraph} {
    color: ${props => colors.alert[props.type].text};
  }
`

Alert.propTypes = {
  type: PropTypes.oneOf(['default', 'information', 'success', 'warning', 'danger']).isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.string
}

Alert.defaultProps = {
  type: 'default'
}

export default Alert
