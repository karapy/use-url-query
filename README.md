# use-url-query

`use-url-query` is a lightweight React hook for managing URL query parameters. It allows you to easily read, update, and synchronize query parameters with React state, making it perfect for building dynamic UIs that require state persistence across page reloads.

## Key Features

- **Bidirectional Sync**: Automatically syncs React state with URL query parameters.
- **Simple API**: Provides `query` and `setQuery` for easy state management.
- **Default Values**: Supports setting a default value for query parameters.
- **History Integration**: Uses `window.history.replaceState` to update the URL without reloading the page.
- **No External Dependencies**: A lightweight solution with no additional dependencies.

## Installation

You can install the package via npm or yarn:

npm install use-url-query

or

yarn add use-url-query

## Usage

Here is a basic example of how to use the `useURLQuery` hook:

```jsx
import React from "react";
import useURLQuery from "use-url-query";

const SearchComponent = () => {
  // Use the hook to manage the 'search' query parameter
  const { query, setQuery } = useURLQuery("search", "");

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
      />
      <p>Current query: {query}</p>
    </div>
  );
};

export default SearchComponent;
```

### Explanation

`useURLQuery('search', '')` initializes the query state with the value from the `search` URL parameter, defaulting to an empty string if not found.  
`setQuery` updates both the React state and the URL query parameter when called.

### Example of URL Behavior

1. When you type in the input field, the query parameter in the URL will update. For example:
   - `?search=my-query`
2. When the page reloads, the query parameter will persist in the URL and the state will be automatically updated.

## API

### `useURLQuery(name: string, defaultValue: string = '')`

- **name**: The name of the query parameter to manage.
- **defaultValue**: (Optional) The default value for the query parameter if it is not found in the URL.

### Returns

- **query**: The current value of the query parameter.
- **setQuery**: A function to update the query parameter in the URL and the state.

## Example with Multiple Query Parameters

You can use the hook to manage multiple query parameters by using different names:

```jsx
import React from "react";
import useURLQuery from "use-url-query";

const FilterComponent = () => {
  const { query: searchQuery, setQuery: setSearchQuery } = useURLQuery(
    "search",
    ""
  );
  const { query: sortQuery, setQuery: setSortQuery } = useURLQuery(
    "sort",
    "asc"
  );

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search..."
      />
      <select value={sortQuery} onChange={(e) => setSortQuery(e.target.value)}>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
      <p>Current search query: {searchQuery}</p>
      <p>Current sort query: {sortQuery}</p>
    </div>
  );
};

export default FilterComponent;
```
