/** @type {import('jest').Config} */
module.exports = {
  // 테스트 환경 설정
  testEnvironment: 'jest-allure2-reporter/environment-node',
  
  // 테스트 파일 패턴
  testMatch: [
    '<rootDir>/test/**/*.test.js',
    '<rootDir>/tests/**/*.test.js',
    '<rootDir>/**/__tests__/**/*.js'
  ],
  
  // 커버리지 설정
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: [
    'text',
    'lcov',
    'html'
  ],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/coverage/',
    '/allure-results/',
    '/allure-report/'
  ],
  
  // 설정 파일들
  setupFilesAfterEnv: [
    '<rootDir>/jest.setup.js'
  ],
  
  // 모듈 경로 설정
  moduleDirectories: ['node_modules', '<rootDir>'],
  
  // 변환 설정 (ES6 모듈 지원)
  transform: {
    '^.+\\.js$': 'babel-jest'
  },
  
  // 테스트 결과 리포터 설정
  reporters: [
    'default',
    'jest-allure2-reporter'
  ],
  
  // Allure 환경 설정
  globalSetup: '<rootDir>/jest.global-setup.js',
  globalTeardown: '<rootDir>/jest.global-teardown.js',
  
  // 테스트 타임아웃 설정 (30초)
  testTimeout: 30000,
  
  // 상세한 출력 설정
  verbose: true,
  
  // 병렬 테스트 실행 설정
  maxWorkers: '50%',
  
  // 테스트 실행 전 정리할 디렉토리
  clearMocks: true,
  restoreMocks: true,
  
  // Jest가 무시할 패턴
  testPathIgnorePatterns: [
    '/node_modules/',
    '/allure-results/',
    '/allure-report/',
    '/coverage/'
  ],
  
  // 환경 변수 설정
  setupFiles: ['<rootDir>/jest.env.js']
}; 