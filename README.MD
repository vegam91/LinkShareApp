
# LinkShare App

LinkShare is a full-stack web application built using the MERN (MongoDB, Express, React, Node.js) stack. It allows you to create an account and share links of your personal and professional profiles.

<!-- ![LinkShare Screenshot](screenshots/linkshare.png) -->

## Features

- **Account Registration:** Create a user account using your email and a secure password.
- **Profile Management:** Add, edit, or remove links to your personal and professional profiles.
- **Share with Others:** Share your profile links easily with friends and colleagues.

## Technologies Used

- **Front-End:** React
- **Back-End:** Node.js, Express
- **Database:** MongoDB
- **Authentication:** JSON Web Tokens (JWT)

## Installation

1. Clone this repository to your local machine.

```bash
git clone https://github.com/yourusername/linkshare.git
cd linkshare
```

2. Install the dependencies for both the client and server:

```bash
# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install
```

3. Set up your MongoDB database. Create a `.env` file in the `server` directory and add your database URI as `MONGO_URI`.

```env
MONGO_URI=your-mongodb-uri
```

4. Start the server and client:

```bash
# Start the server (from the server directory)
npm start

# Start the client (from the client directory)
npm start
```

5. The application will be available at `http://localhost:3000` by default.

## Usage

- Visit the registration page to create an account.
- Log in to start managing your profile links.
- Add, edit, or delete links as needed.
- Share your profile links with others.

## Contributing

Contributions are welcome. Please follow the standard GitHub fork and pull request process.




