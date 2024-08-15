import { describe, it, expect } from 'vitest'
import { add } from '../utils/test'

describe('add', () => {
  it('3 + 4 = 7', () => {
    expect(add(3, 4)).toBe(7)
  })
})

describe('error', () => {
  it('test error', () => {
    expect(add(3, 4)).toBe(6)
  })
})
