const config = {
  apiBaseUrl:
    process.env.NEXT_PUBLIC_API_BASE_URL ||
    (process.env.NODE_ENV === "production" ? "" : "http://localhost:3001"),
  nextAuthUrl: process.env.NEXTAUTH_URL || "http://localhost:3000",
};

export default config;

