import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import { createGuest, getGuest } from "./data-service";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [GitHub],
  callbacks: {
    authorized({ auth, request }) {
      return !!auth?.user;
    },
    async signIn({ user, account, profile }) {
      try {
        const exsistingGuest = await getGuest(user.email);

        if (!exsistingGuest) {
          createGuest({
            email: user.email,
            fullname: user.name,
          });
        }

        return true;
      } catch {
        return false;
      }
    },

    async session({ session, user }) {
      const guest = await getGuest(user.email);
      session.user.guestID = guest.id;
      return session;
    },
  },
  pages: {
    signIn: "/login",
    signOut: "/",
  },
});
