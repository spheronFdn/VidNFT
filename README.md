# VidNFT
VidNFT is a decentralized gallery for video NFTs built using the Spheron Browser SDK and Livepeer. VidNFT allows users to discover, mint, buy, and showcase their video NFTs in a user-friendly and decentralized environment.

## Installation
To run VidNFT, follow the steps below:

### Client
You can follow these steps to setup the client:
1. Install `Node 16.x` either manually or using a tool like nvm (recommended)
2. Clone this repo: https://github.com/spheronFdn/VidNFT.git
3. Go inside the `client` directory
4. Run `yarn` to install dependencies
5. Create a `.env` file in the client directory and Add the following:
  ```
  REACT_APP_CONTRACT_ADDRESS=xxxx
  REACT_APP_IPFS_PARSER_ADDRESS=xxxx
  REACT_APP_BACKEND_ADDRESS=xxxx
  # for local setup use http://localhost:8111/
  ```
6. Start the client
  ```sh
  yarn start
  ```

### Server
You can follow these steps to setup the server:

1. Install `Node 16.x` either manually or using a tool like nvm (recommended)
2. Clone this repo: https://github.com/spheronFdn/VidNFT.git
3. Go inside the `server` directory
4. Run `yarn` to install dependencies
5. Create a `.env` file in the server directory and Add the following:
  ```
  SPHERON_TOKEN=xxxx
  ```
6. Start the server
  ```sh
  yarn start
  ```
> Learn how to create an access token [here.](https://docs.spheron.network/rest-api/#creating-an-access-token)
