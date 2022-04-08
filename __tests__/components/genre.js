/**
 * @jest-environment jsdom
 */

import { render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import nock from 'nock';

import Genre from '../../components/genre';

beforeAll(() => nock.disableNetConnect());
afterAll(() => nock.enableNetConnect());

afterEach(() => {
  nock.cleanAll();
});

test('renders a genre', async () => {
  const mockApi = nock('http://localhost:3000')
    .post('/api/graphql')
    .reply(200, {
      data: {
        SongsByGenre: [
          {
            track_id: '7GhIk7Il098yCjg4BQjzvb',
            track_name: 'Never Gonna Give You Up',
            track_artist: 'Rick Astley',
            track_popularity: 66,
            track_album_id: '6XhjNHCyCDyyGJRM5mg40G',
            track_album_name: 'Whenever You Need Somebody',
            track_album_release_date: '1987-12-08',
            playlist_name: "80's Songs | Top 💯 80s Music Hits",
            playlist_id: '65HtIbyFkaQPflCa4oW8KO',
            playlist_genre: 'pop',
            playlist_subgenre: 'electropop',
            danceability: 0.727,
            energy: 0.939,
            key: 8,
            loudness: -11.855,
            mode: true,
            speechiness: 0.0369,
            acousticness: 0.135,
            instrumentalness: 0.0000435,
            liveness: 0.151,
            valence: 0.916,
            tempo: 113.33,
            duration_ms: 212827
          },
          {
            track_id: '5fnDDcjcXKUvJ6iSnpiU0v',
            track_name: 'Never Gonna Give You Up',
            track_artist: 'Mac Beez',
            track_popularity: 50,
            track_album_id: '1fWMQOAKIqdgzQgE311HK8',
            track_album_name: 'Never Gonna Give You Up',
            track_album_release_date: '2017-01-13',
            playlist_name: 'Tropical House',
            playlist_id: '37i9dQZF1DX0AMssoUKCz7',
            playlist_genre: 'latin',
            playlist_subgenre: 'tropical',
            danceability: 0.765,
            energy: 0.751,
            key: 9,
            loudness: -5.336,
            mode: false,
            speechiness: 0.0286,
            acousticness: 0.333,
            instrumentalness: 0.64,
            liveness: 0.08,
            valence: 0.862,
            tempo: 105.953,
            duration_ms: 212910
          },
          {
            track_id: '4qjqO5m5e5vebk9upd7xUU',
            track_name: 'Never Gonna Give You Up',
            track_artist: 'The Black Keys',
            track_popularity: 50,
            track_album_id: '7qE6RXYyz5kj5Tll7mJU0v',
            track_album_name: 'Brothers',
            track_album_release_date: '2010-05-18',
            playlist_name: 'Sexy Soul 2020',
            playlist_id: '5EMARioe9z9eKOeWIAC2JW',
            playlist_genre: 'r&b',
            playlist_subgenre: 'neo soul',
            danceability: 0.557,
            energy: 0.665,
            key: 6,
            loudness: -6.19,
            mode: false,
            speechiness: 0.0328,
            acousticness: 0.324,
            instrumentalness: 0.000281,
            liveness: 0.0713,
            valence: 0.437,
            tempo: 75.805,
            duration_ms: 218987
          }
        ]
      }
    });

  const { container, getByText } = render(<Genre genre="pop" />);

  expect(getByText('Loading...')).toBeInTheDocument();
  await waitFor(() => expect(mockApi.isDone()).toEqual(true));
  expect(container).toMatchInlineSnapshot(`
    <div>
      <div
        class="container"
      >
        <h2
          class="text-capitalize py-5"
        >
          pop
        </h2>
        <div
          class="row row-cols-1 row-cols-sm-3 row-cols-lg-5 g-3"
        >
          <div
            class="col"
          >
            <div
              class="card"
            >
              <div
                class="card-body"
              >
                <p
                  class="card-text"
                >
                  Never Gonna Give You Up
                </p>
                <small
                  class="text-black-50"
                >
                  Rick Astley
                </small>
              </div>
            </div>
          </div>
          <div
            class="col"
          >
            <div
              class="card"
            >
              <div
                class="card-body"
              >
                <p
                  class="card-text"
                >
                  Never Gonna Give You Up
                </p>
                <small
                  class="text-black-50"
                >
                  Mac Beez
                </small>
              </div>
            </div>
          </div>
          <div
            class="col"
          >
            <div
              class="card"
            >
              <div
                class="card-body"
              >
                <p
                  class="card-text"
                >
                  Never Gonna Give You Up
                </p>
                <small
                  class="text-black-50"
                >
                  The Black Keys
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `);
});
