import {Component} from 'react'
import Header from '../Header'

import './index.css'

const HOME_CLOTHES_IMAGE =
  'https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png'

class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="home-container">
          <div className="home-content-container">
            <h1 className="home-heading">Clothes That Get YOU Noticed</h1>
            <img
              className="home-clothes-image-mobile"
              src={HOME_CLOTHES_IMAGE}
              alt="clothes that get you noticed"
            />
            <p className="home-description">
              Fashion is part of the daily air and it does not quite help that
              it changes all the time. Clothes have always, been a marker of the
              era and we are in a revolution. Your fashion makes you been seen
              and heard that way you are. So, celebrate the seasons new and
              exciting fashion in your own way.
            </p>
            <button className="shop-now-button" type="button">
              Shop Now
            </button>
          </div>
          <img
            className="home-clothes-image-desktop"
            src={HOME_CLOTHES_IMAGE}
            alt="clothes that get you noticed"
          />
        </div>
      </>
    )
  }
}

export default Home
