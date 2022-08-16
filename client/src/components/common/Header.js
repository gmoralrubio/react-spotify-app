import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <Link to="/">
      <h1 className="py-10 text-6xl font-bold text-white sm:text-8xl">
        Spotify, <br /> <span className="font-light">but worst</span>
      </h1>
    </Link>
  )
}
