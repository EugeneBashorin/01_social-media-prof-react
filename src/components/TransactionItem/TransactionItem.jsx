import PropTypes from 'prop-types'

export const TransactionItem = ({id, type, amount, currency}) => {
    return (
    <tr key={id}>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
    </tr>
    )
}

TransactionItem.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
}