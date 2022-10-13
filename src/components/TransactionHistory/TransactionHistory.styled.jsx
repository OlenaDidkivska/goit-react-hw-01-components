import styled from 'styled-components'

export const TransactionHistoryStyle = styled.table`
    border: 1px solid hwb(217 70% 20%);
    width: 400px;
    border-spacing: 1px;
    margin: 5px;
    border-radius: 5px;
    background-color: #ffffff;
    box-shadow: 0px 1px 1px rgb(0 0 0 / 12%), 0px 4px 4px rgb(0 0 0 / 6%), 1px 4px 6px rgb(0 0 0 / 16%);
    text-align: center;

    &:hover {
    box-shadow: 0px 1px 1px rgb(0 0 0 / 22%), 0px 4px 4px rgb(0 0 0 / 16%), 1px 4px 6px rgb(0 0 0 / 26%);
  }
`

export const TableThead = styled.thead`
    height: 30px;
    background-color: #22b4ee;
    color: #ffffff;
`

export const TableTerm = styled.tr`
    height: 30px;

  :nth-child(even) {
 background-color: #d8e8ee;
}  
}
`