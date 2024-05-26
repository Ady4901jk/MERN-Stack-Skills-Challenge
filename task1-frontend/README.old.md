# Task 1: Frontend (React.js) - Contact List Application

**Objective**: Build a simple React component to display a list of contacts and implement a search filter.

## Instructions

1. **Create a React Component**:
   - Create a React component named `ContactList`.
   - Use the `useState` and `useEffect` hooks as needed.

2. **Fetch Contacts**:
   - Fetch a list of contacts from a provided API endpoint (you can use a mock JSON file for this).

3. **Display Contacts**:
   - Display the contacts in a list format.
   - Each contact should display the following information: name, email, and phone number.

4. **Implement Search**:
   - Implement a search input that filters the displayed contacts based on their names.

### Setup Instructions

1. Navigate to the `task1-frontend` directory.
2. Install dependencies: `npm install`.
3. Start the development server: `npm start`.

### Evaluation Criteria

- Proper use of React hooks (`useState`, `useEffect`).
- Correct implementation of the search filter.
- Code readability and organization.

### Provided Mock Data

Here is an example of the mock JSON data for the contacts:

```json
[
  {
    "id": 1,
    "name": "John Doe",
    "email": "john.doe@example.com",
    "phone": "123-456-7890"
  },
  {
    "id": 2,
    "name": "Jane Smith",
    "email": "jane.smith@example.com",
    "phone": "987-654-3210"
  },
  {
    "id": 3,
    "name": "Alice Johnson",
    "email": "alice.johnson@example.com",
    "phone": "555-555-5555"
  }
]
