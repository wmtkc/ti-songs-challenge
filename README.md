## Introduction

First of all, we appreciate you. We understand take-home projects like this consume your personal time. Over the years, we've found this kind of project demonstrates your skills better than the alternatives (e.g. the dreaded whiteboard live-coding exercise.)

While we don't use React ourselves (we're an Ember shop), this exercise is _not_ intended to evaluate your expertise in our specific stack, or to provide a direct example of the code you would be working on. We're more interested in _how_ you work and your approach to solving new problems in existing code. We'd recommend avoiding a complete rewrite -- we'd like to see how you operate within an existing codebase that has its own preset conventions. If it helps, just imagine there are 100s of additional components and endpoints, as there are in the main Thought Industries codebase. This project is just on a much smaller scale.

## Your Task

We've created a sample catalog of songs pulled from [Spotify](https://www.spotify.com/)'s API. This is designed to match a small part of our own catalog functionality, which you can [see a demo of here](https://www.onlinecookingschool.com/catalog), but more musical and hopefully fun.

There's a bug in the current implementation that could use fixing and an opportunity to introduce some new functionality as well. You can choose to tackle the frontend challenge or backend challenge, or both if you're up for it!

While we like to be transparent with code reviews and Pull Requests, for this challenge you'll need to **clone this repository into a private repository** (they're free these days!) on your account. Once you're done with the challenge, commit your changes on a branch there, open up a Pull Request on your repository, and send us the link.

### Bug (everyone creates bugs)

- Searching for a song with an apostrophe in it, such as "I don't care", doesn't seem to work.

### Frontend Challenge

After setting up your dev environment, if you navigate to [http://localhost:3000/genres](http://localhost:3000/genres), you should see a list of genres and a random selection of 5 songs in each genre. We would like to add a nav bar to easily jump between genres on the page.

Here's a few behaviors we hade in mind for this functionality:

- It should be sticky at the top of the page when the user scrolls past the header, and un-stick when the user scrolls back up.
- It should highlight the current genre in the browser viewport as the user scrolls.
  - If there's more than one in view, it should highlight the first one.
- It should allow the user to click a genre to scroll to that genre's list of songs.

Our design team was able to [provide a comp](https://www.figma.com/file/3Ah3oLkYZOef3jemIFOI41/Songs-Frontend?node-id=0%3A1) which outlines how this functionality should look. This project uses the standard [Bootstrap 5.1](https://getbootstrap.com/docs/5.1/) for styling, so you are free to use all Bootstrap 5 classes, and for consistency we recommend sticking to those vs. writing your own CSS. The nav bar in the comps is a standard [Bootstrap Nav](https://getbootstrap.com/docs/5.1/components/navs-tabs/). We also have a reference video which demonstrates the ideal scroll behavior:

https://user-images.githubusercontent.com/44855/140089178-b34b28bc-173f-41d9-b7c2-2ed461c47da0.mp4

### Backend Challenge

One of the interesting data points available in our songs catalog is "danceability". We are looking to add a a few options that would allow the user to filter the catalog by "Not Danceable", "Semi Danceable", or "Danceable", depending on their mood.

"danceability" is a float between 0-1 in the data set, and through much music listening & experimentation, we have set the following thresholds for our filter:

- 0-0.5: Not Danceable
- 0.51-0.75: Semi Danceable
- 0.75+: Danceable

Here's a few behaviors we hade in mind for this functionality:

- We should display a list of options to the left of the songs catalog for the large view, and on top for the small & medium views. We should display the following options, alongside a total of songs for each one.
  - Not Danceable
  - Semi Danceable
  - Danceable
- When a option is selected, the catalog should update to only show songs that match the selected option, and we should indicate which option is selected by making the text bold.
  - We should also reveal a 'Clear Filter' link at the bottom of the list.
- The list of options should not change after an option is selected, allowing the user to seamlessly switch between different options without having to click 'Clear Filter'.
- When the user searches, we should remove the filter they have selected and the list of options should update to reflect the song(s) that match the search query.

Our design team was able to [provide a comp](https://www.figma.com/file/bBLpGQ1ffrQdAHujWk9EJf/Songs-Backend?node-id=0%3A1) which outlines how this functionality should look. This project uses the standard [Bootstrap 5.1](https://getbootstrap.com/docs/5.1/) for styling, so you are free to use all Bootstrap 5 classes, and for consistency we recommend sticking to those vs. writing your own CSS. The sidebar in the comps is a standard [Bootstrap List Group Card](https://getbootstrap.com/docs/4.0/components/card/#list-groups).

## Installation

You should be able to checkout this project and run `npm install` to install the dependencies. You will need node v14+ to run this application. From there, simply run `npm dev` and then open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Getting Started

The frontend starts in [pages/[[...q]]/index.js](pages/[[...q]]/index.js), and the backend is mostly located in [graphql/songs.js](graphql/songs.js). You should be able to start there and follow the other imported files.

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode and starts the server.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will automatically reload if you make edits, and show you errors if there are any.

### `npm run test`

Launches the test runner.<br>
This repository uses [jest](https://jestjs.io/) as its test runner and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) as a framework for testing React components. Tests are located in the [**tests**](__tests__) directory.

## Learn More

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

To learn about React, check out the [React documentation](https://reactjs.org/). Be sure to check out [hooks](https://reactjs.org/docs/hooks-intro.html) as well.

To learn more about sql.js, [see the documentation here](https://sql.js.org/#/).

Don't hesitate to ask any questions!
