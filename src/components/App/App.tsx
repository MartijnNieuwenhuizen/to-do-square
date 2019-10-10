import React from 'react'
import './App.css'

interface AppPropsInterface {
  redirectUrl: string
}

export default (props: AppPropsInterface) => {
  return (
    <div className="App">
      <header className="App-header">sdfksdflksjfsdlkj</header>
      <a href={`${props.redirectUrl}`}>LOGIN!</a>
    </div>
  )
}
