# Personal-Dashboard

A customizable Dashboard for all your needs across the day.

Developed using HTML, CSS & JS. Functioning Frontend and Backend using Express & Vite.

## Setup

``` npm
npm install

npm run dev
```

## Features

### Widgets

The dashboard is made of many different Widgets.

- Notes: A little notes section using **TipTap** & JSON.
- Quote of the day: An inspirational quote pulled from the `quotes.json` file, chosen randomly by generating a random seed from the date.

## Planned

### Widgets

- Weather: The weather in your area using the **Openweather API**.
- News: Relevant News pulled from the **Newsdata.io API**. Interesting Articles can be saved to view any time.
- App Status: Check the status of an app by adding its URL, which will run fetch calls on it.
- GD Level Tracker: View all the levels you're currently progressing on. If none is being progressed, it shows a recommended level based on the hardest you've completed & enjoyment ratings. Requires the [Geometry Dash Bucket List](https://github.com/Yooli8537/geometry-dash-bucket-list).
- Writing Tracker: Track how long you've been working on a book.
- Habit Tracker: Track your habits and continue your streak.
- Spotify Widget: Track your most popular songs & artists and compare them.
- Upcoming Events: Events from the next 7 days pulled from your Google Calendar. Filter through certain colors.
- Addiction Tracker: Similar to the habit tracker but for anything you want to track and do less of.
- Pomodoro Timer: Start working in a structured way. Track sessions & get a summary of how much you work.

### Other

- Settings
  - Disable individual widgets & rearrange their order*.
  - Set time display to a preferred language.
  - Set date display to a preferred language.
  - Set weekday display to a preferred language.
  - Light / Dark Mode
- Styling: Make the dashboard actually look good.

*Due to how the widgets are programmed to be arranged this will function as more of a priority list rather than being able to position widgets perfectly.
