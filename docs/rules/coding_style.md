# OpenDID Code Application Guidelines

## Reference Guides
- [Oracle Java Coding Style Guide](https://www.oracle.com/java/technologies/javase/codeconventions-contents.html)
- [Google Java Style Guide](https://google.github.io/styleguide/javaguide.html)
- [NAVER Campus Hackday Java Coding Convention](https://naver.github.io/hackday-conventions-java/)

## 1. Source File Structure

Source files should be organized in the following order:

1. License/Copyright Information (if applicable)
2. Package Information
3. Import Information
4. Top-level Class

Each section should be separated by a blank line.

### Example
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

## 1.2 Naming Conventions by Type

### Identifier Types

| Type     | Convention | Example |
|----------|------------|---------|
| Package  | Use only lowercase letters and digits, preferably one word, group consecutive words together | com.raonsecure.omnione.did, com.raonsecure.didcomm.v2 |
| Import   | Write static imports in one block, separate import blocks with a blank line | import static com.raonsecure.opendid.util.DidUtil;\n\nimport com.raonsecure.opendid.dto.UserDto;\nimport com.raonsecure.opendid.dto.WalletDto; |
| Class    | UpperCamelCase, generally use nouns, express clearly with simple word combinations | class User; class UserDto; class CredentialService; class OpenApiConfiguration; |
| Interface| UpperCamelCase, generally use nouns, adjectives; other rules are the same as for Classes | interface Authenticator; interface SecretStore; |
| Method   | lowerCamelCase, generally use verbs, use plural nouns if the result is plural | run(); runFast(); generateDefaultKeyPair(); getServiceId(); userToUserDto(); |
| Constant | UPPER_SNAKE_CASE, use underscores "_" to separate words; use standard variable rules for local constants | static final int MIN_WIDTH = 4; static final Joiner COMMA_JOINER = Joiner.on(','); static final ImmutableList<String> NAMES = ImmutableList.of("Ed", "Ann"); static final Map<String, Integer> AGES = ImmutableMap.of("Ed", 35, "Ann", 32); static final SomeMutableType[] EMPTY_ARRAY = {}; |
| Variable | lowerCamelCase, use lowercase for the first word, start internal words with uppercase, use short words for clarity | static String nonFinal = "non-final"; final String nonStatic = "non-static"; bool isSuccess = true; |

### 1.3 Naming Conventions

#### API URL

- Utilize HTTP methods and do not include actions in the URL.
  - e.g. (X) POST | /create-user (O) POST | /user
- Do not include file extensions in URIs.

| HTTP Method | Prefix  | Usage |
|-------------|---------|-------|
| POST        | request | Registration, transaction initiation, creation (VC), data requests (nonce, issue profile), DH, verification, reporting loss |
| GET         | get     | Retrieval (vp profile) |
| PATCH       | update  | Transaction completion, data update |
| DELETE      | delete  | Revocation |

##### Prefixes
```java
'set' - Change specific state values based on input result
public User setUserApproveStatus(Result result)

'find' - Retrieve data
public Data findData(String data){}

'input' - Input data
public Data inputData(HashMap data){}

'update' - Modify data
public Data updateData(HashMap data){}

'delete' - Delete data
public void deleteData(String data){}

'initialize' - Initialize data or objects
public Data initializeData(String data){}

'is' - Return type is boolean
public boolean isData(String Data){}

'load' - Load data
public Data loadData(){}

'has' - Check for the presence of data
public boolean hasData(){}

'create' - Create a new object
public Account createAccount(Data data){}
```

##### Prepositions
```java
A'By'B - Perform A based on B
public void getUserByName(String name) {}

A'to'B - Change A to B
public String toString() {}
public B aToB(A a) {}

A'And'B - Perform A and B simultaneously
public void doShoutAndJump() {}

A'With'B - Perform A with B
public void findUserWithWallet(String userId) {}

A'Then'B - Perform B after A
public void doJumpThenFly() {}
```

##### Suffixes

```java
A's' - Use the suffix 's' when the result is plural
public void getMembers(){}

A'Controller' - Use the suffix 'Controller' for classes that handle HTTP requests
public class UserController {}

A'Service' - Use the suffix 'Service' for classes that handle business logic
public class UserService {}

A'Repository' - Use the suffix 'Repository' for classes that handle data access
public interface UserRepository {}

A'Config' - Use the suffix 'Config' for classes that handle application configuration
public class WebConfig {}

A'Exception' - Use the suffix 'Exception' for classes that handle exceptions
public class UserException {}

A'Utils' - Use the suffix 'Utils' for utility classes
public class DidUtils {}
```

##### Overloading

```java
// **Method overloading with the same number of parameters**
public Profile getMemberProfile (int id)
public Profile getMemberProfile (String name) 

// **Preferably declare as shown below (recommended)**
public Profile getMemberProfileById (int id)
public Profile getMemberProfileByName (String name) 
```

## 1.4 Formatting

### Indentation

- Indentation should be +4

### Parentheses

For blocks using multiple lines (e.g., if/else, try/catch/finally), you can place the closing parenthesis on a new line.

| Type | Allowed | Not Allowed |
| ---- | ------- | ------------ |
| if/else | if (isActive()) {\n    doNothing();\n} else {\n} | if (isActive()) {\n    doNothing();\n} else {} // line break needed |
| try/catch/finally | try {\n    doNothing();\n} catch(Exception ex) {\n} | try {\n    doNothing();\n} catch(Exception ex) {} // line break needed |
| In other situations, you can close parentheses without line breaks | void doNothing() {} | void doNothingElse() {\n} |

### Array Initialization Example
```java
int[] numbers = {1, 2, 3, 4, 5};
```

## 1.5 Comments

- Comments should be written for classes, methods, and important logic.
- Use JavaDoc style.

### Example
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

## 1.6 Exception Handling
Write exception messages consistently

### Example
```java
try {
    // Code that may throw an exception
} catch (SpecificException ex) {
    logger.error("Specific error occurred: {}", ex.getMessage());
    throw new CustomException("Detailed message", ex);
}
```

## 2. Applying IntelliJ Formatter

### Google Formatter
- [Google Formatter](https://github.com/google/styleguide/blob/gh-pages/intellij-java-google-style.xml)

### Naver Formatter
- [Naver Formatter](https://github.com/naver/hackday-conventions-java/blob/master/rule-config/naver-intellij-formatter.xml)

### Applying the Formatter
- Windows: File > Settings > Code Style
- macOS: Preferences > Code Style
- Click the gear icon at the top, and select Import Scheme > IntelliJ IDEA code style scheme
- Select the XML file and apply the code style globally
  - Windows: Ctrl + Alt + L
  - macOS: Cmd + Option + L

Consider implementing a workflow to automatically check code style and apply formatting during future GitHub pull requests. For instance, you can use GitHub Actions to integrate static analysis tools and formatters.
