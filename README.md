# VidNFT
VidNFT is a decentralized gallery for video NFTs built using the Spheron Browser SDK and Livepeer. VidNFT allows users to discover, mint, buy, and showcase their video NFTs in a user-friendly and decentralized environment.

## Description
VidNFT is a platform that leverages the Spheron Browser SDK and Livepeer to provide a decentralized gallery for video NFTs. With VidNFT, users can seamlessly explore, create, and exhibit their unique video NFTs. This project was built to empower creators and collectors within the NFT space by offering a simple, secure, and user-friendly environment for video NFTs.

### Why did we build this?
VidNFT's was created to address the growing demand for a dedicated platform that caters to video-based non-fungible tokens. In a rapidly evolving NFT landscape, video NFTs have gained significant popularity. VidNFT serves as a response to this trend, aiming to provide a reliable and decentralized solution for both creators and enthusiasts.

### Technical Terminology
- **Spheron Browser SDK:** Spheron's software development kit for building decentralized applications and services.
- **Livepeer:** A decentralized video streaming and transcoding network that enhances video streaming on blockchain-based platforms.
- **NFT:** Non-Fungible Token, a digital asset that represents ownership or proof of authenticity of a unique item, often used in the context of digital art, collectibles, and more.

## Usage
1. Navigate to the VidNFT website: https://vidnft-c91f2b.spheron.app/
2. Connect your wallet using the "Connect Wallet" button.
3. Explore the gallery to discover unique video NFTs.
4. If you're an artist or content creator, Mint your video NFTs by Clicking the "Mint NFT" button.
5. Upload the video, enter the details and Click "Upload". The video will be uploaded and then minted.

## Local Installation
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

## Help
For help, discussions or any other queries: [Join our Community](https://community.spheron.network/)

## Version History
* 0.1
    * Initial Release

## License
This project is licensed under the **MIT License**. See the `LICENSE` file for details.

## Acknowledgments
- https://docs.spheron.network/sdk/browser/
- https://docs.livepeer.org/reference/livepeer-js
