import React from 'react'
import D from './D'
import { Name } from '../App'
import { useContext } from 'react'

export default function C() {
    const name = useContext(Name)
  return (
    <div>
      C - {name} <D></D>
    </div>
  )
}
