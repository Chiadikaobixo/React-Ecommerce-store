import React from "react"
import { Link } from "react-router-dom"
import '../../styles/components/_notFoundPage.scss'

const NotFoundPage = () => (
  <div className="notfound">
    <div>
      <p>Unfortunately we cant find that page!</p>
    </div>
    404!
    <Link to="/">Go to Home</Link>
  </div>
)

export default NotFoundPage