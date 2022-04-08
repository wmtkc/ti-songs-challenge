import Genre from './genre';

export default function Genres({ genres, genreRefs }) {
  return (
    <>
      {genres.map((genre, i) => (
        <Genre key={genre} index={i} genreRefs={genreRefs} genre={genre} />
      ))}
    </>
  );
}
