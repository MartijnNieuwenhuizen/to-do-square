import React from 'react'

import './Link.css'

interface LinkPropsInterface {
  label: string
  href: string
}

export default (props: LinkPropsInterface) => {
  const { label, href } = props

  return <a href={`${href}`}>{label}</a>
}
