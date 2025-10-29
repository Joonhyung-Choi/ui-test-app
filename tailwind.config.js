export default {
  content: [
    "./index.html",
    // Tailwind가 클래스를 찾을 모든 파일을 지정합니다.
    // React, Vue 등은 보통 src 폴더 아래의 모든 jsx, tsx, js, ts 파일을 포함합니다.
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
