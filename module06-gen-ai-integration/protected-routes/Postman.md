## Using Tokens with Postman for API Requests

For your group project that uses Swagger UI, you'll need to understand how to work with authentication tokens in Postman. Here's a guide on how to use tokens for API requests:

### 1. Obtaining a Token

1. **Create a Sign Up/Login Request**:

   - Set up a POST request to your authentication endpoint (e.g. `/api/auth/login`)
   - In the "Body" tab, select "raw" and "JSON" format
   - Enter your credentials in JSON format:

   ```json
   {
     "email": "user@example.com",
     "password": "yourpassword"
   }
   ```

   - Send the request

2. **Extract the Token**:
   - The response should contain your authentication token
   - It might look something like:
   ```json
   {
    "user": {
        "id": 1,
        "email": "user@example.com"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ1c2VyQGV4YW1wbGUuY29tIiwiaWF0IjoxNzQzNDM3Nzg1LCJleHAiOjE3NDcwMzc3ODV9.QdSyjYgHk2zANAgKmICCxphT0Pr4bM52a3r-7yTjdnY"
   }
   ```
   - Copy the token value

### 2. Using the Token for Authenticated Requests

#### Authorization Header

1. Create a new request (e.g., GET `/api/events` or POST `/api/events`)
2. Go to the "Authorization" tab
3. Select "Bearer Token" from the Type dropdown
4. Paste your token in the "Token" field
5. Send your request (e.g.):
   ```json
   {
   "title": "Event Title",
   "description": "Some Description for the Event",
   "date": "2025-03-31T16:18:05.833Z",
   "location": "Schloßbezirk 10, 76131 Karlsruhe",
   "latitude": 8.404746955649602,
   "longitude": 49.01438194665317
   }
   ```

#### Fetch Example

Here's a basic example of how to make an authenticated POST request using fetch:

```javascript
const createEvent = async () => {
  const token = localStorage.getItem('token');
  
  try {
    const response = await fetch('https://your-api-url.com/api/events', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        title: "Event Title",
        description: "Some Description for the Event",
        date: "2025-03-31T16:18:05.833Z",
        location: "Schloßbezirk 10, 76131 Karlsruhe",
        latitude: 8.404746955649602,
        longitude: 49.01438194665317
      })
    });
    
    const data = await response.json();
    console.log('Success:', data);
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

createEvent();
```
