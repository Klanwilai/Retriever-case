
const TwitterFeed = () => {

  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [searching, setSearching] = React.useState(null);
  const [searchInput, setSearchInput] = React.useState("");

  React.useEffect(() => {

    fetch("https://www.retriever-info.com/jorgen/tweets.json")
      .then(r => r.json())
      .then(r => r.documents)
      .then(setData)
      .catch(setError)
        
  }, []);

  React.useEffect(() => {
    const timer = setTimeout(() => {
       setSearchInput(searching);
    }, 500);

    return () => clearTimeout(timer);
  }, [searching])


  if (error) {

    console.error(error);
    return (
      <h1>ERROR BRO</h1>
    );
  }

  if (!data) return (
    <h1>LOADING BRO</h1>
  );

  return (
    <div className="feed">
      <form>
        <input id="author-name" type="text" placeholder="author" onChange={(e) => setSearching(e.target.value)}/> 
	      <div id="result" >
	      </div>
      </form>
      <Tweets data={data} author={searchInput}/>
    </div>
  );
}

