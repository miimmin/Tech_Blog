# DDL DML DCL TCL

## 🐣 DDL DML DCL TCL 이 뭔가요?

:::tip
[SQL](./SQL.md) Commands  
[SQL](./SQL.md) 명령어의 구성요소

1. DDL: 데이터 정의어  ex. 데이터베이스 스키마 관리
2. DML: 데이터 조작어 ex. 데이터 CRUD
3. DCL: 데이터 제어어 ex. 객체 권한, DB 접근 권한, 트랜잭션 명시 등
4. TCL: 트랜잭션 제어어
:::
---
---

### 🐣 DDL??
:::tip
Data Definition Language, 데이터 정의어

- CREATE / ALTER / DROP / RENAME / TRUNCATE
- Auto-Commit
:::

- 데이터 전체의 골격을 결정
- SCHEMA, DOMAIN, TABLE, VIEW, INDEX를 정의하거나 변경 또는 삭제할 때 사용

| 명령어 | 내용 |
| --- | --- |
| CREATE | 테이블 생성 |
| ALTER | 테이블의 구조를 수정 |
| DROP | 테이블 삭제 |
| RENAME | 테이블 이름 변경 |
| TRUNCATE | 테이블 초기화 |
- Auto-Commit
    - DDL은 명령어를 입력하는 순간 작업이 즉시반영(Auto-Commit)됨

### 🐣DML??

:::tip

Data Manipulation Language, 데이터 조작어

- CRUD: SELECT / INSERT / UPDATE / DELETE
- Auto-Commit 되지 않는다

:::

- 데이터베이스 내부의 데이터 관리 (CRUD)

| 명령어 | 내용 |
| --- | --- |
| SELECT | 데이터베이스에서 데이터를 검색 |
| INSERT | 테이블에 데이터를 추가 |
| UPDATE | 테이블 내에 존재하는 데이터를 수정 |
| DELETE | 테이블에서 데이터를 삭제 |
- Auto-Commit 되지않는다
    - → ROLLBACK 으로 되돌릴 수있다
    - ###### 왜 자동커밋 되지 않아?
        - DML은 `Target 테이블`을 `메모리 버퍼` 위에 올려두고 작업 → 실시간으로 테이블에 반영되지 않는다
    - ###### 그럼 어떻게 반영해?
        - Commit 명령어를 통해 Transaction 을 종료해야 해당 변경사항이 테이블에 반영됨



### 🐣 DCL??

:::tip
Data Control Language, 데이터 제어어

- GRANT / REVOKE / COMMIT / ROLLBACK  
- 접근제어 → 보안, 무결성, 회복, 병행제어
:::

- 데이터에 대한 접근 제어

| 명령어 | 내용 |
| --- | --- |
| GRANT | 특정 사용자에게 특정 작업의 권한을 부여 |
| REVOKE | 특정 사용자의 특정 작업권한을 박탈, 회수 |
| COMMIT | 트랜잭션의 작업을 정상처리 |
| ROLLBACK | 트랜잭션의 작업을 취소, 원복 |
- 다음의 순기능 수행
    - 악성사용자로부터 데이터를 보호하기 위한 데이터 보안
    - 데이터 무결성 유지
    - 시스템 장애에 대비한 회복과 병행제어 수행
- DCL의 COMMIT과 ROLLBACK 만 떼어내서 TCL이라 표현함
- ###### 권한 (ROLE)
| 권한 | 내용 |
| --- | --- |
| CONNECT | DB 접속 권한 |
| RESOURCE | 테이블이라든지 인덱스라든지 생성할 수 있는 권한 |
| CREATE VIEW | 뷰 생성 권한 |
| DBA | 모든 권한(관리자) |

### 🐣 TCL??

:::tip
Transaction Control Language, 트랜잭션 제어어

- COMMIT / ROLLBACK / SAVEPOINT
- 트랜잭션 제어
:::

- 논리적인 작업 단위를 묶어 DML에 의해 조작된 결과를 `트랜잭션` 별로 제어

| COMMIT | 트랜잭션의 작업을 정상처리 |
| --- | --- |
| ROLLBACK | 트랜잭션의 작업을 취소, 원복 |
| SAVEPOINT | 현재의 트랜잭션을 작게 분할 |

- ###### ROLLBACK
    - 받았던 자원과 Lock을 모두 반환하고 재시작 또는 폐기

- ###### SAVEPOINT
    - ROLLBACK TO SAVEPOINT
        - 지정한 곳까지만 롤백
    - COMMIT 하면, COMMIT 이전에 만든 SAVEPOINT 모두 소멸
    - 여러 SAVEPOINT 생성가능
