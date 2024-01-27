// Write your JS code here
import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {submit: false,firstName:'',lastName:'',firstnameerrormsg:false,lastnameerrormsg:fals}
  
  onSubmitForm =event=> {
      event.preventDefault()
      const {firstName,lastName}=this.state

      if(firstName==='' && lastName===''){
          this.setState(prevState=>({firstnameerrormsg:!prevState.firstnameerrormsg,lastnameerrormsg:!prevState.lastnameerrormsg}))
      }
      else{
        this.setState(prevState => ({submit: !prevState.submit}))
      }
    
  }

  onChangefirstname=(event)=>{
      if(event.target.value ===''){
            this.setState(prevState=>({firstnameerrormsg:!prevState.firstnameerrormsg}))
      }
      else{
        this.setState(prevState=>({firstName:event.target.value}))
      }
  }

  onChangelastname=(event)=>{
      if(event.target.value===''){
            this.setState(prevState=>({lastnameerrormsg:!prevState.lastnameerrormsg}))
      }
      else{
        this.setState(prevState=>({lastName:event.target.value}))
      }
  }

  submitForm = () => {
      const {firstName,lastName,errormsg}=this.state
    return (
        <form className="formcontainer" onSubmit={this.onSubmitForm}>
            <label className="firstname" htmlFor="first">
                FIRST NAME
            </label>
            <input className="firstnameinput" type='text' value={firstName} id='first' onChange={this.onChangefirstname}/>
            {errormsg && <p className='error'>Required</p>}
            <label className="firstname" htmlFor="last">
                LAST NAME
            </label>
            <input className="firstnameinput" type='text' value={lastName} id='last' onChange={this.onChangelastname}/>
            {errormsg && <p className='error'>Required</p>}
            <button className='submitbutton'>Submit</button>
        </form>
    )
  }

  onSubmitanother = () => {
    this.setState(prevState => ({submit: !prevState.submit}))
  }

  successfullContainer = () => (
    <div className="anotherSubmitcontainer">
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="image"
      />
      <p className="succesfullpara">Submitted Successfully</p>
      <button className="anotherresponsebutton" onClick={this.onSubmitanother}>
        Submit Another Response
      </button>
    </div>
  )
  
  render() {
    const {submit} = this.state
    return (
      <div className="maincontainer">
        <h1 className="heading">Registration</h1>
        {submit ? <div>{this.successfullContainer()}<div/> : <div>{this.submitForm()}<div/>}
      </div>
    )
  }
}

export default RegistrationForm
