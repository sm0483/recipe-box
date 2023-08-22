import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOption = {
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.NEXTAUTH_GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.NEXTAUTH_GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  pages: {
    signIn: "/",
  },
  secret: process.env.NEXTAUTH_SECRET as string,
  callbacks: {
    async signIn(data: any) {
      console.log(data.user);
      return true;
    },
  },
};

const handler = NextAuth(authOption as any);
export { handler as GET, handler as POST }