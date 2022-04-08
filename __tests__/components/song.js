/**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Song from '../../components/song';

test('renders a song', () => {
  const { container } = render(
    <Song
      song={{
        track_album_name: 'Whenever You Need Somebody',
        track_name: 'Never Gonna Give You Up',
        track_artist: 'Rick Astley'
      }}
    />
  );
  expect(container).toMatchInlineSnapshot(`
<div>
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
</div>
`);
});
