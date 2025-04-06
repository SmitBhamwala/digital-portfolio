import NextAuth from "next-auth";
import LinkedIn from "next-auth/providers/linkedin";

export const { handlers, signIn, signOut, auth } = NextAuth({
  trustHost: true,
  providers: [
    LinkedIn({
      authorization: {
        params: {
          scope: "openid profile email"
        }
      }
    })
  ]
});
