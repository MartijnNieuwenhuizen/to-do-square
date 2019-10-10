import React from 'react'

import urlBuilder from '../../utils/urlBuilder'

import Link from '../../components/Link'

import content from '../../config/content'

export default () => {
  const env: any = process.env
  const {
    REACT_APP_AUTHORIZATION_BASE_URL,
    REACT_APP_CLIENT_ID,
    REACT_APP_HASH,
    REACT_APP_SCOPE,
  } = env

  const params = {
    client_id: REACT_APP_CLIENT_ID,
    scope: REACT_APP_SCOPE,
    state: REACT_APP_HASH,
  }
  const authorizeUrl = urlBuilder(REACT_APP_AUTHORIZATION_BASE_URL)(params)

  return <Link href={authorizeUrl} label={content.loginCta}></Link>
}
