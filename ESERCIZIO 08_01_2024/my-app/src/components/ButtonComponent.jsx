import React from 'react'

/*
export default function ButtonComponent() {
  return (
    <div>ButtonComponent</div>
  )
} */

function ButtonComponent(props) {
  console.log(props)
  return (
    <button type="button">{props}</button>
  )
}

export default ButtonComponent;