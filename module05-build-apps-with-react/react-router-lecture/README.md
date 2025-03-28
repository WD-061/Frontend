# React Router useOutletContext Example

This project demonstrates how to use React Router's `useOutletContext` hook to share authentication state between a parent layout component and its child routes.

## What is useOutletContext?

`useOutletContext` is a hook provided by React Router that allows child routes to access data passed from their parent route. It works in conjunction with the `<Outlet context={...}>` component in the parent route.

## Implementation Details

Here's how the authentication context sharing is implemented:

1. **Layout Component**:
   - Manages the `signedIn` state using React's `useState` hook
   - Passes the state and setter function to the Navbar component via props
   - Passes the same state and setter to child routes via `<Outlet context={{ signedIn, setSignedIn }}>`

2. **Navbar Component**:
   - Receives `signedIn` and `setSignedIn` as props
   - Displays a sign-in/sign-out button that toggles the authentication state
   - Changes button color and text based on the current authentication state

3. **Users Page**:
   - Uses `useOutletContext()` to access the authentication context
   - Conditionally renders content based on the `signedIn` state
   - Shows a "Please sign in" message when not authenticated
   - Displays the full list of users when authenticated

## How to Test

1. Start the application
2. Click on the "Users" link in the navigation bar
3. You'll see a message asking you to sign in
4. Click the "Sign In" button in the navigation bar
5. The Users page will now show the list of users
6. Click "Sign Out" to return to the unauthenticated state

## Why Use useOutletContext?

There are several benefits to using `useOutletContext` for sharing state:

1. **Avoids Prop Drilling**: Instead of passing props through multiple component layers, context is directly accessible to any child route.

2. **Centralized State Management**: Authentication state is managed in one place (the Layout component) and shared with all routes.

3. **Clean Component API**: Child components don't need to accept and forward props they don't directly use.

4. **Route-Specific Context**: Unlike React's Context API, `useOutletContext` is specific to the routing hierarchy, making it ideal for route-related state.

5. **Simplicity**: Compared to setting up Redux or other state management libraries, this approach is lightweight and requires minimal setup.

## Use Cases

This pattern is particularly useful for:

- Authentication state (as demonstrated)
- User preferences
- Theme settings
- Language/localization settings
- Any state that needs to be shared across multiple routes
