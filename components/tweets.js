
const Tweets = ({data, author}) => {

  const [filteredData, setFilteredData] = React.useState(data);

  React.useEffect(() => {

    if (!author)
      setFilteredData(data);

    else
      setFilteredData(data
        .map(e => e.author.displayName.toLowerCase().includes(author.toLowerCase()) && e)
        .filter(Boolean)
      );

  }, [author]);

  console.log(data);
  return(
    <div className="tweets">
      <ol>
        {filteredData.map((e, idx) => {
          

          return (
          <li key={e.id}>
            <h3>{e.author.displayName}</h3>
            <p>{e.story}</p>
            <a href={e.url}>{e.url}</a>
          </li>
          );
        })}
      </ol>
    </div>
  );
}