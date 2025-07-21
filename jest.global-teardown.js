const fs = require('fs');
const path = require('path');

module.exports = async () => {
  console.log('🧹 Jest 글로벌 정리 시작');
  
  // 테스트 실행 정보 기록
  const executorInfo = {
    name: 'Jest',
    type: 'jest',
    buildOrder: Date.now(),
    buildName: `Build-${new Date().toISOString().slice(0, 10)}`,
    buildUrl: process.env.BUILD_URL || 'localhost',
    reportUrl: process.env.ALLURE_REPORT_URL || 'localhost/allure-report',
    reportName: 'Jest Allure Report'
  };
  
  const executorFilePath = path.join(__dirname, 'allure-results', 'executor.json');
  fs.writeFileSync(executorFilePath, JSON.stringify(executorInfo, null, 2));
  console.log('📄 executor.json 파일 생성됨');
  
  // 카테고리 정보 생성
  const categories = [
    {
      name: '제품 결함',
      matchedStatuses: ['failed'],
      messageRegex: '.*AssertionError.*'
    },
    {
      name: '테스트 결함',
      matchedStatuses: ['broken'],
      messageRegex: '.*Error.*'
    },
    {
      name: '무시된 테스트',
      matchedStatuses: ['skipped']
    }
  ];
  
  const categoriesFilePath = path.join(__dirname, 'allure-results', 'categories.json');
  fs.writeFileSync(categoriesFilePath, JSON.stringify(categories, null, 2));
  console.log('📄 categories.json 파일 생성됨');
  
  console.log('✅ Jest 글로벌 정리 완료');
}; 