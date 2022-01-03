import PropTypes from 'prop-types';
import {
  TransactionTable,
  Transactionhead,
  TransactionRow,
  TransactionData,
} from './TransactionHistory.styled';

const TransactionHistory = ({ items }) => {
  return (
    <TransactionTable>
      <Transactionhead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </Transactionhead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <TransactionRow key={id}>
            <TransactionData>{type}</TransactionData>
            <td>{amount}</td>
            <td>{currency}</td>
          </TransactionRow>
        ))}
      </tbody>
    </TransactionTable>
  );
};

export default TransactionHistory;

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    }),
  ),
};
