# Wallet 정책

- 주제 : 월렛 정책
- 작성 : 오픈소스개발팀
- 일자 : 2024-10-18
- 버전 : v1.0.0

| 버전 | 일자       | 변경         |
| ------- | ---------- | --------------- |
| v1.0.0  | 2024-10-18 | 최초 작성 |

<br>


## 앱 재설치하는 경우 사용할 수 있는 월렛

앱을 재설치할 때, 사용자가 사용할 수 있는 월렛 유형과 그에 따른 정책은 다음과 같습니다.

### File Wallet
- **새로운 월렛 사용**: 앱을 재설치하는 경우 사용하려는 월렛이 File Wallet이면, 반드시 새로운 월렛을 사용해야 합니다.
    - **데이터 손실 방지**: 기존 월렛 데이터는 재설치 과정에서 손실될 수 있으므로 새로운 월렛을 생성하는 것이 필수적입니다.
- **단말기 제약**: File Wallet은 1인 다단말 정책을 지원하지 않습니다.
    - **단말기 제한**: 하나의 File Wallet은 단 하나의 단말기에서만 사용할 수 있습니다.

### App Wallet
- **동일 단말기 사용**: 앱을 재설치하는 경우 사용하려는 월렛이 App Wallet이면, 같은 단말기에서만 이전 월렛을 사용할 수 있습니다.
    - **단말기 확인**: TAS는 반드시 App의 단말 정보를 알고 있어야 합니다.
- **단말기 제약**: App Wallet은 1인 다단말 정책을 지원하지 않습니다.
    - **단말기 제한**: 하나의 App Wallet은 단 하나의 단말기에서만 사용할 수 있습니다.

### Cloud Wallet
- **이전 월렛 사용 가능**: 앱을 재설치하는 경우 사용하려는 월렛이 Cloud Wallet이면, 단말 정책과 상관없이 이전 월렛을 사용할 수 있습니다.
    - **연속성 보장**: Cloud Wallet을 통해 사용자는 여러 단말기에서 동일한 월렛을 사용할 수 있습니다.
    - **편리성 강화**: 단말기 변경이나 앱 재설치 후에도 이전 월렛에 접근할 수 있어 사용자 편리성이 높아집니다.
    - **데이터 보존**: Cloud Wallet은 데이터를 클라우드에 저장하여 재설치나 단말기 변경 시에도 안전하게 데이터를 보존할 수 있습니다.

## 요약
- **File Wallet**: 앱 재설치 시 새로운 월렛 사용, 1인 1단말 정책.
- **App Wallet**: 동일 단말기에서만 이전 월렛 사용 가능, 1인 1단말 정책.
- **Cloud Wallet**: 단말 정책과 상관없이 이전 월렛 사용 가능, 1인 다단말 정책 지원.

이러한 정책을 통해 사용자는 각 월렛 유형에 따른 적절한 사용 방식을 선택할 수 있으며, 보안과 편의성을 모두 고려한 월렛 관리가 가능합니다.
