import './index.css'

const UserDetails = props => {
  const {transactionDetails, deleteUserDetails} = props
  const {
    emailId,
    firstName,
    phoneNumber,
    password,
    type,
    lastName,
  } = transactionDetails

  const onDeleteUserDetails = () => {
    deleteUserDetails(emailId)
  }

  return (
    <li className="table-row">
      <p className="transaction-text">{firstName}</p>
      <p className="transaction-text">{lastName}</p>

      <p className="transaction-text"> {phoneNumber}</p>

      <p className="transaction-text">{password}</p>
      <p className="transaction-text">{type}</p>
      <div className="delete-container">
        <button
          className="delete-button"
          type="button"
          onClick={onDeleteUserDetails}
        >
          <img
            className="delete-img"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default UserDetails
