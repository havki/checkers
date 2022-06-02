import React from 'react'

function Cell({color}) {
  if(color=== 'black'){
    return (
      <div className="cell black"></div>
    )
  }
  if(color=== 'white'){
    return (
      <div className="cell white"></div>
    )
  }
}

export default Cell