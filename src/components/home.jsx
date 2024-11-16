import React from 'react'
import UserTable from './table'
import "../style/home.css"

export default function HomePage() {
  return (
    <>
    <div>
        <h1>Welcome To The GreekTrust Coding Challenge</h1>
        <h2>Admin UI</h2>
      </div>
      <UserTable />

      {/* Footer */}
      <p className="footer">Greekstart Forntend Challenge:- AdminUI 	&#169; Pragati Chothe | 2024</p>
    </>
  )
}
