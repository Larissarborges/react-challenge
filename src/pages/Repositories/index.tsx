import { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai'

import { HeaderContainer } from '../../components/HeaderContainer';
import { PageContainer } from '../../components/PageContainer';
import { Repository } from '../../components/Repository';
import CentralizedLoader from '../../components/Loader/CentralizedLoader';

import { Wrapper, Divisor } from './styles';

import { api } from '../../services/api';
import GithubInfoContext from '../../context/github-info.context';
import { IGithubInfoContext, IGithubRepos } from '../../services/types';

export function Repositories() {
  const history = useHistory();
  const { githubInfo } = useContext<IGithubInfoContext>(GithubInfoContext);
  const [gitRepos, setGitRepos] = useState<IGithubRepos[]>([]);
  const [isFetchingData, setIsFetchingData] = useState<boolean>(false);

  useEffect(() => {
    setIsFetchingData(true)
    api.get(`/${githubInfo.login}/repos`)
      .then((res) => {
        setGitRepos(res.data)
        setIsFetchingData(false)
      })
      .catch((error) => {
        setIsFetchingData(false)
        console.log(error)
      })
  }, [githubInfo.login])

  return (
    <>
      {isFetchingData ? <CentralizedLoader /> : (
        <>
          <HeaderContainer>
            <Wrapper>
              <button onClick={() => history.goBack()}>
                <AiOutlineArrowLeft size={24} />
              </button>
              <p>{gitRepos.length} repositórios</p>
            </Wrapper>
          </HeaderContainer>
          <PageContainer>
            {gitRepos.map((repo, index) => (
              <div key={index}>
                <Repository 
                  name={repo.name}
                  description={repo.description}
                  stargazers_count={repo.stargazers_count} 
                />
                <Divisor />
              </div>
            ))}
          </PageContainer>
        </>
      )}
    </>
  )
}