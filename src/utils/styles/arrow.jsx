import React from 'react'

function Arrow(props) {
  return (
    <svg
      data-name="1-Arrow Up"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      style={{ width: '50%', ...props.style }}
    >
      <path d="m26.71 10.29-10-10a1 1 0 0 0-1.41 0l-10 10 1.41 1.41L15 3.41V32h2V3.41l8.29 8.29z" />
    </svg>
  )
}

export default Arrow
