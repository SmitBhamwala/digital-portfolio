import NextAuth from "next-auth";
import LinkedIn from "next-auth/providers/linkedin";

export const { handlers, signIn, signOut, auth } = NextAuth({
  trustHost: true,
  providers: [
    LinkedIn({
      clientId: process.env.AUTH_LINKEDIN_ID || "",
      clientSecret: process.env.AUTH_LINKEDIN_SECRET || "",
      authorization: {
        params: {
          scope: "openid profile email"
        }
      }
    })
  ],
  secret: process.env.AUTH_SECRET
});
