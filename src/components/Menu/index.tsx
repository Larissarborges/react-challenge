import { useLocation } from 'react-router-dom';

import { AiOutlineHome, AiOutlineTeam } from 'react-icons/ai';
import { FiGithub } from 'react-icons/fi';

import { MenuButton } from "./MenuButton";

import { FooterMenu } from './styles';

const MENU_ROUTES = [
  {
    routeName: "Home",
    icon: <AiOutlineHome size={25} />,
    path: `/home`,
  },
  {
    routeName: "Repos",
    icon: <FiGithub size={25} />,
    path: `/repos`,
  },
  {
    routeName: "Seguidores",
    icon: <AiOutlineTeam size={25} />,
    path: `/followers`,
  },
  {
    routeName: "Seguindo",
    icon: <AiOutlineTeam size={25} />,
    path: `/following`,
  },
]

export function Menu() {
  const location = useLocation();

  return (
    <FooterMenu>
      <nav>
        <ul>
          {MENU_ROUTES.map((item, index) => (
            <MenuButton
              key={`BottomHeader_${index}`}
              routeName={item.routeName}
              icon={item.icon}
              path={item.path}
              isActive={location.pathname === item.path}
            />
          ))}  
        </ul>
      </nav>
    </FooterMenu>
  )
}