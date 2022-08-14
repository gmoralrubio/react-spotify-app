import React from 'react'

export default function Card({ children, className }) {
  const styles = `flex max-w-sm flex-col rounded border text-white border-slate-600 bg-slate-800 hover:bg-slate-900/70 shadow-md cursor-pointer ${className}`

  return <div className={styles}>{children}</div>
}
