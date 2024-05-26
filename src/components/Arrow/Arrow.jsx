import React from 'react'

function Arrow(props) {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '20px', ...props.style }}
        width="24"
        height="24"
      >
        <path d="M13 17.586V4h-2v13.586l-6.293-6.293-1.414 1.414L12 21.414l8.707-8.707-1.414-1.414L13 17.586z" />
      </svg>
    </>
  )
}

export default Arrow
