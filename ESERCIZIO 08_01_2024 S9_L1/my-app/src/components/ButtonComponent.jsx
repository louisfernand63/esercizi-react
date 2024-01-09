import React from 'react'

/*
export default function ButtonComponent() {
  return (
    <div>ButtonComponent</div>
  )
} */

function ButtonComponent({ testo }) {
  console.log(testo)
  return (
    <button type="button">{testo}</button>
  )
}

export default ButtonComponent;