# Wallet SW Archtecture
<!-- Individual documents may be merged in the future, so the table of contents is not used. -->

CA (Certified App) can implement functions for each protocol by referencing Wallet, Utility, Communication, and DataModel SDKs to provide reliable wallet functions, such as user registration, VC issuance, and VP submission.

![wallet_sw_archetecture](./images/wallet_sw_architecture.svg)


### 1. SDK Description
The above SDK structure is a relationship structure diagram between the OpenDID client's authorization app and wallet software, and the representative classes for each SDK are explained below.

- Wallet SDK
  - OpenDID Wallet SDK, and provides functions for creating, storing, and managing the WalletToken, Lock/Unlock, Key, DID Document (DID Document), and Verifiable Credential (hereinafter referred to as VC) information required for Open DID.
- Core SDK
  - OpenDID Core SDK, providing functions to generate, store, and manage the keys, DID Document, and Verifiable Credential (VC) information required for Open DID.
- Communication SDK
  - OpenDID Communication SDK, which provides a communication interface to manage HTTP requests and responses, supporting GET and POST methods with JSON payloads.
- Utility SDK
  - Using the Crypto Utility SDK, providing various encryption, 
- DataModel SDK
  - Using the DataModel SDK, defining the data model used in the app and wallet SDK.

| SDK Group          | Classes          | Features                                                       |
|---------------------|------------------|----------------------------------------------------------------|
| Wallet SDK          | WalletService        | - Processing business logic for user registration, VC issuance, and VP submission<br>- Generating Proof using Signature Value |
|                     | WalletCore        | - Generating key, DID/VC, VP <br>- sign                             |
|                     | LockManager       | - Change Wallet Type and Status                                   |
|                     | WalletToken       | - Create and verify walletToken                                     |
|                     | DBManager         | - ser information, WalletToken, CA list management                       |
| Core SDK            | KeyManager        | - User key generation, authentication, and signing                                  |
|                     | DIDManager        | - DIDDocument creation management                                       |
|                     | VCManager         | - VC Creation Management                                               |
| Communication SDK   | NetworkClient     | - CA and Wallet common communication module                                  |
| Utility SDK         | DigestUtils       | - hash common utility                                             |
|                     | MultibaseUtils    | - En/Decode Common Utility                                        |
|                     | CryptoUtils       | - Generate random values ​​and key pairs, encryption/decryption common utility                  |
| DataModel SDK       | VO Objects        | - Data formats and serialization/deserialization                              |



## 1.1 User registration Description
For detailed explanation, refer to the user registration protocol. [user-registration](./User%20Registration.md)
![wallet_sw_archetecture](./images/wallet_sw_architecture_reg_user.svg)
## 1.2 VC Issuance Description
For detailed explanation, refer to the VC issuance protocol. [VC-Issuance](./VC%20Issuance.md)
![wallet_sw_archetecture](./images/wallet_sw_architecture_issue_vc.svg)
## 1.3 VP Submission Description
lease refer to the VP Submission Protocol for detailed instructions. [Presentation-VP](./Presentation%20of%20VP.md)
![wallet_sw_archetecture](./images/wallet_sw_architecture_submit_vp.svg)
<br>
