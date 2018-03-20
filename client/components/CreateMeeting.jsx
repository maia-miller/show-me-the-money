import React from 'react'
import { connect } from 'react-redux'

class CreateMeeting extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      attendees: []
    }

    this.updateTitle = this.updateTitle.bind(this)
    this.addAttendee = this.addAttendee.bind(this)
    this.displayAttendees = this.displayAttendees.bind(this)
  }

  updateTitle(e) {
    this.setState({ title: e.target.value })
  }


  addAttendee(e) {
    let person = {
      name: this.refs.formName.value,
      wage: this.refs.formWage.value
    }
    this.refs.formName.value = ''
    this.refs.formWage.value = ''
    let newAttendees = [...this.state.attendees, person]
    this.setState({
      attendees: newAttendees
    })
  }

  onRemovePerson(i) {
    this.setState({
      attendees: this.state.attendees.filter((attendee, idx) => idx !== i)
    })
  }

  displayAttendees() {
    return this.state.attendees.map((person, i) => {
        return <li key={i}>{person.name}, {person.wage} <button onClick={()=>this.onRemovePerson(i)}>Remove</button></li>
    })
  }

  render() {
    return (
      <div className="container">
        <h2 className="title is-2">Create Meeting</h2>
        <div>
          <label>Meeting title:</label>
          <input ref="formTitle" type="text" onChange={this.updateTitle} />
        </div>
        <br />
        <div>
          <h4 className="title is-4">Add Attendee</h4>
          <label>Name:</label>
          <input ref="formName" type="text" /><br />
          <label>Wage:</label>
          <input ref="formWage" type="text" /><br />
          <button onClick={this.addAttendee}>Add</button>
        </div>
        <br />
        <div>
          <h4 className="title is-4">Attendee list</h4>
          <ul>
            {this.displayAttendees()}
          </ul>
        </div>
      </div>
    )
  }
}

export default connect()(CreateMeeting)
