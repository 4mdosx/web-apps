'use client'
import { useState } from "react"

function editionToYear (edition) {
  if (edition >= 6) return 2015 + (edition - 6)
  return 'Not released yet'
}

export default function ECMAVersionPage() {
  const [edition, setEdition] = useState(5)
  return (
    <main className="flex min-h-screen flex-col items-center justify-start">
      <h1>Calculation ECMA released year</h1>
      <input name="edition" type="number" value={edition} onChange={e => setEdition(e.target.value)} />
      <p>ECMAScript {edition} was released in {editionToYear(edition)}</p>
    </main>
  )
}
