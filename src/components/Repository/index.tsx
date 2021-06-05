import { AiOutlineStar } from 'react-icons/ai';
import { FiUnlock, FiLock } from 'react-icons/fi';

import { Card, IconsWrapper } from "./styles";

import { IGithubRepos } from '../../services/types'

export function Repository({ description, name, stargazers_count }: IGithubRepos ) {
  return (
    <Card>
      <div>
        <h6>{name}</h6>
        <p>
          {description}
        </p>
      </div>
      <IconsWrapper>
        <div>
          <AiOutlineStar size={20} />
          <p>{stargazers_count}</p>
        </div>
        <div>
          <FiUnlock color="#63BF1F" size={20} />
          <span> 
            <FiLock color="#CC042A" size={20} />
          </span> 
        </div>  
      </IconsWrapper>   
    </Card>    
  )
}