import axios from 'axios';
import { useState } from 'react';
import CreateProjectPage from './CreateProjectPage';

const RepositoryPage = () => {
  const [userName, setUserName] = useState('');
  const [loading, setLoading] = useState(false);
  const [repos, setRepos] = useState([]);
  const [details, setDetails] = useState({});
  const [detailsLoading, setDetailsLoading] = useState(false);

  function handleSubmit(e) {
    searchRepos();
  }

  function searchRepos() {
    setLoading(true);
    axios({
      method: 'get',
      url: `https://api.github.com/users/${userName}/repos`,
    }).then((res) => {
      setLoading(false);
      setRepos(res.data);
    });
  }
  function renderRepo(repo) {
    return (
      <div onClick={() => getDetails(repo.id)} key={repo.id}>
        <h2>{repo.name}</h2>
      </div>
    );
  }
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
      <input value={userName} onChange={(e) => setUserName(e.target.value)}></input>
      <button onClick={handleSubmit}>{loading ? 'Searching...' : 'Search'}</button>
      <div>{repos.map(renderRepo)}</div>
      <CreateProjectPage details={details} loading={detailsLoading} />
    </div>
  );
};

export default RepositoryPage;
