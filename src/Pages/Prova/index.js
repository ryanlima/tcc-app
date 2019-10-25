import React from 'react'

import './style.css'

export default props => (
  <div>
    <h1>{props.match.params.questoes} </h1>
    <h1>{props.match.params.nome} </h1>
  </div>
)

