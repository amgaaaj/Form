import clientPromise from "@/lib/mongo/client";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},

      async authorize(credentials) {
        const { username, password, role } = credentials as any;

        const mongoClient = await clientPromise;

        const user = await mongoClient
          .db()
          .collection("users")
          .findOne({ username, password, role });

        return user;
      },
    }),
  ],

  callbacks: {
    async signIn({ user }: any) {
      if (user) {
        return true;
      }

      return false;
    },
  },

  pages: {
    signIn: "/login",
    error: "/login",
  },

  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
