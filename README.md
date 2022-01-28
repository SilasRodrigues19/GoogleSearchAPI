[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<!-- PROJECT LOGO -->
<br />
<samp>
<p align="center">
  <a href="https://github.com/SilasRodrigues19/Google-Search-API">
    <img src="https://cdn.dribbble.com/users/1677939/screenshots/8817404/google_icon_-_dribbble.jpg" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Google Search API</h3>

  <p align="center">
    Search data with the google search API
    <br />
    <a href="https://google-search-two.vercel.app/search">Demo</a>
    <a href="https://github.com/SilasRodrigues19/Google-Search-API/issues"></a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Preview][product-screenshot]](https://google-search-two.vercel.app/search)
[![Preview][product-screenshot2]](https://google-search-two.vercel.app/search)
[![Preview][product-screenshot3]](https://google-search-two.vercel.app/search)
[![Preview][product-screenshot4]](https://google-search-two.vercel.app/search)
[![Preview][product-screenshot5]](https://google-search-two.vercel.app/search)

Project developed in a JavaScript Mastery channel tutorial to learn React best practices, creating modern user interfaces using Tailwind CSS and most importantly, learn to fetch data from Google Search API using RapidAPI.

The website is divided into:

- **Input**: enter text to search google api.
- **Toggle Button**: switch between light and dark themes.
- **Home**: shows some results for your search.
- **News Tab**: shows some news related to your search.
- **Images Tab**: shows some images related to your search.
- **Videos Tab**: shows some videos related to your search.

### Built With

Technologies used in the project.

### Frameworks

- [Tailwind CSS](https://tailwindcss.com)

### Libraries

- [ReactJS](https://pt-br.reactjs.org)
- [Iconify](https://iconify.design)

<!-- GETTING STARTED -->

## Getting Started

### Prerequisites

1. Create an account on RapidAPI in the link below.

```sh
https://rapidapi.com/apigeek/api/google-search3
```

2. Copy the x-rapidapi-key code that will be used in the .env file.

```sh
  const res = await fetch(`${baseUrl}${url}`, {
      method: 'GET',
      headers: {
        'x-proxy-location': 'EU',
        'x-rapidapi-host': 'google-search3.p.rapidapi.com',
        'x-rapidapi-key': process.env.REACT_APP_API_KEY,
      },
    });
```

3. Create a file named .env copy the code below and paste in it (replace the value after the equal with your x-rapidapi-key).

```sh
  REACT_APP_API_KEY = 123456789123456789
```

4. If you have an application running, stop the server and run it again to work the environment variable.

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/SilasRodrigues19/Google-Search-API.git
   ```
2. Install dependencies
   ```sh
   npm install
   ```

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->

## Contact

Silas Rodrigues - [@jinuye1](https://twitter.com/jinuye1) - silasrodrigues.fatec@gmail.com

Project Link: [https://github.com/SilasRodrigues19/Google-Search-API](https://github.com/SilasRodrigues19/Google-Search-API) <br>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/SilasRodrigues19/Google-Search-API.svg?style=for-the-badge
[contributors-url]: https://github.com/SilasRodrigues19/Google-Search-API/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/SilasRodrigues19/Google-Search-API.svg?style=for-the-badge
[forks-url]: https://github.com/SilasRodrigues19/Google-Search-API/network/members
[stars-shield]: https://img.shields.io/github/stars/SilasRodrigues19/Google-Search-API.svg?style=for-the-badge
[stars-url]: https://github.com/SilasRodrigues19/Google-Search-API/stargazers
[issues-shield]: https://img.shields.io/github/issues/SilasRodrigues19/Google-Search-API.svg?style=for-the-badge
[issues-url]: https://github.com/SilasRodrigues19/Google-Search-API/issues
[license-shield]: https://img.shields.io/github/license/SilasRodrigues19/Google-Search-API.svg?style=for-the-badge
[license-url]: https://github.com/SilasRodrigues19/Google-Search-API/blob/master/LICENSE
[license-url]: https://github.com/SilasRodrigues19/Google-Search-API/blob/master/LICENSE.txt
[product-screenshot]: /public/images/preview.png
[product-screenshot2]: /public/images/preview2.png
[product-screenshot3]: /public/images/preview3.png
[product-screenshot4]: /public/images/preview4.png
[product-screenshot5]: /public/images/preview5.png

<hr>
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

<br><hr>
[🔼 Back to top](#Google-Search-API)
