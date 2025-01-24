# Masory Clothing Shop

Masory is a fully functional online clothing shop where users can browse, select, and purchase clothing items. Built using modern web technologies, Masory offers a seamless and engaging shopping experience.

## Features

- **User-Friendly Interface**: Clean and responsive design for all devices.
- **Product Browsing**: Explore a wide range of clothing items.
- **Add to Cart**: Users can add selected items to their shopping cart.
- **Authentication**: User login and registration functionality.
- **Admin Panel**: Manage products, view orders, and handle user data.

## Technologies Used

### Frontend

- **HTML**: Structure of the application.
- **CSS**: Styling for an attractive design.
- **EJS Template Engine**: Dynamic rendering of web pages.

### Backend

- **Node.js**: Server-side environment.
- **Express.js**: Framework for building web applications.

### Database

- **MongoDB**: Storing user and product data.

### Live Demo Here - https://mansory.onrender.com

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Ashish-Devadiga/Mansory.git
   ```

2. Navigate to the project directory:

   ```bash
   cd masory
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Configure environment variables:

   - .env variables
     ```powershell
     $env:NODE_ENV = "development"
     ```
     For production environment:
     ```powershell
     $env:NODE_ENV = "production"
     ```
     Additionally:
     ```env
     EXPRESS_SESSION_SECRET="session"
     ```

5. Start the server in development mode:

   ```bash
   npx nodemon
   ```

6. Open your browser and go to:

   ```
   http://localhost:3000
   ```

## Project Structure

```plaintext
Masory/
├── public/          # Static files (CSS, JS, images)
├── routes/          # Application routes
├── views/           # EJS templates
├── models/          # Database schemas
├── controllers/     # Application logic
├── app.js           # Entry point of the application
└── package.json     # Project metadata and dependencies
```

## Contributing

Contributions are welcome! If you'd like to improve Masory, follow these steps:

1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Description of changes"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

---

Happy Shopping with **Masory**! 🎉

