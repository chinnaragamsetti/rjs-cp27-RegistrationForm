// Write your JS code here
import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    submit: false,
    firstName: '',
    lastName: '',
    firstnameerrormsg: false,
    lastnameerrormsg: false,
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {firstName, lastName} = this.state

    if (firstName !== '' && lastName !== '') {
      this.setState(prevState => ({submit: !prevState.submit}))
    }

  }

  onChangefirstname = event => {
      this.setState({firstName: event.target.value})
  }


  onChangelastname = event => {
      this.setState({lastName: event.target.value})
    
  }

  onBlurfirstname = event => {
    if (event.target.value === '') {
      this.setState(prevState => ({firstnameerrormsg:!prevState.firstnameerrormsg})
    }
  }

    onBlurlastname = event => {
    if (event.target.value === ''){
      this.setState(prevState => ({lastnameerrormsg:!prevState.lastnameerrormsg})
    }
  }


  submitForm = () => {
    const {firstName, lastName, errormsg} = this.state
    return (
      <form className="formcontainer" onSubmit={this.onSubmitForm}>
        <label className="firstname" htmlFor="first">
          FIRST NAME
        </label>
        <input
          className="firstnameinput"
          placeholder="First name"
          type="text"
          value={firstName}
          id="first"
          onChange={this.onChangefirstname}
          onBlur={this.onBlurfirstname}
        />
        {errormsg && <p className="error">Required</p>}
        <label className="firstname" htmlFor="last">
          LAST NAME
        </label>
        <input
          placeholder="Last name"
          className="firstnameinput"
          type="text"
          value={lastName}
          id="last"
          onChange={this.onChangelastname}
          onBlur={this.onBlurlastname}
        />
        {errormsg && <p className="error">Required</p>}
        <button type="submit" className="submitbutton">
          Submit
        </button>
      </form>
    )
  }

  onSubmitanother = () => {
    this.setState(prevState => ({submit: !prevState.submit}))
  }

  successfullContainer = () => (
    <div className="anothersubmitcontainer">
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="image"
      />
      <p className="succesfullpara">Submitted Successfully</p>
      <button
        className="anotherresponsebutton"
        type="button"
        onClick={this.onSubmitanother}
      >
        Submit Another Response
      </button>
    </div>
  )

  render() {
    const {submit} = this.state
    return (
      <div className="maincontainer">
        <div className="subcontainer">
          <h1 className="heading">Registration</h1>
          {submit ? (
            <div>{this.successfullContainer()}</div>
          ) : (
            <div>{this.submitForm()}</div>
          )}
        </div>
      </div>
    )
  }
}

export default RegistrationForm
