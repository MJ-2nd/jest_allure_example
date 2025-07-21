const fs = require('fs');
const path = require('path');

module.exports = async () => {
  console.log('🔧 Jest 글로벌 설정 시작');
  
  // 결과 디렉토리들 생성
  const dirs = ['allure-results', 'allure-report', 'coverage'];
  
  dirs.forEach(dir => {
    const dirPath = path.join(__dirname, dir);
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
      console.log(`📁 ${dir} 디렉토리 생성됨`);
    }
  });
  
  // 환경 정보 파일 생성
  const environmentInfo = {
    'Node.js 버전': process.version,
    '운영체제': `${process.platform} ${process.arch}`,
    '메모리': `${Math.round(process.memoryUsage().heapTotal / 1024 / 1024)}MB`,
    '테스트 시작 시간': new Date().toISOString(),
    '프로젝트': 'Jest Allure Example',
    '환경': process.env.NODE_ENV || 'development'
  };
  
  const envFilePath = path.join(__dirname, 'allure-results', 'environment.properties');
  const envContent = Object.entries(environmentInfo)
    .map(([key, value]) => `${key}=${value}`)
    .join('\n');
  
  fs.writeFileSync(envFilePath, envContent);
  console.log('📄 environment.properties 파일 생성됨');
  
  console.log('✅ Jest 글로벌 설정 완료');
}; 