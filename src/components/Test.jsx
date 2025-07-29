import React, { memo } from 'react'

const Test = memo(() => {
    console.log("test")
    // console.log(props.newtext)
  return (
    <div>
      Test
    </div>
  )
})

export default Test
