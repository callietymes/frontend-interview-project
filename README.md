## ClearVoice Frontend Onsite Project

### Overview
Create a list of author items that match the provided comp. CSS/styling should only be started after the correct information is in place.
Try to commit frequently!

#### Directions
1. Clone the project
2. Install dependencies
    - `yarn`
3. Create a new branch for you to work on
    - `git checkout -b YOUR_NAME`
4. Load the authors and the books from the provided API endpoint
   - The API was designed poorly and does not provide any filters or expansion. You must load up all of the records and match on `author_id`
5. Construct and append the necessary DOM
   - The DOM structure can be changed up later once you begin to style the items
6. Style the items
7. After the time is done, commit what you have, push it up, and create a Pull Request for it.

### Yarn scripts
#### Start the API Server
```
yarn api
```

#### Start the Webpack Server
```
yarn dev
```

#### To start both servers together
```
yarn start
```
