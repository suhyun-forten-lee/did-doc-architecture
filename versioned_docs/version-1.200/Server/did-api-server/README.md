API Gateway Server
==

Welcome to the API Gateway Server Repository. <br>
This repository contains the source code, documentation, and related resources for the API Gateway Server.

## Folder Structure
Overview of the major folders and documents in the project directory:

```
did-api-server
├── CHANGELOG.md
├── CLA.md
├── CODE_OF_CONDUCT.md
├── CONTRIBUTING.md
├── LICENSE
├── dependencies-license.md
├── MAINTAINERS.md
├── README.md
├── RELEASE-PROCESS.md
├── SECURITY.md
├── docs
│   └── api
│       └── APIGateway_API_ko.md
│   └── errorCode
│       └── APIGateway_ErrorCode.md
│   └── installation
│       └── OpenDID_APIGatewayServer_InstallationAndOperation_Guide.md
└── source
    └── apigateway
        ├── gradle
        ├── libs
            └── did-sdk-common-1.0.0.jar
            └── did-blockchain-sdk-server-1.0.0.jar
            └── did-core-sdk-server-1.0.0..jar
            └── did-crypto-sdk-server-1.0.0.jar
            └── did-datamodel-sdk-server-1.0.0.jar
            └── did-wallet-sdk-server-1.0.0.jar
        └── src
        └── build.gradle
        └── README.md
```

<br/>

Below is a description of each folder and file in the directory:

| Name                    | Description                                     |
| ----------------------- | ----------------------------------------------- |
| CHANGELOG.md            | Version-specific changes in the project         |
| CODE_OF_CONDUCT.md      | Code of conduct for contributors                |
| CONTRIBUTING.md         | Contribution guidelines and procedures          |
| LICENSE                 | License                                         |
| dependencies-license.md | Licenses for the project’s dependency libraries |
| MAINTAINERS.md          | Guidelines for project maintainers              |
| RELEASE-PROCESS.md      | Procedures for releasing new versions           |
| SECURITY.md             | Security policies and vulnerability reporting   |
| docs                    | Documentation                                   |
| ┖ api                   | API guide documentation                         |
| ┖ errorCode             | Error codes and troubleshooting guides          |
| ┖ installation          | Installation and setup instructions             |
| source                  | Server source code project                      |
| ┖ apigateway            | API Gateway Server source code and build files  |
|   ┖ gradle              | Gradle build configurations and scripts         |
|   ┖ libs                | External libraries and dependencies             |
|   ┖ src                 | Main source code directory                      |
|   ┖ build.gradle        | Gradle build configuration file                 |
|   ┖ README.md           | Overview and instructions for the source code   |

<br/>


## Libraries

Libraries used in this project are organized into two main categories:

1. **Open DID Libraries**: These libraries are developed by the Open DID project and are available in the [libs folder](source/apigateway/libs). They include:

   - `did-sdk-common-1.0.0.jar`
   - `did-blockchain-sdk-server-1.0.0.jar`
   - `did-core-sdk-server-1.0.0.jar`
   - `did-crypto-sdk-server-1.0.0.jar`
   - `did-datamodel-sdk-server-1.0.0.jar`
   - `did-wallet-sdk-server-1.0.0.jar`

2. **Third-Party Libraries**: These libraries are open-source dependencies managed via the [build.gradle](source/apigateway/build.gradle) file. For a detailed list of third-party libraries and their licenses, please refer to the [LICENSE-dependencies.md](LICENSE-dependencies.md) file.

## Installation And Operation Guide

For detailed instructions on installing and configuring the API Gateway Server, please refer to the guide below:
- [OpenDID API Gateway Server Installation and Operation Guide](docs/installation/OpenDID_APIGatewayServer_InstallationAndOperation_Guide.md)  

## API Reference

- **API Gateway API**: Detailed reference for the TAS Server's API endpoints and usage.
  - [API Gateway Reference](docs/api/APIGateway_API_ko.md)

## Change Log

The Change Log provides a detailed record of version-specific changes and updates. You can find it here:
- [Change Log](./CHANGELOG.md)

## OpenDID Demonstration Videos <br>
To watch our demonstration videos of the OpenDID system in action, please visit our [Demo Repository](https://github.com/OmniOneID/did-demo-server). <br>

These videos showcase key features including user registration, VC issuance, and VP submission processes.

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) and [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) for details on our code of conduct, and the process for submitting pull requests to us.

## License
[Apache 2.0](LICENSE)
