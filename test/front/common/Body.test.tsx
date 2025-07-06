import { afterEach, describe, expect, it, mock } from 'bun:test'
import { render, screen } from '@testing-library/react'
import mockModuleScss from 'test/build/mockModuleScss.ts'
import Body from 'front/common/Body.tsx'
import React from 'react'
import { ModuleMocker } from 'test/ModuleMocker.ts'


const moduleMocker = new ModuleMocker()
describe('Body', () => {
  afterEach(() => {
    mock.restore()
    moduleMocker.clear()
  })
  it('Should render Body text', () => {
    mockModuleScss('front/common/body.module.scss')
    render(<Body>content</Body>)
    expect(screen.getByText('content')).toBeInTheDocument()
  })
})
