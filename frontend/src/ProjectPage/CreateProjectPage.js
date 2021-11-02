const CreateProjectPage = ({ details, loading }) => {
  if (loading) {
    return <h1>Loading..</h1>;
  }
  return (
    <div>
      <h2>{details.name}</h2>
      <h2>{details.description}</h2>
      <h2>{details.language}</h2>
      <h2>{details.name}</h2>
    </div>
  );
};

export default CreateProjectPage;
