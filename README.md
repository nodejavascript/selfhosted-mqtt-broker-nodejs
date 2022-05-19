<div id="top"></div>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/nodejavascript/selfhosted-mqtt-broker-nodejs">
    <img src="https://avatars.githubusercontent.com/u/105805523?v=4" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">selfhosted-mqtt-broker-nodejs</h3>

  <p align="center">
    Simple MQTT broker written in nodejs, local persistence, minimal stdout with docker.
    <br />
    <a href="https://github.com/nodejavascript/selfhosted-mqtt-broker-nodejs"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://nodejavascript.com/demo-coming-soon">View Demo</a>
    ·
    <a href="https://github.com/nodejavascript/selfhosted-mqtt-broker-nodejs/issues">Report Bug</a>
    ·
    <a href="https://github.com/nodejavascript/selfhosted-mqtt-broker-nodejs/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
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
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

![repo-screen-shot](https://nodejavascript.com/screenshot-coming-soon/)

### Built With

* [express](https://npmjs.com/package/express)
* [esm](https://npmjs.com/package/esm)
* [aedes](https://npmjs.com/package/aedes)
* [level](https://www.npmjs.com/package/level)

<!-- GETTING STARTED -->
## Getting Started
Use this to spin up a dockerized MQTT broker. I use it to connect various [Tasmota](https://tasmota.github.io/install/) devices and [kpetrem/mqtt-exporter](https://hub.docker.com/r/kpetrem/mqtt-exporter)


1. See [package.json](https://github.com/nodejavascript/selfhosted-mqtt-broker-nodejs/blob/main/package.json) for dependencies.
2. Clone the repo
   ```sh
   git clone https://github.com/nodejavascript/selfhosted-mqtt-broker-nodejs.git
   ```
3. Change directory, make an `.env` file
   ```sh
   cd selfhosted-mqtt-broker-nodejs && touch .env
   ```
4. Edit the `.env` file and enter credentials
   ```sh
    NODE_ENV=local
    AEDES_PORT=1883
    AEDES_BROKER_NAME=my-broker-name
    AEDES_USERNAME=common-username
    AEDES_PASSWORD=iot-common-password
   ```
5. Create docker container
     ```sh
     npm run docker
     ```
     *if success, look for docker container named `selfhosted-mqtt-broker-nodejs`*

6. Run locally
   ```sh
   npm i && npm start
   ```

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

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

* LinkedIn - [@nodejavascript](https://linkedin.com/in/nodejavascript)
* Homepage - [nodejavascript](https://nodejavascript.com)
* Youtube - [nodejavascript](https://www.youtube.com/channel/UCZFJHjd0c79xyj2SpB8UbJg)
* Twitter - [@nodejavascript](https://twitter.com/nodejavascript)
* Email - [github@nodejavascript.com](mailto:github@nodejavascript.com)

<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* Forked my README.md from [github.com/othneildrew/Best-README-Template](https://github.com/othneildrew/Best-README-Template) - thank you!

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/nodejavascript/selfhosted-mqtt-broker-nodejs.svg?style=for-the-badge
[contributors-url]: https://github.com/nodejavascript/selfhosted-mqtt-broker-nodejs/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/nodejavascript/selfhosted-mqtt-broker-nodejs.svg?style=for-the-badge
[forks-url]: https://github.com/nodejavascript/selfhosted-mqtt-broker-nodejs/network/members
[stars-shield]: https://img.shields.io/github/stars/nodejavascript/selfhosted-mqtt-broker-nodejs.svg?style=for-the-badge
[stars-url]: https://github.com/nodejavascript/selfhosted-mqtt-broker-nodejs/stargazers
[issues-shield]: https://img.shields.io/github/issues/nodejavascript/selfhosted-mqtt-broker-nodejs.svg?style=for-the-badge
[issues-url]: https://github.com/nodejavascript/selfhosted-mqtt-broker-nodejs/issues
[license-shield]: https://img.shields.io/github/license/nodejavascript/selfhosted-mqtt-broker-nodejs.svg?style=for-the-badge
[license-url]: https://github.com/nodejavascript/selfhosted-mqtt-broker-nodejs/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/nodejavascript
