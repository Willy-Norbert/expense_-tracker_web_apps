# Expense Tracker

This is an expense tracking web application that allows users to manage their expenses, view expense categories, and track expenses by date using a calendar. The application stores data locally and provides a user-friendly interface for managing finances.

Hosted on https://expense-trackerwebapps.vercel.app/

## Features
- Add and categorize expenses.
- View expenses broken down by categories.
- Track expenses on a calendar view by selecting specific dates.

## Libraries Used

- **React**: A JavaScript library for building user interfaces.
- **react-calendar**: A calendar component used for displaying expenses by date.
- **useLocalStorage**: A custom hook for persisting data in the browser's local storage.
- **Tailwind CSS**: A utility-first CSS framework for building custom designs.

## How the Project Works

1. **Expenses Management**:
   - Expenses are stored in the browser's local storage using the `useLocalStorage` custom hook, which makes it easy to persist data even after the page is refreshed.
   - Expenses include fields like `amount`, `category`, and `date`.
   - Users can view their expenses categorized by type and track them by selecting dates from a calendar.
   - First you create expenses 

2. **Category Breakdown**:
   - The application groups expenses by categories and displays the total amount spent in each category.

3. **Expense Calendar**:
   - Users can select a date from a calendar, and the application filters the expenses to show only those that match the selected date.

## Project Structure

- **/components**: Contains reusable components such as `CategoryBreakdown`, `ExpenseCalendar`.
- **/hooks**: Includes custom hooks like `useLocalStorage` for handling local storage data.
- **/pages**: Holds the main pages of the app, including `CalendarPage`.
- **/types**: Defines the types used in the project, such as the `Expense` type.

## Installation

To run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone <repository-url>
   npm i
   npm run vite
