import {withRouter, Link} from 'react-router-dom'

import Cookies from 'js-cookie'

import './index.css'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props

    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <nav className="header-container">
      <div className="nav-content">
        <div className="img-container">
          <Link to="/" className="nav-link">
            <div className="header-taste-heading">
              <h1 className="tasty-heading"> Registrtaion form</h1>
            </div>
          </Link>
        </div>
        <ul className="home-header-desktop-container">
          <Link to="/" className="nav-link">
            <li className="home-heading"> Home </li>
          </Link>

          <button
            type="button"
            onClick={onClickLogout}
            className="logout-button"
          >
            Logout
          </button>
        </ul>
      </div>
    </nav>
  )
}

export default withRouter(Header)
