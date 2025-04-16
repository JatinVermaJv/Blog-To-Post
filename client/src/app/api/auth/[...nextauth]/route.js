import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      if (account.provider === 'google') {
        try {
          // Make the request to our backend API directly using fetch
          const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/google`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: profile.email,
              name: profile.name,
              googleId: account.id_token,
            }),
          });

          if (!response.ok) {
            throw new Error('Failed to authenticate with backend');
          }

          const data = await response.json();
          
          // Store the backend token and user data
          user.backendToken = data.token;
          user.backendUser = data.user;
          
          return true;
        } catch (error) {
          console.error('Backend authentication failed:', error);
          return false;
        }
      }
      return true;
    },
    async jwt({ token, user, account }) {
      // Initial sign in
      if (account && user) {
        return {
          ...token,
          backendToken: user.backendToken,
          backendUser: user.backendUser,
        };
      }
      return token;
    },
    async session({ session, token }) {
      // Send properties to the client
      session.backendToken = token.backendToken;
      session.backendUser = token.backendUser;
      return session;
    },
  },
  pages: {
    signIn: '/auth/signin',
    error: '/auth/error', // Add custom error page
  },
});

export { handler as GET, handler as POST }; 