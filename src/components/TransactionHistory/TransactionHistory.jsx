import PropTypes from 'prop-types';

import {TransactionItem} from '../TransactionItem/TransactionItem';
import css from "./TransactionHistory.module.css";

export const TransactionHistory = ({items}) => (
<section className={css.transactionList}>
    <table className={css.transactionHistory} rules="cols">
        <thead>
            <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
            </tr>
        </thead>

        <tbody>
            { items.map(({id, type, amount, currency}) => (
            <TransactionItem 
                key = {id}
                type = {type}
                amount = {amount}
                currency = {currency}
            />
                ))
            }
        </tbody>
    </table>
</section>
)

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            // type: PropTypes.string.isRequired,
            // amount: PropTypes.string.isRequired,
            // currency: PropTypes.string.isRequired,
        })
    )
}