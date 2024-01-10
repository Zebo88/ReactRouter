import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return(
    <div id="navbar">
          <Link className="link" to={`/`}>Home</Link>
          <Link className="link" to={`/blue`}>Blue</Link>
          <Link className="link" to={`/red`}>Red</Link>
          <Link className="link" to={`/purple`}>Purple</Link>
          <Link className="link" to={`/marble`}>Marble</Link>
        </div>
  )
}