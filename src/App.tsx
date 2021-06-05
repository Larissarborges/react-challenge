import { useState } from 'react';
import { GlobalStyle } from "./styles/global";
import { Routes } from "./routes"
import GithubInfoContext, { getDefaultValues } from './context/github-info.context'
import { IGithubInfo } from './services/types';

export function App() {
  const contextDefaultvalues = getDefaultValues();
  const [githubInfo, setInfo] = useState(contextDefaultvalues.githubInfo);
  const setGithubInfo = (info: IGithubInfo) => setInfo(info);

  return (
    <GithubInfoContext.Provider value={{
      githubInfo, setGithubInfo
    }}>
      <GlobalStyle />
      <Routes />
    </GithubInfoContext.Provider>
  );
}
