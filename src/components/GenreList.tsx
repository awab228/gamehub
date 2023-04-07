import UseGenres from "../hooks/useGenres";

const GenreList = () => {
  const { data } = UseGenres();
  return (
    <ul>
      {data.map((data) => (
        <li key={data.id}>{data.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
