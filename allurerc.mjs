import { defineConfig } from "allure";

export default defineConfig({
  name: "Jest Allure Example Report",
  output: "./allure-report",
  plugins: {
    awesome: {
      options: {
        singleFile: false,
        reportLanguage: "ko",
        reportName: "Jest 테스트 리포트",
        open: false
      },
    },
  },
}); 