
# JSON Serialization

- Subject: JSON Serialization
- Author: OpenSource Development Team
- Date: 2024-10-18
- Version: v1.0.0

| Version | Date       | Changes         |
| ------- | ---------- | --------------- |
| v1.0.0  | 2024-10-18 | Initial version |

<br>

This document provides a guide for consistently serializing and sorting JSON data. It is crucial to maintain consistent rules when serializing objects into JSON to generate the original text for signing and signature verification.

## JSON Sorting Method

1. **Sort Keys Alphabetically**: When keys are in English and Korean, they must be sorted alphabetically during JSON serialization. Generally, sorting is based on Unicode code point values. According to Unicode values, the sorting order is as follows:
    1. Numbers (0-9)
    2. Uppercase English letters (A-Z)
    3. Lowercase English letters (a-z)
    4. Korean characters (가-힣)

2. **Remove Whitespace Characters**: After achieving the result from step 1, remove all whitespace characters.
    1. **Space** (space, `' '` or `\u0020`)
    2. **Tab** (tab, `\t` or `\u0009`)
    3. **Newline** (newline, `\n` or `\u000A`)
    4. **Carriage Return** (carriage return, `\r` or `\u000D`)
    5. **Form Feed** (form feed, `\f` or `\u000C`)

By following these steps, JSON data will be consistently sorted and unnecessary whitespace removed, making it easier to manage and read.

## Example Code

Below is an example code demonstrating JSON sorting and whitespace removal:

### Java Code Example

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

        // Unsorted original JSON data
        String jsonString = "{ \"bKey\": \"value2\", \"aKey\": \"value1\", \"한글키\": \"value4\", \"EnglishKey\": \"value3\", \"1Key\": \"value5\" }";

        // Convert JSON string to ObjectNode
        ObjectNode jsonNodes = (ObjectNode) mapper.readTree(jsonString);

        // Convert JSON to string and remove whitespace characters
        String sortedJson = mapper.writeValueAsString(jsonNodes);
        String noWhitespaceJson = sortedJson.replaceAll("\\s", "");

        System.out.println("Sorted JSON:\n" + sortedJson);
        System.out.println("Whitespace Removed JSON:\n" + noWhitespaceJson);
    }
}
```

### Sorted JSON Output

```json
{
    "1Key": "value5",
    "EnglishKey": "value3",
    "aKey": "value1",
    "bKey": "value2",
    "한글키": "value4"
}
```

### Whitespace Removed JSON Output

```json
{"1Key":"value5","EnglishKey":"value3","aKey":"value1","bKey":"value2","한글키":"value4"}
```

Using the above code, you can sort JSON data and remove whitespace characters. This method ensures consistent JSON serialization.