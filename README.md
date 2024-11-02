# VoxloudTest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.11.

# Installation

To get started with the weather dashboard, follow these steps:

1. Clone the repository:

   - Run the command: `git clone https://github.com/artemian4ik/voxloud-test`

2. Navigate to the project directory:

   - Use: `cd voxloud-tes`

3. Install the dependencies:
   - Execute: `npm install`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

# API Key Setup

To fetch weather data from OpenWeatherMap, you'll need an API key:

1. **Sign up** for an account at [OpenWeatherMap](https://openweathermap.org/).
2. After registering, go to the **API Keys** section in your account settings.
3. Create a new API key if one is not already generated.
4. Once you have your API key, you need to add it to your project:
   - Open the `src/app/services/weather.service.ts` file and add your API key:
     - Set the property: `private apiUrlWeather: string = 'YOUR_API_KEY_HERE'` (Replace with your OpenWeatherMap API key)

# Task Voxloud

# Voxloud Homework Assignment: Weather Dashboard

**Objective:** Build a simple weather dashboard application that displays detailed weather information for multiple cities.

## Requirements:

1. **Application Overview:**

   - Create a simple weather dashboard that allows users to add multiple cities and view their current weather conditions.
   - Each city's card should display:
     - City name
     - Current temperature
     - Weather condition (e.g., sunny, rainy)
     - Option to remove the city from the dashboard.

2. **Technical Requirements:**

   - Use latest **Angular**
   - Fetch weather data from a public API (e.g., OpenWeatherMap API).
   - Implement the following features:
     - An input field to enter a city name and a button to add it to the dashboard.
     - A display of all added cities, each in its own card.
     - Use **RxJS** to handle API requests and manage the response data.
     - Implement a loading indicator while fetching data.
     - Implement error handling to manage cases where the city is not found.
   - Style the dashboard using **CSS** or **Sass**, ensuring a responsive design.
     Using helper style libraries like Tailwind is allowed.
   - Write unit tests for components and services using **Jasmine/Karma**.

3. **Additional Features (Optional):**

   - Save the list of cities in local storage so that they persist across page refreshes.
   - Allow users to view the forecast for the next few days for each city.
   - Add some fancy animations

4. **Submission:**
   - Use this repo as a starting point for your journey
   - Host the code in a public repository (e.g., GitHub) and provide the link.
   - Include a README file with setup instructions and details on any API keys used.
