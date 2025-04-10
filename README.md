Create a React component called PostList that fetches a list of posts from the following API:

API URL: https://jsonplaceholder.typicode.com/posts

The component should:

1. Display a loading message while the data is being fetched.

2. Display a list of posts, each post should include:

a. The post's title.

b. The post's body. Handle errors gracefully:

c. If the API request fails, display an error message.

Testing Requirements:

Write unit tests using Jest and React Testing Library to verify the following:

• Test for Loading State: When the data is being fetched, the loading message should be visible.

• Test for Successful Data Fetch: When the data is successfully fetched, posts should be

displayed with their title and body.

• Test for Error Handling: If the API request fails, the error message should be displayed.
