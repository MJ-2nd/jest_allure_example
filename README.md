# Jest Allure Example

Jest와 Allure를 활용한 샘플 테스트 프로젝트입니다.

## 📋 개요

이 프로젝트는 Jest 테스트 프레임워크와 Allure 리포팅 시스템을 통합하여 아름답고 상세한 테스트 리포트를 생성하는 예제입니다.

## 🚀 빠른 시작

### 1. 의존성 설치

```bash
npm install
```

### 2. Allure CLI 설치 (전역)

```bash
npm install -g allure-commandline
```

또는 Java가 설치되어 있다면:

```bash
# Java 8+ 필요
java -version
```

### 3. 테스트 실행

```bash
# 기본 테스트 실행
npm test

# 테스트 실행 후 Allure 리포트 생성
npm run test:allure

# Allure 리포트 서버 시작
npm run allure:serve
```

## 📊 Allure 리포트 확인

### 방법 1: 서버 모드로 확인

```bash
npm run allure:serve
```

브라우저가 자동으로 열리며 리포트를 확인할 수 있습니다.

### 방법 2: 정적 리포트 생성

```bash
npm run allure:generate
npm run allure:open
```

## 📁 프로젝트 구조

```
jest_allure_example/
├── test/                    # 테스트 파일들
│   └── sample.test.js      # 샘플 테스트
├── allure-results/         # Allure 테스트 결과 (자동 생성)
├── allure-report/          # Allure HTML 리포트 (자동 생성)
├── coverage/               # 코드 커버리지 리포트 (자동 생성)
├── jest.config.js          # Jest 설정
├── jest.setup.js           # Jest 초기 설정
├── jest.env.js             # 환경 변수 설정
├── jest.global-setup.js    # 글로벌 설정
├── jest.global-teardown.js # 글로벌 정리
├── babel.config.js         # Babel 설정
└── package.json           # 프로젝트 의존성
```

## 🔧 주요 기능

### Allure 기능들

- **계층적 테스트 구조**: Epic, Feature, Story로 테스트 분류
- **상세한 단계별 실행**: 각 테스트 단계를 자세히 기록
- **매개변수화된 테스트**: 입력값과 예상 결과 표시
- **첨부파일**: 스크린샷, 로그 등 파일 첨부
- **카테고리별 분류**: 실패 유형별 자동 분류
- **환경 정보**: 실행 환경 상세 정보 표시
- **타임라인**: 테스트 실행 시간 분석

### 테스트 예제

1. **사용자 로그인 테스트**: 단계별 로그인 프로세스 검증
2. **계산기 기능 테스트**: 수학 연산 검증 (매개변수화된 테스트)
3. **API 응답 검증**: Mock API 응답 구조 검증
4. **에러 처리 테스트**: 예외 상황 처리 검증

## 📝 사용법

### 새로운 테스트 작성

```javascript
const allure = require('allure-js-commons');

describe('새로운 테스트 스위트', () => {
  test('새로운 테스트', async () => {
    await allure.epic('웹 애플리케이션');
    await allure.feature('사용자 관리');
    await allure.story('사용자 등록');
    await allure.severity('high');
    await allure.owner('개발팀');
    await allure.tag('회원가입', '사용자');
    
    await allure.step('사용자 정보 입력', async () => {
      // 테스트 로직
    });
    
    // 검증
    expect(result).toBe(expected);
  });
});
```

### Allure 메타데이터 추가

- `allure.epic()`: 대분류 (예: '웹 애플리케이션')
- `allure.feature()`: 기능 (예: '사용자 관리')
- `allure.story()`: 스토리 (예: '로그인')
- `allure.severity()`: 중요도 ('critical', 'high', 'normal', 'minor', 'trivial')
- `allure.owner()`: 담당자
- `allure.tag()`: 태그
- `allure.step()`: 테스트 단계
- `allure.parameter()`: 매개변수
- `allure.attachment()`: 첨부파일

## 🛠 커스터마이징

### Jest 설정 수정

`jest.config.js`에서 다음을 수정할 수 있습니다:
- 테스트 파일 패턴
- 커버리지 설정
- 타임아웃 설정
- 리포터 설정

### Allure 카테고리 수정

`jest.global-teardown.js`에서 테스트 실패 카테고리를 수정할 수 있습니다.

## 📚 참고 자료

- [Jest 공식 문서](https://jestjs.io/)
- [Allure 공식 문서](https://allurereport.org/)
- [allure-js-commons](https://www.npmjs.com/package/allure-js-commons)

## 🤝 기여하기

버그 리포트나 기능 요청은 이슈로 등록해 주세요.

## 📄 라이선스

MIT License
