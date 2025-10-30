export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
  files: [],
  references: [
    {
      path: "./tsconfig.app.json",
    },
    {
      path: "./tsconfig.node.json",
    },
  ],
  compilerOptions: {
    baseUrl: ".",
    paths: {
      "@/*": ["./src/*"],
    },
  },
};
