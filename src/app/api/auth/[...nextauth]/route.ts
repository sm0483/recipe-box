import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { connect } from "@/db/mongo.db";
import User from "@/models/user.model";

connect();
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
      const googleUser = await User.findOne({ email: data.user.email });
      if (!googleUser) {
        await User.create({
          name: data.user.name,
          email: data.user.email,
          picture: data.user.image,
        });
      }
      return true;
    },
  },
};

const handler = NextAuth(authOption as any);
export { handler as GET, handler as POST }