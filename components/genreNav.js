import React from 'react';

function GenreNav({ genres, activeGenre }) {
  return (
    <nav className="sticky-top bg-light shadow-sm">
      <ul className="mx-3 nav nav-pills nav-fill row row-cols-1 row-cols-sm-3 row-cols-lg-6">
        {genres.map(genre => {
          const active = genre === activeGenre ? ' active' : '';

          return (
            <li className="nav-item p-2 text-center text-capitalize">
              <a className={'nav-link' + active} key={genre} href={'#' + genre}>
                {genre}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default GenreNav;
