import {Component} from 'react'
import {v4} from 'uuid'
import UserDetails from '../UserDetails'

import './index.css'

const userTypeOptions = [
  {
    optionId: 'ADMIN',
    displayText: 'admin',
  },
  {
    optionId: 'USER',
    displayText: 'user',
  },
]

class RegistrationHome extends Component {
  state = {
    usersList: [],
    firstNameInput: '',
    lastNameInput: '',
    phoneNumberInput: '',
    passwordInput: '',
    optionId: userTypeOptions[0].optionId,
  }

  deleteUserDetails = emailId => {
    const {usersList} = this.state
    const updatedTransactionList = usersList.filter(
      eachTransaction => emailId !== eachTransaction.emailId,
    )

    this.setState({
      usersList: updatedTransactionList,
    })
  }

  onAddNewUser = event => {
    event.preventDefault()
    const {
      firstNameInput,
      lastNameInput,
      phoneNumberInput,
      passwordInput,
      optionId,
    } = this.state
    const typeOption = userTypeOptions.find(
      eachUser => eachUser.optionId === optionId,
    )
    const {displayText} = typeOption
    const newUser = {
      emailId: v4(),
      firstName: firstNameInput,
      password: passwordInput,

      lastName: lastNameInput,
      phoneNumber: phoneNumberInput,

      type: displayText,
    }

    this.setState(prevState => ({
      usersList: [...prevState.usersList, newUser],
      firstNameInput: '',
      phoneNumberInput: '',
      lastNameInput: '',
      passwordInput: '',
      optionId: userTypeOptions[0].optionId,
    }))
  }

  onChangeOptionId = event => {
    this.setState({optionId: event.target.value})
  }

  onChangePasswordInput = event => {
    this.setState({passwordInput: event.target.value})
  }

  onChangeFirstNameInput = event => {
    this.setState({firstNameInput: event.target.value})
  }

  onChangeLastNameInput = event => {
    this.setState({lastNameInput: event.target.value})
  }

  onChangePhoneNumberInput = event => {
    this.setState({phoneNumberInput: event.target.value})
  }

  render() {
    const {
      firstNameInput,
      phoneNumberInput,
      optionId,
      usersList,
      passwordInput,
      lastNameInput,
    } = this.state

    return (
      <div className="app-container">
        <div className="responsive-container">
          <div className="transaction-details">
            <form className="transaction-form" onSubmit={this.onAddNewUser}>
              <h1 className="transaction-header">Add Transaction</h1>
              <label className="input-label" htmlFor="first name">
                First Name
              </label>
              <input
                type="text"
                id="first name"
                value={firstNameInput}
                onChange={this.onChangeFirstNameInput}
                className="input"
                placeholder="first name"
              />

              <label className="input-label" htmlFor="last name">
                LAST NAME
              </label>
              <input
                type="text"
                id="last name"
                className="input"
                value={lastNameInput}
                onChange={this.onChangeLastNameInput}
                placeholder="last name"
              />
              <label className="input-label" htmlFor="phone number">
                Phone Number
              </label>
              <input
                type="text"
                id="phone number"
                className="input"
                value={phoneNumberInput}
                onChange={this.onChangePhoneNumberInput}
                placeholder="phone number"
              />

              <label className="input-label" htmlFor="password">
                PASSWORD
              </label>
              <input
                type="password"
                id="password"
                className="input"
                value={passwordInput}
                onChange={this.onChangePasswordInput}
                placeholder="password"
              />
              <label className="input-label" htmlFor="select">
                TYPE
              </label>
              <select
                id="select"
                className="input"
                value={optionId}
                onChange={this.onChangeOptionId}
              >
                {userTypeOptions.map(eachOption => (
                  <option key={eachOption.optionId} value={eachOption.optionId}>
                    {eachOption.displayText}
                  </option>
                ))}
              </select>
              <button type="submit" className="button">
                Add
              </button>
            </form>
            <div className="history-transactions">
              <h1 className="transaction-header">History</h1>
              <div className="transactions-table-container">
                <ul className="transactions-table">
                  <li className="table-header">
                    <p className="table-header-cell">FirstName</p>
                    <p className="table-header-cell">LastName</p>
                    <p className="table-header-cell">Phone Number</p>
                    <p className="table-header-cell">password</p>
                    <p className="table-header-cell">Type</p>
                  </li>
                  {usersList.map(eachUser => (
                    <UserDetails
                      key={eachUser.emailId}
                      transactionDetails={eachUser}
                      deleteUserDetails={this.deleteUserDetails}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default RegistrationHome
