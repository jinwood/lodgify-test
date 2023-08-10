# Lodgify code test

## Intro

This is my submission for Lodgify's tech test. I spent approximately 2 evenings - around 6 hours - on this task. I used create-react-app to scaffold the project and have added no additional dependencies. Overall I am happy with how the project turned out, but there are a few things I would have liked to have done differently if I had more time.

It is best viewed on a desktop or laptop. I have only tested using Firefox and Chromium.

## Running the project

To run the project, clone the repo and run `npm install` followed by `npm start`. This will start the project on localhost:3000.

## Implemented features

- data fetching for tasks
- normalised values for each task (so they sum to 100)
- task completion
- reactive ui for task completion (text / icon / heading changes)
- reactive progress bar
- overall design that mimics the provided figma design

## Design choices

I opted to use react context to manage the state of the app. This is because the app is very small and I didn't want to add the overhead of redux or other libraries. I also wanted to demonstrate that I am comfortable using context. If the app were to grow, I would consider other options.

I used css modules to style the app. I find this to be a good balance between the flexibility of css and the encapsulation of css-in-js. I also find it to be a good way to demonstrate my css skills.

The components themselves are structured in a way that made sense to me.

**TaskManager**
This is the top level component. It is responsible for initiating the data fetching and rendering the ProgressBar and TaskGroup components. 

**TaskGroup**
This component renders each group of tasks. It is responsible for rendering the Task components and the group heading along with managing the toggle state. 

**TaskItem**
This component renders each individual task. It is responsible for rendering the task text, checkbox and managing the completion state. It has a click handler for toggling the completion state.

## Things I would have done differently

Given more time...

- I would have liked to have added some tests. I would have used jest and react-testing-library.
- There is no loading state and very little error handling. I would have liked to have added these.
- Whilst the app behaves ok on mobile, I would have liked to have made it more responsive.
- I have not considered accessibility at all. I would have liked to have added aria attributes and made sure the app was keyboard navigable.
- I added some basic animations, but they could be a little more polished.
- As mentioned, the design is "mimicked" as the figma design is locked down so I can't extract exact values for fonts, spacing etc nor get the exact SVGs for icons
