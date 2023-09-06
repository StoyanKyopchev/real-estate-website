![Alt text](./src/images/RE%20website%20showcase%20img.JPG)

# HomesA-Z

HomesA-Z is a responsive and user-friendly real estate website designed and built by me. The project is meant to showcase my current progress in front-end web development with the React framework.

## Built With

* `React`
* `Firebase`
* `CSS 3`

## Getting Started

This section will guide you how to get a local copy of the project up and running.

### Prerequisites
* npm
  ```sh
  npm install -g npm@latest
  ```

### Installation

1. Clone the repository
   ```sh
   git clone https://github.com/your_username_/Project-Name.git
   ```
2. Install the necessary NPM packages
   ```sh
   npm install
   ```
3. Create a free Firebase project by following the steps below  

   - Visit the [Firebase console](https://console.firebase.google.com) and log in with your Google account.
   - Click on "Add project" and follow the simple 2 step process there.
   - Once that is done, click on your project and on the menu to the left, head to the Authentication section. There, click on the Email/Password field and make sure that it is enabled.
   - On the menu to the left click on Project Overview at the top. Click the icon for web app </>. Give it a name and after that you will be able to see the necessary configuration settings on your screen.

4. Create a file called .env.local in the main repo folder and enter your Firebase API settings there
   ```js
   REACT_APP_FIREBASE_API_KEY=Your API key generated from Firebase
   REACT_APP_FIREBASE_AUTH_DOMAIN=...
   REACT_APP_FIREBASE_PROJECT_ID=...
   REACT_APP_FIREBASE_STORAGE_BUCKET=...
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=...
   REACT_APP_FIREBASE_APP_ID=...
   ```
5. Run the project
   ```sh
   npm start
   ```