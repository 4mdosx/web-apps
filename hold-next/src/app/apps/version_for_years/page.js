'use client'
import { useState } from "react"
import nodeVersion from './node.json'

function ECMAEditionToYear (edition) {
  if (edition >= 6) return 2015 + (edition - 6)
  return 'Not released yet'
}

function ECMAVersionBlock () {
  const [edition, setEdition] = useState(5)
  return (
    <main className="flex flex-col items-center justify-start">
      <h1>Calculation ECMA released year</h1>
      <input name="edition" type="number" value={edition} onChange={e => setEdition(e.target.value)} />
      <p>ECMAScript {edition} was released in {ECMAEditionToYear(edition)}</p>
    </main>
  )
}

function NodeTable () {
  return (
    <div className="mt-4">
      <h1>Node released date</h1>
      <table className="table table-zebra bg-slate-200">
      <thead>
        <tr>
          <th>Version</th>
          <th>Code Name</th>
          <th>Release Date</th>
          <th>npm</th>
        </tr>
      </thead>
      <tbody>
        {
          nodeVersion.map((version) => (
            <tr key={version.version}>
              <td>v{version.version}</td>
              <td>{version.codename}</td>
              <td>{version.release_date}</td>
              <td>v{version.npm}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
    </div>
  )
}

export default function VersionForHumanPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start">
      <ECMAVersionBlock />
      <NodeTable />
    </main>
  )
}