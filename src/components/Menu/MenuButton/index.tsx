import { Link } from "react-router-dom";

import { ListItem } from "./styles";

interface MenuButtonProps {
  routeName: string;
  path: string;
  icon: JSX.Element;
  isActive?: boolean;
}

export function MenuButton({ 
  routeName, 
  path, 
  icon, 
  isActive, 
}: MenuButtonProps) {
  return (
    <>
      <ListItem isActive={isActive}>
        <Link to={path}>
          {icon}
          <span>{routeName}</span>
        </Link>
      </ListItem>
    </>
  )
}