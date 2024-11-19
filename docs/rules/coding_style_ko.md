# OpenDID 코드 적용 규약

## 참고 가이드
- [Oracle Java 코딩 스타일 가이드](https://www.oracle.com/java/technologies/javase/codeconventions-contents.html)
- [Google Java 스타일 가이드](https://google.github.io/styleguide/javaguide.html)
- [NAVER 캠퍼스 핵데이 Java 코딩 컨벤션](https://naver.github.io/hackday-conventions-java/)

## 1. 소스파일 구조

소스파일은 다음과 같은 순서로 구성된다.

1. 라이센스/저작권 정보 (있는 경우)
2. 패키지 정보
3. Import 정보
4. 최상위 클래스

각 정보는 공백으로 구분한다.

### 예시
```java
/* 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      <http://www.apache.org/licenses/LICENSE-2.0>
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License. 
 */
package org.omnione.did.entity;

import static org.omnione.did.util.DidUtil.generateDid;

import org.omnione.did.dto.UserDto;
import org.omnione.did.dto.WalletDto;

// Class definition
public class Tas {
    ...
}
```

## 1.2 유형별 규약

### 식별자 유형

| 유형 | 규약 | 예시 |
| ---- | ---- | ---- |
| 패키지 | 소문자와 숫자만 사용, 가급적 한 단어로 작성, 연속된 단어는 묶어서 작성 | com.raonsecure.omnione.did, com.raonsecure.didcomm.v2 |
| Import | static import를 한 블럭에 작성, import를 한 블럭에 작성, 두 블럭은 공백으로 구분 | import static com.raonsecure.opendid.util.DidUtil;\n\nimport com.raonsecure.opendid.dto.UserDto;\nimport com.raonsecure.opendid.dto.WalletDto; |
| 클래스 | UpperCamelCase, 일반적으로 명사를 사용, 간단한 단어 조합으로 명료하게 표현 | class User; class UserDto; class CredentialService; class OpenApiConfiguration; |
| 인터페이스 | UpperCamelCase, 일반적으로 명사, 형용사 사용, 이외 규칙은 Classes와 동일 | interface Authenticator; interface SecretStore; |
| 메서드 | lowerCamelCase, 일반적으로 동사를 사용, 결과가 복수일 경우 복수 명사 사용 | run(); runFast(); generateDefaultKeyPair(); getServiceId(); userToUserDto(); |
| 상수 | UPPER_SNAKE_CASE, 단어 구분은 밑줄 “_” 사용, 단 지역 상수는 일반 변수 규칙 사용 | static final int MIN_WIDTH = 4; static final Joiner COMMA_JOINER = Joiner.on(','); static final ImmutableList<String> NAMES = ImmutableList.of("Ed", "Ann"); static final Map<String, Integer> AGES = ImmutableMap.of("Ed", 35, "Ann", 32); static final SomeMutableType[] EMPTY_ARRAY = {}; |
| 변수 | lowerCamelCase, 첫 단어는 소문자 사용, 내부 단어는 대문자로 시작, 의미 파악을 위한 짧은 단어 사용 | static String nonFinal = "non-final"; final String nonStatic = "non-static"; bool isSuccess = true; |

### 1.3 네이밍 규약

#### API Url

- HTTP Method를 활용하고, Url에 행위를 작성하지 않는다.
  - ex) (X) POST | /create-user (O) POST | /user
- URI에 확장자를 포함하지 않는다.


| HTTP Method | 접두사 | 사용처 |
| ----------- | ------ | ------ |
| POST | request | 등록, 거래 개시, 생성(VC), 데이터 요청(nonce, issue profile), DH, 검증, 분실신고 |
| GET | get | 조회(vp profile) |
| PATCH | update | 거래 완료, 데이터 갱신 |
| DELETE | delete | 폐기 |

##### 접두사
```java
'set' - 입력된 결과값을 통해 특정 상태 값 변경
public User setUserApproveStatus(Result result)

'find' - 데이터 조회
public Data findData(String data){}

'input' - 데이터 입력
public Data inputData(HashMap data){}

'update' - 데이터를 변경
public Data updateData(HashMap data){}

'delete' - 데이터 삭제
public void deleteData(String data){}

'initialize' - 데이터, 객체를 초기화 할 경우
public Data initializeData(String data){}

'is' - 반환 값 타입이 boolean 인 경우
public boolean isData(String Data){}

'load' - 데이터를 불러오는 경우
public Data loadData(){}

'has' - 데이터 존재 유무를 확인
public boolean hasData(){}

'create' - 새로운 객체를 생성하는 경우
public Account createAccount(Data data){}
```

##### 전치사
```java
A'By'B - B를 기준으로 A를 수행
public void getUserByName(String name) {}

A'to'B - A를 B로 변경
public String toString() {}
public B aToB(A a) {}

A'And'B - A 와 B를 동시에 수행
public void doShoutAndJump() {}

A'With'B - A 와 B를 수행
public void findUserWithWallet(String userId) {}

A'Then'B - A 수행 후 B를 수행
public void doJumpThenFly() {}
```


##### 접미사
```java
A's' - 결과가 복수 일 경우 접미사 's' 사용
public void getMembers(){}

A'Controller' - HTTP 요청을 처리하는 클래스는 접미사 'Controller' 사용
public class UserController {}

A'Service' - 비지니스 로직을 처리하는 클래스 접미사 'Service' 사용
public class UserService {}

A'Repository' - 데이터 엑세스를 담당하는 클래스는 접미사 'Repository' 사용
public interface UserRepository {}

A'Config' - 애플리케이션의 설정을 처리하는 클래스는 접미사 'Config' 사용
public class WebConfig {}

A'Exception' - 예외를 처리하는 클래스는 접미사 'Exception' 사용
public class UserException {}

A'Utils' - 유틸 클래는 접미사 'Utils' 사용
public class DidUtils {}
```


##### 오버로딩

```java
// **매개변수 개수가 같은 메서드 오버로딩**
public Profile getMemberProfile (int id)
public Profile getMemberProfile (String name) 

// **가급적 아래와 같이 구분하여 선언 (권장)**
public Profile getMemberProfileById (int id)
public Profile getMemberProfileByName (String name) 
```

## 1.4 Formatting

### 들여쓰기

- 들여쓰기는 +4

### 괄호

여러 블록을 사용하는 문(if/else, try/catch/finally)일 경우 줄바꿈을 한 후 괄호를 닫을 수 있음

| 종류 | 가능 | 불가능 |
| ---- | ---- | ------- |
| if/else | if (isActive()) {\n    doNothing();\n} else {\n} | if (isActive()) {\n    doNothing();\n} else {} // 줄바꿈 필요 |
| try/catch/finally | try {\n    doNothing();\n} catch(Exception ex) {\n} | try {\n    doNothing();\n} catch(Exception ex) {} // 줄바꿈 필요 |
| 그 외의 상황에서는 줄바꿈 없이 괄호를 닫을 수 있음 | void doNothing() {} | void doNothingElse() {\n} |

### 배열 초기화 예시
```java
int[] numbers = {1, 2, 3, 4, 5};
```

## 1.5 주석

- 주석은 클래스, 메소드, 중요한 로직에 작성
- JavaDoc 스타일 사용

### 예시
```java
/**
 * This class represents a User in the system.
 */
public class User {
    // User's name
    private String name;

    /**
     * Retrieves the name of the user.
     * 
     * @return the name of the user
     */
    public String getName() {
        return name;
    }
}
```

## 1.6 예외 처리
예외 메시지를 일관되게 작성

### 예시
```java
try {
    // Code that may throw an exception
} catch (SpecificException ex) {
    logger.error("Specific error occurred: {}", ex.getMessage());
    throw new CustomException("Detailed message", ex);
}
```

## 2. IntelliJ 포멧터 적용방법

### 구글 포멧터
- [구글 포멧터](https://github.com/google/styleguide/blob/gh-pages/intellij-java-google-style.xml)

### 네이버 포멧터
- [네이버 포멧터](https://github.com/naver/hackday-conventions-java/blob/master/rule-config/naver-intellij-formatter.xml)

### 포멧터 적용 방법
- Windows : File > Settings > Code Style
- macOS : preferences -> code style
- 상단의 톱니바퀴 모양을 누르고, Import Scheme > IntelliJ IDEA code style scheme을 선택
- xml을 선택한 후 코드 스타일 전역 적용
  - Windows : Ctrl + Alt+ L
  - macOS : Cmd + Option + L

향후 GitHub pull request 시 workflow를 통해 자동으로 코드 스타일을 체크하고 포맷을 적용하는 방법도 검토하세요. 예를 들어, GitHub Actions를 사용하여 정적 분석 도구와 포맷터를 함께 사용할 수 있습니다.