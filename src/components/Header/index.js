import {Link} from 'react-router-dom'
import './index.css'

const WEBSITE_LOGO =
  'https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png'

const NAV_LOGOUT =
  'https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png'

const HOME_IMAGE =
  'https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png'
const PRODUCTS_IMAGE =
  'https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png'
const CART_IMAGE =
  'https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png'

const Header = () => {
  const renderNavItemsDesktop = () => (
    <ul className="nav-items-desktop">
      <li className="nav-item-desktop">
        <Link to="/" className="nav-link-desktop">
          Home
        </Link>
      </li>
      <li className="nav-item-desktop">
        <Link to="/" className="nav-link-desktop">
          Products
        </Link>
      </li>
      <li className="nav-item-desktop">
        <Link to="/" className="nav-link-desktop">
          Cart
        </Link>
      </li>
    </ul>
  )
  const renderNavItemsMobile = () => (
    <ul className="mobile-nav-items">
      <Link to="/" className="nav-link-mobile">
        <img
          src={HOME_IMAGE}
          alt="nav home"
          className="mobile-nav-item-image"
        />
      </Link>

      <Link to="/" className="nav-link-mobile">
        <img
          src={PRODUCTS_IMAGE}
          alt="nav products"
          className="mobile-nav-item-image"
        />
      </Link>
      <Link to="/" className="nav-link-mobile">
        <img
          src={CART_IMAGE}
          alt="nav cart"
          className="mobile-nav-item-image"
        />
      </Link>
    </ul>
  )

  return (
    <div className="header-container">
      <nav className="nav-container">
        <div className="header-logo-logout-container">
          <img
            src={WEBSITE_LOGO}
            alt="website logo"
            className="header-website-logo"
          />
          {renderNavItemsDesktop()}
          <button type="button" className="header-logout-button">
            <img
              src={NAV_LOGOUT}
              alt="nav logout"
              className="nav_logout-image"
            />
          </button>

          <button type="button" className="desktop-logout-button">
            Logout
          </button>
        </div>
        {renderNavItemsMobile()}
      </nav>
    </div>
  )
}
export default Header
