# Google Voice Clone

A React-based Google Voice Clone application that mimics the functionality of Google's search interface with additional features like voice search, real-time search history, and a dark mode toggle.

---

## Features

### 1. **Search Bar**
- A fully functional search bar where users can type queries.
- Queries are sent to Google Search in a new tab upon submission.
- Suggestions are dynamically generated based on the input.

### 2. **Voice Search**
- Allows users to search using voice commands.
- Utilizes the browser's Speech Recognition API.
- Displays the recognized text and confirms the search before proceeding.

### 3. **Dark Mode**
- A toggle button to switch between light and dark themes.
- Automatically updates the background and text colors for better visibility.

### 4. **Real-Time Search History**
- A sidebar that displays the user's search history in real-time.
- Clicking on a history item opens the corresponding Google search in a new tab.
- The sidebar can be toggled open or closed using a hamburger menu.

### 5. **Responsive Design**
- The layout adjusts seamlessly for different screen sizes.
- Sidebar and main content are styled for a clean and user-friendly interface.

---

## File Structure

google-voice-clone/ ├── src/ │ ├── components/ │ │ ├── SearchBar.jsx # Search bar component │ │ ├── VoiceSearch.jsx # Voice search component │ ├── App.js # Main application file │ ├── App.css # Global styles ├── public/ │ ├── index.html # HTML template ├── README.md # Project documentation


---

## How to Run the Project

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd google-voice-clone

2. Install dependencies:
npm install

3. Start the development server:
npm start

4. Open the application in your browser:
http://localhost:3000


How It Works
Search Bar
Type a query into the search bar and press "Search."
The query is added to the history and opens a Google search in a new tab.
Suggestions are displayed dynamically below the search bar.
Voice Search
Click the "🎤 Start Voice Search" button to activate voice recognition.
Speak your query, and the app will display the recognized text.
Confirm the search to proceed.
Dark Mode
Click the "🌙 Dark Mode" or "☀️ Light Mode" button to toggle themes.
The theme is applied globally to the app.
Sidebar (History)
Click the hamburger menu (☰) in the top-left corner to toggle the sidebar.
The sidebar displays a list of past searches.
Click on any history item to open the corresponding Google search.
Technologies Used
React: For building the user interface.
CSS: For styling the application.
Speech Recognition API: For voice search functionality.
