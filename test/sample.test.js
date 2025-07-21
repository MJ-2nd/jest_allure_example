// Allure 메타데이터를 위한 기본 설정
describe('Allure Jest 샘플 테스트 스위트', () => {
  beforeEach(() => {
    console.log('📍 Epic: 웹 인터페이스, Feature: 기본 기능');
  });

  test('사용자 로그인 성공 테스트', () => {
    console.log('🎯 Story: 로그인, Severity: critical, Owner: 테스트 엔지니어');
    console.log('📝 Description: 사용자가 올바른 자격 증명으로 로그인할 수 있는지 확인합니다.');
    
    // Step 1: 로그인 페이지로 이동
    console.log('Step 1: 로그인 페이지로 이동');
    console.log('Parameter - url: https://example.com/login');
    
    // Step 2: 사용자 자격 증명 입력
    console.log('Step 2: 사용자 자격 증명 입력');
    console.log('Parameter - username: testuser@example.com');
    console.log('Parameter - password: **** (masked)');
    
    // Step 3: 로그인 버튼 클릭
    console.log('Step 3: 로그인 버튼 클릭');
    
    // Step 4: 로그인 성공 확인
    console.log('Step 4: 로그인 성공 확인');
    const loginSuccess = true;
    expect(loginSuccess).toBe(true);
    console.log('✅ 로그인 성공 확인됨');
    
    console.log('📎 Attachment: 로그인 성공 스크린샷 (Mock data)');
  });

  test('계산기 기능 테스트', () => {
    console.log('🎯 Story: 계산, Severity: normal, Owner: 개발 팀');
    console.log('📝 Description: 기본 수학 연산이 올바르게 작동하는지 확인합니다.');

    const testCases = [
      { a: 2, b: 3, operation: 'add', expected: 5 },
      { a: 10, b: 4, operation: 'subtract', expected: 6 },
      { a: 3, b: 4, operation: 'multiply', expected: 12 },
      { a: 15, b: 3, operation: 'divide', expected: 5 }
    ];

    testCases.forEach(testCase => {
      console.log(`Step: ${testCase.operation} 연산 테스트 - ${testCase.a} ${testCase.operation} ${testCase.b}`);
      console.log(`Parameter - 첫 번째 숫자: ${testCase.a}`);
      console.log(`Parameter - 두 번째 숫자: ${testCase.b}`);
      console.log(`Parameter - 연산: ${testCase.operation}`);
      console.log(`Parameter - 예상 결과: ${testCase.expected}`);

      let result;
      switch (testCase.operation) {
        case 'add':
          result = testCase.a + testCase.b;
          break;
        case 'subtract':
          result = testCase.a - testCase.b;
          break;
        case 'multiply':
          result = testCase.a * testCase.b;
          break;
        case 'divide':
          result = testCase.a / testCase.b;
          break;
        default:
          throw new Error('지원하지 않는 연산입니다.');
      }

      expect(result).toBe(testCase.expected);
      console.log(`✅ ${testCase.operation} 연산 성공: ${result}`);
    });
  });

  test('API 응답 검증 테스트', () => {
    console.log('🎯 Story: API 통신, Severity: high, Owner: 백엔드 팀');
    console.log('📝 Description: API 엔드포인트가 올바른 응답을 반환하는지 확인합니다.');
    
    console.log('Step 1: API 요청 준비');
    console.log('Parameter - method: GET');
    console.log('Parameter - endpoint: /api/users');
    
    console.log('Step 2: API 요청 실행');
    // Mock API 응답
    const mockResponse = {
      status: 200,
      data: {
        users: [
          { id: 1, name: '홍길동', email: 'hong@example.com' },
          { id: 2, name: '김철수', email: 'kim@example.com' }
        ]
      }
    };
    
    console.log('📎 Attachment: API 응답');
    console.log(JSON.stringify(mockResponse, null, 2));
    
    expect(mockResponse.status).toBe(200);
    expect(mockResponse.data.users).toHaveLength(2);
    expect(mockResponse.data.users[0]).toHaveProperty('id');
    expect(mockResponse.data.users[0]).toHaveProperty('name');
    expect(mockResponse.data.users[0]).toHaveProperty('email');
    
    console.log('✅ API 응답 검증 완료');
  });

  test('에러 처리 테스트', () => {
    console.log('🎯 Story: 에러 처리, Severity: minor, Owner: QA 팀');
    console.log('📝 Description: 시스템이 예외 상황을 올바르게 처리하는지 확인합니다.');

    console.log('Step: 잘못된 입력값으로 함수 호출');
    const invalidInput = null;
    console.log('Parameter - input: null');
    
    expect(() => {
      if (invalidInput === null) {
        throw new Error('입력값이 null입니다.');
      }
    }).toThrow('입력값이 null입니다.');
    
    console.log('✅ 에러 처리 확인 완료');
  });

  afterEach(() => {
    // 각 테스트 후 정리 작업
    console.log('테스트 정리 완료');
  });
}); 