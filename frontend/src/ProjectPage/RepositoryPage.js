import axios from 'axios';
import { useState } from 'react';
import CreateProjectPage from './CreateProjectPage';

const RepositoryPage = () => {
  const [userName, setUserName] = useState('');
  const [repos, setRepos] = useState([]);
  const [details, setDetails] = useState({});
  const [detailsLoading, setDetailsLoading] = useState(false);
  const [accessToken, setAccessToken] = useState('');

  function handleSubmit(e) {
    searchRepos();
  }

  function searchRepos() {
    axios.get('https://localhost:5000/githubUserInfo').then((res) => {
      const userName = res.data.githubInfo.userName;
      const accessToken = res.data.githubInfo.accessToken;
      setUserName(userName);
      setAccessToken(accessToken);
    });
    setLoading(true);
    axios({
      method: 'get',
      url: `https://api.github.com/users/${userName}/repos`,
      header: `token ${accessToken}`,
    }).then((res) => {
      setLoading(false);
      setRepos(res.data);
    });
  }
  // 하나의 repository 접근
  function renderRepo(repo) {
    return (
      <div onClick={() => getDetails(repo.id)} key={repo.id}>
        <h2>{repo.name}</h2>
      </div>
    );
  }
  // 하나의 repository 접근
  function getDetails(repoId) {
    setDetailsLoading(true);
    axios({
      method: 'get',
      url: `https://api.github.com/repositories/${repoId}`,
    }).then((res) => {
      setDetailsLoading(false);
      setDetails(res.data);
    });
  }

  return (
    <div>
      <div>{repos.map(renderRepo)}</div>
      <CreateProjectPage details={details} loading={detailsLoading} />
    </div>
  );
};

export default RepositoryPage;
