import styled from 'styled-components'

export const FriendListItemStyle = styled.li`
    border: 1px solid hwb(217 70% 20%);
    width: 200px;
    padding: 10px;
    display: flex;
    align-items: center;
    margin: 5px;
    border-radius: 5px;
    background-color: #ffffff;
    box-shadow: 0px 1px 1px rgb(0 0 0 / 12%), 0px 4px 4px rgb(0 0 0 / 6%), 1px 4px 6px rgb(0 0 0 / 16%);

    &:hover {
    box-shadow: 0px 1px 1px rgb(0 0 0 / 22%), 0px 4px 4px rgb(0 0 0 / 16%), 1px 4px 6px rgb(0 0 0 / 26%);
  }
`

export const FriendStatus = styled.span`
    width: 20px;
    height: 20px;
    border-radius: 50%;
`
export const FriendAvatar = styled.img`
height: 48px;
border-radius: 10px;
margin: 0 10px;
`

export const FriendName = styled.p`
font-size: 25px
`