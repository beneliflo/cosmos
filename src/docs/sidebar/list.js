import React from 'react'

import Link from './link'
import Group, { getGroups } from './group'

const List = props => {
  /* Filter out example Box component */
  const components = props.components.filter(c => c.displayName !== 'Box')

  const groups = getGroups(components)
  return (
    <div>
      <Group label="Compound components">
        {groups.molecules.map((component, index) => <Link key={index} component={component} />)}
      </Group>
      <Group label="Building blocks" open>
        {groups.atoms.map((component, index) => <Link key={index} component={component} />)}
      </Group>
    </div>
  )
}

export default List