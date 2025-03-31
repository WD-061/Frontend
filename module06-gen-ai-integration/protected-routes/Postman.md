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

### 3. Sending a POST Request with Hardcoded Token vs. Environment Variables

#### Approach 1: Hardcoded Token (Not Recommended)

```javascript
const createEvent = async () => {
  // Token is hardcoded directly in the source code - BAD PRACTICE!
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ1c2VyQGV4YW1wbGUuY29tIiwiaWF0IjoxNzQzNDM3Nzg1LCJleHAiOjE3NDcwMzc3ODV9.QdSyjYgHk2zANAgKmICCxphT0Pr4bM52a3r-7yTjdnY";
  
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
```

#### Approach 2: Using Environment Variables (Recommended)

1. **Create a `.env` file in your project root:**

```
AUTH_TOKEN=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ1c2VyQGV4YW1wbGUuY29tIiwiaWF0IjoxNzQzNDM3Nzg1LCJleHAiOjE3NDcwMzc3ODV9.QdSyjYgHk2zANAgKmICCxphT0Pr4bM52a3r-7yTjdnY
API_URL=https://your-api-url.com
```

2. **Access the token from environment variables:**

```javascript
const createEvent = async () => {
  // Token is accessed from environment variables - GOOD PRACTICE!
  const token = import.meta.env.AUTH_TOKEN;
  const apiUrl = import.meta.env.API_URL;
  
  try {
    const response = await fetch(`${apiUrl}/api/events`, {
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
```

#### Key Differences and Benefits

| Hardcoded Tokens | Environment Variables |
|------------------|------------------------|
| Tokens visible in source code | Tokens kept outside of source code |
| Tokens may be committed to version control | `.env` files added to `.gitignore` |
| Requires code changes to update tokens | Update `.env` file without changing code |
| Same token in all environments | Different tokens for dev/staging/production |
| Security risk if code is shared | Better security practices |
