# URL Shortener

A simple URL shortener service built with Node.js, Express, and MongoDB.

## Features

*   Shorten long URLs
*   Redirect to original URL
*   Unique short URL generation
*   Rate limiting

## Technologies

*   Node.js
*   Express
*   MongoDB
*   Mongoose
*   jsonwebtoken
*   bcrypt
*   express-rate-limit
*   shortid

## Installation

1.  Clone the repository:

    
    git clone <repository_url>
    cd url-shortener
    

2.  Install dependencies:

    
    npm install
    

3.  Configure environment variables:

    *   Create a `.env` file in the root directory.
    *   Define the following variables:

        
        PORT=3000
        MONGODB_URI=mongodb://localhost:27017/url-shortener
        JWT_SECRET=your_jwt_secret
        BASE_URL=http://localhost:3000
        

4.  Start the server:

    
    npm start
    

## API Endpoints

*   `POST /api/shorten` - Shorten a URL

    *   Request body:

        
        {
          "longUrl": "<long_url>"
        }
        

    *   Response:

        
        {
          "shortUrl": "<short_url>"
        }
        

*   `GET /:code` - Redirect to original URL

## Authentication (optional)

The service can be extended to include user authentication with JWTs.

*   `POST /api/register` - Register a new user
*   `POST /api/login` - Login a user and retrieve JWT
*   Protected URLs could be implemented using the middleware `authMiddleware.js`.
