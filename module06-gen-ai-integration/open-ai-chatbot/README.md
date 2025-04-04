## Project Overview

### App Component (`App.jsx`)

- Serves as the main container for the chatbot application
- Manages the chat messages state using React's `useState` hook
- Initializes with a system message that sets the AI's personality ("a software developer student that only speaks in rhymes")
- Uses `useRef` and `useEffect` to automatically scroll to the latest message
  - The `useRef` hook creates a mutable reference object that persists across renders without causing re-renders when its value changes. In this app, it's used to directly access the chat container DOM element, allowing the application to call `scrollIntoView()` on the last message whenever new messages are added
  - The `useEffect` code (`useEffect(() => { chatRef.current?.lastElementChild?.scrollIntoView({ behavior: "smooth" }); }, [messages]);`) works as follows:
    - It runs after every render where the `messages` array changes (specified by the dependency array `[messages]`)
    - Uses optional chaining (`?.`) to safely access properties that might be null or undefined
    - `chatRef.current` accesses the actual DOM node of the chat container
    - `lastElementChild` gets the last message in the chat
    - `scrollIntoView({ behavior: "smooth" })` smoothly scrolls that message into view
    - This creates the auto-scrolling effect where the chat always shows the most recent message
- Renders the Chat and Form components, passing necessary props
- Includes ToastContainer for displaying notifications

### Chat Component (`Chat.jsx`)

- Displays the conversation history in a scrollable container
- Receives messages and chatRef as props from the App component
- Filters out system messages so they're not displayed to the user
- Maps through messages and renders each as a ChatBubble component

### ChatBubble Component (`ChatBubble.jsx`)

- Renders individual chat messages with different styling based on the sender (user or assistant)
- Implements markdown rendering using the `marked-react` library
  - `marked-react` converts markdown text into React components rather than raw HTML
  - This allows for safer rendering without dangerouslySetInnerHTML and better integration with React's component model
  - The library processes markdown syntax like headers, lists, bold/italic text, and code blocks
- Supports syntax highlighting for code blocks using `react-refractor`
  - `react-refractor` is a syntax highlighter that uses Prism.js under the hood
  - It tokenizes code into syntax elements (keywords, strings, functions, etc.) and applies appropriate CSS classes
  - The component registers languages via `registerLanguage()` to enable support for specific programming languages
- Configures highlighting for multiple programming languages (JavaScript, PHP, Python, Bash)
  - Each language is imported separately: `import js from "refractor/lang/javascript.js"`
  - Languages are registered with `registerLanguage(js)` to make them available to the highlighter
- Uses custom renderer to properly format and highlight code snippets
  - The custom renderer (`renderer` object) overrides the default markdown code block rendering
  - It intercepts code blocks from markdown and passes them to the `Refractor` component
  - It handles language detection and fallback to bash when unspecified or unsupported languages are encountered
  - This integration connects markdown parsing with syntax highlighting for a seamless experience

### Form Component (`Form.jsx`)

- Handles user input and submission of messages to the OpenAI API
- Manages form state (prompt text, loading status, streaming toggle)
- Implements error handling with toast notifications
- Supports two response modes:
  - Standard mode: Waits for the complete response before displaying
  - Streaming mode: Shows the AI's response character by character in real-time
- Enforces a limit of 5 user messages per conversation
- Communicates with a local API endpoint that forwards requests to OpenAI

## Technical Features

- **Real-time Streaming**: Option to see AI responses as they're generated
- **Markdown Support**: Renders markdown formatting in messages
- **Code Highlighting**: Automatic syntax highlighting for code snippets
- **Responsive Design**: Clean UI that works across different screen sizes
- **Error Handling**: User-friendly error notifications
- **Auto-scrolling**: Automatically scrolls to the latest message

## Getting Started

1. Clone this repository
2. Install dependencies with `npm install`
3. Make sure the openAI proxy is running
4. Start the development server with `npm run dev`
5. Open your browser to the URL shown in the terminal
