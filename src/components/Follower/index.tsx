import { AiOutlineArrowRight } from 'react-icons/ai';

import { Avatar } from '../Avatar';

import { Card } from './styles';

import { IGithubFollow } from '../../services/types';

export function Follower({ avatar_url, login, onclick }: IGithubFollow) {
  return (
    <Card onClick={onclick}>
      <div>
        <Avatar isCard={true} avatarUrl={avatar_url} />
      </div>
      <p>{`#${login}`}</p>
      <button>
        <AiOutlineArrowRight size={24} />
      </button>
    </Card>
  )
}