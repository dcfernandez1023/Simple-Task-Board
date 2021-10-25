# React + Firebase Web App Template
This template is set up for developing a React web app (initialized with `create-react-app`) that can read/write to Cloud Firestore, deploy with Firebase Hosting, and use Google's sign-in window.

## Getting Started
- Fork this repo and clone it onto your computer
- Run `npm install`
- Run `npm install -g firebase-tools` (if you don't have firebase-tools)
- Grab the project id of your Firebase project and replace it for each instance of `<INSERT_YOUR_PROJECT_ID>` in `.firebaserc`
- Grab your project's Firebase config from your project's settings and insert it where specified in `/src/firebase/firebaseApp.js`
- Run `firebase use <YOUR_PROJECT_ID>` to give your project an alias for deployment

Note: In order to use `/src/firebase/db.js` and `/src/firebase/auth.js` you'll have to initialize your Cloud Firestore database in the `Firestore Database` tab and enable Google Sign-in in your project's `Authentication` tab.

## Running Locally
- `npm start` to run the project locally

## Deploying to Firebase Hosting
- Run `npm run build`
- Run `firebase login` (if you're not already logged in)
- Run `firebase deploy`
