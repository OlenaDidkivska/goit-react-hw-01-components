import PropTypes from 'prop-types';
import { TransactionHistoryStyle, TableThead, TableTerm } from './TransactionHistory.styled';

const TransactionHistory = ({ items }) => {
    
    return (<TransactionHistoryStyle>
    <TableThead>
        <TableTerm >
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
        </TableTerm >
    </TableThead>
  <tbody>
            {items.map(item => {
                const { id, type, amount, currency } = item
                const upperType = type.charAt(0).toUpperCase() + type.slice(1)
        return ( <TableTerm  key={id}>
            <td>{ upperType }</td>
            <td>{amount}</td>
            <td>{ currency }</td>
        </TableTerm >)
    })} 
  </tbody>
</TransactionHistoryStyle>)
} 

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
}

export default TransactionHistory