import styled from 'styled-components'

interface ListItemProps {
  isActive?: boolean;
}

export const ListItem = styled.li<ListItemProps>`
  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    color: ${(props) => props.isActive ? '#000000' : '#A5A5A5'};
  }
`