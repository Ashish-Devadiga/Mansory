Masory Clothing Shop
Masory is a fully functional online clothing shop where users can browse, select, and purchase clothing items. Built using modern web technologies, Masory offers a seamless and engaging shopping experience.

Features
User-Friendly Interface: Clean and responsive design for all devices.
Product Browsing: Explore a wide range of clothing items.
Add to Cart: Users can add selected items to their shopping cart.
Authentication: User login and registration functionality.
Admin Panel: Manage products, view orders, and handle user data.
Cash on Delivery: Payment option available for users.
Track Orders: Users can track the status of their orders.
Technologies Used
Frontend
HTML: Structure of the application.
CSS: Styling for an attractive design.
EJS Template Engine: Dynamic rendering of web pages.
Backend
Node.js: Server-side environment.
Express.js: Framework for building web applications.
Database
MongoDB: Storing user and product data.
Live Demo Here - Masory Demo
Installation
Clone the repository:

bash
Copy
Edit
git clone https://github.com/Ashish-Devadiga/Mansory.git
Navigate to the project directory:

bash
Copy
Edit
cd masory
Install dependencies:

bash
Copy
Edit
npm install
Configure environment variables:

.env variables
powershell
Copy
Edit
$env:NODE_ENV = "development"
For production environment:
powershell
Copy
Edit
$env:NODE_ENV = "production"
Additionally:
env
Copy
Edit
EXPRESS_SESSION_SECRET="session"
Start the server in development mode:

bash
Copy
Edit
npx nodemon
Open your browser and go to:

arduino
Copy
Edit
http://localhost:3000
Project Structure
plaintext
Copy
Edit
Masory/
├── public/          # Static files (CSS, JS, images)
├── routes/          # Application routes
├── views/           # EJS templates
├── models/          # Database schemas
├── controllers/     # Application logic
├── app.js           # Entry point of the application
└── package.json     # Project metadata and dependencies
Contributing
Contributions are welcome! If you'd like to improve Masory, follow these steps:

Fork the repository.
Create a feature branch:
bash
Copy
Edit
git checkout -b feature-name
Commit your changes:
bash
Copy
Edit
git commit -m "Description of changes"
Push to the branch:
bash
Copy
Edit
git push origin feature-name
Open a pull request.
License
This project is licensed under the MIT License. See the LICENSE file for more details.

Happy Shopping with Masory! 🎉
