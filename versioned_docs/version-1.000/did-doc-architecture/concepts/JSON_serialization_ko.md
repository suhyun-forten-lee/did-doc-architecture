
# JSON 직렬화

- 주제 : JSON 직렬화
- 작성 : 오픈소스개발팀
- 일자 : 2024-10-18
- 버전 : v1.0.0

| 버전 | 일자       | 변경         |
| ------- | ---------- | --------------- |
| v1.0.0  | 2024-10-18 | 최초 작성 |

<br>

이 문서는 JSON 데이터를 일관되게 직렬화하고 정렬하기 위한 가이드를 제공합니다. 서명 및 서명 검증 시 원문을 생성하려면 Object를 JSON으로 직렬화할 때 일관된 규칙을 유지하는 것이 중요합니다.

## JSON 정렬 방법

1. **Key 알파벳 순서로 정렬**: 키가 영문과 한글인 경우, JSON 직렬화 시 알파벳 순서로 정렬해야 합니다. 일반적으로 유니코드 코드 포인트 값에 따라 정렬됩니다. 유니코드 값에 따라 영문자와 한글자는 다음 순서로 정렬됩니다.
    1. 숫자 (0-9)
    2. 영문 대문자 (A-Z)
    3. 영문 소문자 (a-z)
    4. 한글 (가-힣)

2. **공백문자 제거**: 1번의 결과값에서 모든 공백을 제거합니다.
    1. **스페이스** (space, `' '` 또는 `\u0020`)
    2. **탭** (tab, `\t` 또는 `\u0009`)
    3. **개행 문자** (newline, `\n` 또는 `\u000A`)
    4. **캐리지 리턴** (carriage return, `\r` 또는 `\u000D`)
    5. **폼 피드** (form feed, `\f` 또는 `\u000C`)

이 단계를 따르면 JSON 데이터가 일관되게 정렬되고 불필요한 공백이 제거되어 관리와 읽기가 쉬워집니다.

## 예시 코드

다음은 JSON 정렬과 공백 제거를 보여주는 예시 코드입니다:

### 자바 코드 예시

```java
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.fasterxml.jackson.databind.node.ObjectNode;

import java.io.IOException;
import java.util.Iterator;
import java.util.Map;

public class JsonExample {
    public static void main(String[] args) throws IOException {
        ObjectMapper mapper = new ObjectMapper();
        mapper.configure(SerializationFeature.ORDER_MAP_ENTRIES_BY_KEYS, true);

        // 정렬되지 않은 원본 JSON 데이터
        String jsonString = "{ \"bKey\": \"value2\", \"aKey\": \"value1\", \"한글키\": \"value4\", \"EnglishKey\": \"value3\", \"1Key\": \"value5\" }";

        // JSON 문자열을 ObjectNode로 변환
        ObjectNode jsonNodes = (ObjectNode) mapper.readTree(jsonString);

        // JSON을 문자열로 변환하고 공백 문자 제거
        String sortedJson = mapper.writeValueAsString(jsonNodes);
        String noWhitespaceJson = sortedJson.replaceAll("\\s", "");

        System.out.println("정렬된 JSON:\n" + sortedJson);
        System.out.println("공백이 제거된 JSON:\n" + noWhitespaceJson);
    }
}
```

### 정렬된 JSON 출력

```json
{
    "1Key": "value5",
    "EnglishKey": "value3",
    "aKey": "value1",
    "bKey": "value2",
    "한글키": "value4"
}
```

### 공백이 제거된 JSON 출력

```json
{"1Key":"value5","EnglishKey":"value3","aKey":"value1","bKey":"value2","한글키":"value4"}
```

위의 코드를 사용하여 JSON 데이터를 정렬하고 공백 문자를 제거할 수 있습니다. 이 방법을 통해 일관된 JSON 직렬화를 유지할 수 있습니다.
