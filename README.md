# Homestay Booking Website - Frontend

Frontend application for the **Homestay Booking System**, built with
**ReactJS**.\
This project provides a user-friendly interface that allows customers to
browse rooms, view details, and book homestay accommodations online.

------------------------------------------------------------------------

## 📌 Features

-   User authentication (Login / Register / Google Login)
-   Browse available rooms
-   View room details (price, images, description, amenities)
-   Search and filter rooms
-   Booking and reservation management
-   Responsive UI for mobile and desktop
-   Admin/Staff interface for managing rooms and bookings

------------------------------------------------------------------------

## 🛠️ Technologies Used

-   ReactJS
-   React Router
-   Axios
-   TailwindCSS / Bootstrap
-   Context API / Redux (optional for state management)
-   RESTful API integration

------------------------------------------------------------------------

## 📂 Project Structure

    src
     ┣ components       # Reusable UI components
     ┣ pages            # Main pages of the application
     ┣ services         # API calls and service logic
     ┣ hooks            # Custom React hooks
     ┣ context          # Global state management
     ┣ utils            # Helper functions
     ┣ assets           # Images, icons, static files
     ┣ App.js           # Main app component
     ┗ index.js         # Entry point

## 🔗 Backend API

This frontend communicates with the backend API for authentication, room
management, and booking services.

Example API base URL:

    http://localhost:8080/api

Make sure the backend server is running before using the application.

------------------------------------------------------------------------

## 👥 User Roles

### Customer

-   Register / Login
-   Search and view homestays
-   Book rooms
-   Manage booking history

### Staff / Admin

-   Manage rooms
-   Manage bookings
-   Update room availability
-   View booking statistics

------------------------------------------------------------------------

## 📸 Main Pages

-   Home Page
-   Room Listing
-   Room Details
-   Booking Page
-   User Profile
-   Admin Dashboard

------------------------------------------------------------------------