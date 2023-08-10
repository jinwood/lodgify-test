# Lodgify code test 

## Intro
This is my submission for Lodgify's tech test. I spent approximately 2 evenings - around 6 hours - on this task. I used create-react-app to scaffold the project and have added no additional dependencies. Overall I am happy with how the project turned out, but there are a few things I would have liked to have done differently if I had more time.

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