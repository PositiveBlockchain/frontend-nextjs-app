// jest.config.mjs
import nextJest from "next/jest.js";
import dotenv from "dotenv";

dotenv.config({ path: ".env.test" });

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const config = {
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],

  testEnvironment: "jest-environment-jsdom",
  testMatch: [
    "**/__tests__/**/*.spec.[jt]s?(x)",
    "**/__tests__/**/spec.[jt]s?(x)",
  ],
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config);
