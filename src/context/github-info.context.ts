import { createContext } from 'react';

import { IGithubInfo, IGithubInfoContext } from '../services/types';

export const getDefaultValues = () => {
  const userInfo = localStorage.getItem('userInfo');
  if (userInfo) {
    const githubUserInfo: IGithubInfo = JSON.parse(userInfo)
    return {
      githubInfo: githubUserInfo,
      setGithubInfo: (info: IGithubInfo) => { }
    }
  } else {
    return {
      githubInfo: {},
      setGithubInfo: (info: IGithubInfo) => { }
    }
  }
}

const GithubInfoContext = createContext<IGithubInfoContext>(getDefaultValues());

export default GithubInfoContext;