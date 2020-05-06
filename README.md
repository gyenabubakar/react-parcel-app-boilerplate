# react-parcel-app-boilerplate

These are starter files for creating a React app using [Parcel](https://parceljs.org/), the zero-configuration JavaScript application bundler.

---

To start using the boilerplate clone it or just download the zip:

```
git clone https://github.com/gyenabubakar/react-parcel-app-boilerplate.git
```

#### Installing the necessary dependencies

After cloning the repository, open your command-line (if you haven't) and enter the following command to install all the dependencies needed to use React and Parcel:

```
cd react-parcel-app-boilerplate
npm install
```

#### Start a local server

To spin up a local development server for your React application, run:

```
npm run dev
```

This will start up a development server on `localhost:3000` and automatically open your default browser.

#### Deleting development files and cache

Whenever you start a development server, Parcel bundles your app into a folder called `dev` (you can change this by tempering with the `package.json` file), and also a folder named `.cache`. Just in case you want to remove these folders, run the following command:

```
npm run clean-dev
```

#### Building your app for production

Enter the following command to build your final code for distribution:

```
npm run build
```

> Please note that the `build` and `clean-dev` scripts do not function on the Windows Command Prompt. Use Git Bash instead.
