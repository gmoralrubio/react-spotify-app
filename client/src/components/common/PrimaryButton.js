import React from 'react'

export default function PrimaryButton({ href, children, className }) {
  const styles = `rounded-full bg-rose-500 px-8 py-2 text-center font-bold text-white hover:bg-rose-600 focus:outline-none focus:ring focus:ring-rose-300 active:bg-rose-700 ${className}`
  return (
    <a href={href} className={styles}>
      {children}
    </a>
  )
}
