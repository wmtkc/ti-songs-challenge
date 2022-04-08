import { createRef, useRef, useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Genres from '../components/genres';
import GenreNav from '../components/genreNav';

const GENRES = ['rap', 'pop', 'edm', 'r&b', 'rock', 'latin'];

export default function GenresPage() {
  const genreRefs = useRef([]);
  const [activeGenre, setActiveGenre] = useState(GENRES[0]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        // if at bottom of page, set last section active
        setActiveGenre(GENRES[GENRES.length - 1]);
      } else {
        // else set section closest to top active
        const refDistances = genreRefs.current.map(genreRef => {
          return Math.abs(genreRef.offsetTop - window.scrollY);
        });
        setActiveGenre(GENRES[refDistances.indexOf(Math.min(...refDistances))]);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <main>
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Songs</h1>
            <p className="lead text-muted">Songs are what move us</p>
          </div>
        </div>
      </section>
      <div className="bg-light">
        <GenreNav genres={GENRES} activeGenre={activeGenre} />
        <Genres genres={GENRES} genreRefs={genreRefs} />
      </div>
    </main>
  );
}
