import { describe, expect, it, spyOn } from 'bun:test'
import { render, screen } from '@testing-library/react'
import Index from 'front/index/Index.tsx'
import React from 'react'
import * as Body from 'front/common/Body'

describe('Dialog Component', () => {
  it('Should render thew word labas', () => {
    spyOn(Body, 'default').mockImplementation(({ children }) => (
      <div>{children}</div>
    ))
    render(
      Index("labas")
    )
    expect(screen.getByText('labas')).toBeInTheDocument()
  })
})
