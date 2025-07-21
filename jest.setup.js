const fs = require('fs');
const path = require('path');

// Allure 결과 디렉토리 생성
const allureResultsDir = path.join(__dirname, 'allure-results');
if (!fs.existsSync(allureResultsDir)) {
  fs.mkdirSync(allureResultsDir, { recursive: true });
}

// Jest 글로벌 설정
beforeAll(() => {
  console.log('🚀 Allure Jest 테스트 시작');
});

afterAll(() => {
  console.log('✅ Allure Jest 테스트 완료');
});

// 각 테스트 파일 실행 전
beforeEach(() => {
  // 테스트 시작 시간 기록
  console.log(`테스트 시작: ${new Date().toISOString()}`);
});

// 각 테스트 파일 실행 후
afterEach(() => {
  // 테스트 종료 시간 기록
  console.log(`테스트 종료: ${new Date().toISOString()}`);
});

// Jest 매처 확장 (선택사항)
expect.extend({
  toBeValidEmail(received) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const pass = emailRegex.test(received);
    
    if (pass) {
      return {
        message: () => `expected ${received} not to be a valid email`,
        pass: true,
      };
    } else {
      return {
        message: () => `expected ${received} to be a valid email`,
        pass: false,
      };
    }
  },
});

// 글로벌 에러 핸들러
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});

process.on('uncaughtException', (error) => {
  console.error('Uncaught Exception:', error);
}); 