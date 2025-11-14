# Social Media Login Service



### Author: Keya Gangadharan

### Course: SWENG 861 — Week 2 Assignment

### Date: 11/01/25



## Overview

This project implements a social media login service that allows users to authenticate using their Google and Facebook accounts via OAuth 2.0. It demonstrates secure authentication flow, session management, error handling, and a responsive user interface built with Node.js, Express, and Passport.js. The system can be extended to support Apple, LinkedIn, or Okta SSO for additional security and scalability.



## Features Implemented

| Feature | Description |

|----------|-------------|

| Google Login | Implements OAuth 2.0 authentication using Google APIs. |

| Facebook Login | Integrates Facebook Login via OAuth 2.0 (in development mode). |

| Secure Sessions | Uses express-session to manage authenticated user sessions. |

| Error Handling | Handles OAuth errors, missing credentials, and session timeouts. |

| Responsive UI | EJS-based frontend allows users to select their preferred login provider. |

| Environment Configuration | Secrets and keys stored securely in a .env file. |



## Technologies Used

- Node.js + Express.js

- Passport.js (with passport-google-oauth20 and passport-facebook)

- EJS templating

- express-session

- dotenv

- OAuth 2.0



## Setup Instructions



### 1. Prerequisites

- Install Node.js (LTS version recommended)

- Have a Google Cloud account and a Facebook Developer account.



### 2. Clone the Repository

git clone [https://github.com/Kayuhnaise/Social-Login-App]

cd social-login-app



### 3. Install Dependencies

npm install



### 4. Configure Environment Variables

Create a .env file in the project root:



GOOGLE_CLIENT_ID=your_google_client_id_here

GOOGLE_CLIENT_SECRET=your_google_client_secret_here

FACEBOOK_CLIENT_ID=your_facebook_app_id_here

FACEBOOK_CLIENT_SECRET=your_facebook_app_secret_here

SESSION_SECRET=your_random_secret

PORT=3000



### 5. Run the Application

npm start

Visit: http://localhost:3000



## Configuring OAuth



### Google Login Setup

1. Go to Google Cloud Console → Credentials.

2. Create a new OAuth 2.0 Client ID (type: Web Application).

3. Set Authorized redirect URI: http://localhost:3000/auth/google/callback

4. Copy the Client ID and Client Secret into your .env file.



### Facebook Login Setup

1. Go to Facebook for Developers.

2. Create a new app → Add Facebook Login as a product.

3. Add this redirect URI under Facebook Login → Settings: http://localhost:3000/auth/facebook/callback

4. In Settings → Basic, add localhost under App Domains.

5. Copy the App ID and App Secret into your .env file.



## Testing & Verification

1. Start the app (npm start).

2. Go to http://localhost:3000.

3. Click Login with Google → sign in → redirected to /profile.

4. Click Login with Facebook → sign in → redirected to /profile.

5. Verify that:

&nbsp;  - The user’s name and profile photo are displayed.

&nbsp;  - Sessions persist until logout.

&nbsp;  - No credentials are exposed in logs.



## Screenshots

[Login Page](C:UserskeyagDocumentssocial-login-appscreenshotslogin.png) [Successful Google Login](C:UserskeyagDocumentssocial-login-appscreenshotsGoogleLogin.png) 

[Successful Facebook Login](C:UserskeyagDocumentssocial-login-appscreenshotsFacebookLogin.png) 



##  Error Handling & Security Measures

- Secrets stored in .env (not committed to repo).

- Proper failureRedirect and try/catch for OAuth callbacks.

- HTTPS recommended for production.

- Session cookies configured securely.

- Logs exclude sensitive tokens.



##  Project Submission Details

GitHub Repository URL: [https://github.com/Kayuhnaise/Social-Login-App]

Screenshots Folder: [/screenshots/](C:UserskeyagDocumentssocial-login-appscreenshots) containing login flow evidence



##  References

- Facebook Login Permissions: https://developers.facebook.com/docs/facebook-login/permissions

- Google OAuth 2.0 Documentation: https://developers.google.com/identity/protocols/oauth2

- Passport.js Strategies: http://www.passportjs.org/packages/



##  Final Checklist

[ ] Google login works and redirects to /profile.

[ ] Facebook login works (no Invalid Scopes error).

[ ] Screenshots added under /screenshots/.

[ ] .env not uploaded to GitHub.

[ ] README filled with screenshots and repo URLs.



