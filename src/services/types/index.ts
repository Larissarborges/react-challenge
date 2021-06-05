export interface IGithubInfo {
  avatar_url?: string;
  bio?: string;
  email?: string;
  location?: string;
  login?: string;
  name?: string;
  followers?: number;
  following?: number;
  public_repos?: number;
  isInitialProfile?: boolean;
  onClickSaveButton?: () => void;
  onClickLeaveButton?: () => void;
}

export interface IGithubInfoContext {
  githubInfo: Partial<IGithubInfo>;
  setGithubInfo: (info: IGithubInfo) => void;
}

export interface IGithubRepos {
  description: string;
  name: string;
  stargazers_count: number;
}

export interface IGithubFollow {
  login: string;
  avatar_url: string;
  onclick?: () => void;
}