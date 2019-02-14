import React from 'react'
import styled from '@auth0/cosmos/styled'
import PropTypes from 'prop-types'
import Icon, { __ICONNAMES__ } from '../../atoms/icon'
import { spacing, colors } from '@auth0/cosmos-tokens'
import Automation from '../../_helpers/automation-attribute'

class SidebarLinkGroup extends React.Component {
  constructor(props) {
    super(props)

    this.state = { open: props.defaultOpen || false, subItemSelected: false }
    this.evaluateSubItemSelection(props, { mounted: false })
  }

  evaluateSubItemSelection(props, { mounted }) {
    let subItemSelected = false
    React.Children.forEach(props.children, child => {
      /* group should be open and parent be selected */
      if (child && child.props && child.props.selected) subItemSelected = true
    })

    if (this.state.subItemSelected !== subItemSelected) {
      if (mounted) {
        this.setState({ subItemSelected })
      } else {
        this.state.subItemSelected = subItemSelected
      }
    }
  }

  componentDidUpdate() {
    this.evaluateSubItemSelection(this.props, { mounted: true })
  }

  handleClick = () => {
    this.setState({ open: !this.state.open })
  }

  render() {
    const { icon, label, children } = this.props
    const { open, subItemSelected } = this.state

    return (
      <SidebarLinkGroup.Content {...Automation('sidebar.link-group')} open={open} hidden={!open}>
        {children}
      </SidebarLinkGroup.Content>
    )
  }
}

SidebarLinkGroup.Content = styled.ul`
  flex: 1 0 100%;
  margin-left: calc(18px + ${spacing.xsmall});
  overflow: hidden;
  max-height: ${props => (props.open ? props.children.length * 50 + 'px' : '0')};
  visibility: ${props => (props.open ? 'visible' : 'hidden')};
  transition: all 0.3s ease-in-out;

  ${Icon.Element} path {
    fill: ${colors.text.secondary};
  }
`

SidebarLinkGroup.propTypes = {
  children: PropTypes.node.isRequired
}

SidebarLinkGroup.defaultProps = {}

export default SidebarLinkGroup
