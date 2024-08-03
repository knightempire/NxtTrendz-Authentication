import {Component} from 'react'
import './index.css'

const WEBSITE_LOGO =
  'https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png'
const WEBSITE_LOGIN =
  'https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png'

class LoginForm extends Component {
  state = {username: '', password: '', errorMessage: ''}

  onChangeUsername = event => this.setState({username: event.target.value})

  onChangePassword = event => this.setState({password: event.target.value})

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({errorMessage: `*${errorMsg}`})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      this.onSubmitSuccess()
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  renderUsernameField = () => {
    const {username} = this.state
    return (
      <div className="input-filed-container">
        <label className="input-label" htmlFor="Username">
          USERNAME
        </label>
        <input
          placeholder="Username"
          id="Username"
          type="text"
          value={username}
          className="login-input"
          onChange={this.onChangeUsername}
        />
      </div>
    )
  }

  renderPasswordField = () => {
    const {password} = this.state
    return (
      <div className="password-filed-container">
        <label className="input-label" htmlFor="Password">
          PASSWORD
        </label>
        <input
          placeholder="Password"
          id="Password"
          type="password"
          value={password}
          className="login-input"
          onChange={this.onChangePassword}
        />
      </div>
    )
  }

  render() {
    const {errorMessage} = this.state
    return (
      <div className="login-container">
        <img
          src={WEBSITE_LOGO}
          alt="website logo"
          className="login-website-mobile-logo"
        />
        <img
          src={WEBSITE_LOGIN}
          alt="website login"
          className="login-website-image"
        />
        <form className="form-container" onSubmit={this.submitForm}>
          <img
            src={WEBSITE_LOGO}
            alt="website logo"
            className="login-website-desktop-logo"
          />
          {this.renderUsernameField()}
          {this.renderPasswordField()}
          <button type="submit" className="login-button">
            Login
          </button>
          <p className="err-message">{errorMessage}</p>
        </form>
      </div>
    )
  }
}

export default LoginForm
