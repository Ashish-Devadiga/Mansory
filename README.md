# Masory Clothing Shop

Masory is a fully functional online clothing shop where users can browse, select, and purchase clothing items. Built using modern web technologies, Masory offers a seamless and engaging shopping experience.

![Image](https://i.pinimg.com/736x/ce/18/a1/ce18a181c9796450b4e3b4e48fea04e5.jpg)

## Features

- **User-Friendly Interface**: Clean and responsive design for all devices.
- **Product Browsing**: Explore a wide range of clothing items.
- **Add to Cart**: Users can add selected items to their shopping cart.
- **Authentication**: User login and registration functionality.
- **Admin Panel**: Manage products, view orders, and handle user data.
- **Cash on Delivery**: Payment option available for users.
- **Track Orders**: Users can track the status of their orders.

![Image](https://i.pinimg.com/736x/dd/50/8f/dd508f8b62e1fabcb812d4a0e060ae4c.jpg)

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

![Image](https://i.pinimg.com/736x/18/27/b4/1827b4aef84fe4923f3b50f3584e0a76.jpg)

### Vist Mansory

- **live Demo** : https://mansory.onrender.com
  

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
 $env:EXPRESS_SESSION_SECRET="session"
  ```

5. Start the server in development mode:

  ```bash
     npx nodemon
  ```

6. Open your browser and go to:
  ```bash
   For Development Port http://localhost:3000
   For Production Port  http://localhost:2000
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

Happy Shopping with **Masory**!   
