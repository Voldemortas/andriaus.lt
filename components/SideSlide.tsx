import React, { ReactChildren, useState, useEffect, useRef } from 'react'

type properties = {
  leftSlide: boolean
  children: ReactChildren
}

const SlideLeft = ({ leftSlide, children }: properties) => {
  const [state, setState] = useState({ isInited: false, y: -1 })
  const reference = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const margin = 50
    if (reference !== null) {
      const { y } = reference.current.getClientRects()[0]
      if (y <= window.innerHeight - margin && !state.isInited) {
        reference.current.setAttribute(
          'class',
          `animate animate-${leftSlide ? 'left' : 'right'}`
        )
        setState({ ...state, isInited: true })
      } else if (!state.isInited) {
        setState({ ...state, y })
      }
    }
  })

  return (
    <div style={{ textAlign: leftSlide ? 'right' : 'left', width: '100%' }}>
      <div ref={reference} className="animate">
        {children}
      </div>
    </div>
  )
}
export default SlideLeft
