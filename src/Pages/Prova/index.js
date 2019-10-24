import React from 'react'

import './style.css'

export default props => (
  <div>
    <h1>{props.match.params.id} </h1>
  </div>
)

