import { useState, useEffect, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import { Profile } from '../../components/Profile';
import CentralizedLoader from '../../components/Loader/CentralizedLoader';

import { api } from '../../services/api';
import { IGithubInfo } from '../../services/types';
import GithubInfoContext from '../../context/github-info.context'

interface RouteParams {
  username: string;
}

export function UserProfile() {
  const history = useHistory();
  const { username } = useParams<RouteParams>();
  const { setGithubInfo } = useContext(GithubInfoContext);

  const [ userGitProfile, setUserGitProfile ] = useState<IGithubInfo>({});
  const [isFetchingData, setIsFetchingData] = useState<boolean>(true);

  useEffect(() => {
    setIsFetchingData(true)
    api.get(`/${username}`)
      .then((res) => {
        setIsFetchingData(false)
        setUserGitProfile(res.data)
      })
      .catch((error) => {
        setIsFetchingData(false)
        console.log(error)
      })
  }, [username])

  function handleSaveButton(userGitProfile: object) {
    setGithubInfo(userGitProfile)
    history.push('/home');
  }

  return (
    <>
      {isFetchingData ? 
        <CentralizedLoader /> 
          : 
        <Profile 
          avatar_url={userGitProfile.avatar_url}
          bio={userGitProfile.bio}
          email={userGitProfile.email}
          followers={userGitProfile.followers}
          following={userGitProfile.following}
          location={userGitProfile.location}
          login={userGitProfile.login}
          name={userGitProfile.name}
          public_repos={userGitProfile.public_repos}
          onClickSaveButton={() => handleSaveButton(userGitProfile)}
        />
      }
    </>
  )
}