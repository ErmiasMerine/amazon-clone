import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    // ...add more providers here
  ],
  SECRET:process.env.SECRET

})

//id 418165183030-s32c9btlfss38m0uk9gn0r62njk45v98.apps.googleusercontent.com
//secret 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