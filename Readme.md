## API Overview

The **MoviesDatabase API** provides a comprehensive collection of entertainment industry data. It allows developers to access detailed information for over **9 million titles** (movies, TV series, and episodes) and **11 million cast and crew members**.

### Key Features

- Plot summaries
- Release dates
- Genre classifications
- Cast and crew details
- Ratings (updated daily)
- Weekly updates for recent titles

---

## API Version

> The API documentation does **not specify** a version number.

---

## Available Endpoints

- `GET /titles`  
  Retrieves a list of titles. Supports powerful filtering and sorting with query parameters.

- `GET /x/titles-by-ids`  
  Fetches a list of titles using an array of IMDB IDs.

- `GET /titles/{id}`  
  Retrieves detailed information for a specific title using its IMDB ID.

- `GET /titles/{id}/ratings`  
  Returns rating and vote count for a specific title.

- `GET /titles/series/{id}`  
  Returns a lightweight list of all episodes in a given TV series.

- `GET /titles/seasons/{id}`  
  Returns the number of seasons for a specific TV series.

- `GET /titles/search/keyword/{keyword}`  
  Searches for titles by a specific keyword.

- `GET /titles/search/title/{title}`  
  Searches for titles by name or partial name.

- `GET /actors`  
  Retrieves a list of actors (supports pagination).

- `GET /actors/{id}`  
  Gets detailed information for a specific actor using their IMDB ID.

- `GET /title/utils/genres`  
  Retrieves available genres.

- `GET /title/utils/titleType`  
  Retrieves available title types.

- `GET /title/utils/lists`  
  Retrieves predefined title lists.

---

## Request and Response Format

### Request Structure

- All requests use the `GET` method.
- Parameters can be passed via:
  - **Path Parameters**: Required for specific resources.  
    Example: `/titles/tt0111161`
  - **Query Parameters**: Optional for filtering, sorting, or limiting.  
    Example: `/titles?genre=Drama&sort=year.decr&limit=5`

---

### Response Structure

All successful requests return a **JSON object**. The main structure includes:

- `results`: An array of data objects
- `page`: Current page (if paginated)
- `next`: URL for the next page
- `entries`: Total number of entries found

#### Example JSON Response

```json
{
  "page": 1,
  "next": "/titles?genre=Sci-Fi&page=2",
  "entries": 54321,
  "results": [
    {
      "id": "tt0133093",
      "titleText": {
        "text": "The Matrix"
      },
      "primaryImage": {
        "url": "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg"
      },
      "titleType": {
        "text": "Movie"
      },
      "releaseDate": {
        "day": 31,
        "month": 3,
        "year": 1999
      }
    }
  ]
}
```

## Authentication

The API is **public** and requires **no authentication**.  
You can access all endpoints **without** an API key or token.

---

## Error Handling

While not explicitly documented, the API likely follows standard HTTP status codes:

- **404 Not Found**: The requested resource does not exist (e.g., invalid ID).
- **400 Bad Request**: The request was malformed or contained invalid parameters.
- **5xx Server Error**: An error occurred on the server. It's recommended to retry after a short delay.

---

## Usage Limits and Best Practices

### Usage Limits

- The `limit` query parameter supports **up to 50 entries per page**.
- There is **no mention of rate limits** (e.g., requests per minute).

### Best Practices

- **Be Specific**  
  Use the `info=mini_info` query parameter to reduce response size and improve performance.

- **Use Pagination**  
  When working with large datasets, always use the `page` and `limit` parameters to process data in chunks.

- **Cache Utility Data**  
  Data from endpoints like `/title/utils/genres` rarely changes. Cache it in your app to reduce unnecessary API calls.

- **Support the Developer**  
  If you find the API useful, consider **donating via Buy Me a Coffee** to support the creator.
