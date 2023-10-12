// import { connect } from "@/dbConfig/dbConfig";
// import User from "@/models/User";
// import Employee from "@/models/Employee";
// import NextAuth from "next-auth/next";
// import GoogleProvider from "next-auth/providers/google";
// import CredentialsProvider from "next-auth/providers/credentials";
// import bcrypt from "bcryptjs";

// export const authOptions = {
//   providers: [
//     CredentialsProvider({
//       name: "credentials",
//       credentials: {},

//       async authorize(credentials) {
//         const { email, pass,type } = credentials;
//         await connect();
//             try {
         
//         if(type=='customer'){
          
//           const user = await User.findOne({email})
//           console.log(user);
//               if (!user) {
//             return null;
//           } 
//           const passwordsMatch = await bcrypt.compare(pass, user.pass)
//               return passwordsMatch ? user : null;
//           }
//         else{
          
//           const user = await Employee.findOne({email})
//           console.log(user);
//               if (!user) {
//             return null;
//           } 
//           const passwordsMatch = await bcrypt.compare(pass, user.pass)
//               return passwordsMatch ? user : null;
//           }
//         } catch (error) {
//           console.log("Error: ", error);
//         }
//       },
//     }),
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//       callbackUrl: '/',
//     }),
//   ],

//   callbacks: {
//     async signIn({ user, account }) {
//       if (account.provider === "google") {
//         const { name, email } = user;
//         try {
//           await connect();
//           const userExists = await User.findOne({ email });

//           if (!userExists) {
//             const res = await fetch("/api/users/signup", {
//               method: "POST",
//               headers: {
//                 "Content-Type": "application/json",
//               },
//               body: JSON.stringify({
//                 username:name,
//                 email,
//                 pass:" "
//               }),
//             });

//             if (res.ok) {
//               return user;
//             }
//           }
//         } catch (error) {
//           console.log(error);
//         }
//       }

//       return user;
//     },
//     // // start
//     // session: async ({ session, user }) => {
//     //   session.user = {
//     //     ...session.user,
//     //     name: user.username,
//     //     pass: user.pass,
//     //   };
//     //   return session;
//     // },
//     // end
//     redirect: ({ baseUrl }) => {
//       return baseUrl + "/";
//     },
//   },
// };

// const handler = NextAuth(authOptions);

// export { handler as GET, handler as POST };

import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/User";

import Employee from "@/models/Employee";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},

      async authorize(credentials) {
        const { email, pass, type } = credentials;
        await connect();
        try {
          if (type === "customer") {
            const user = await User.findOne({ email });
            console.log(user);
            if (!user) {
              return null;
            }
            const passwordsMatch = await bcrypt.compare(pass, user.pass);
            return passwordsMatch ? user : null;
          } else {
            const user = await Employee.findOne({ email });
            if (!user) {
              return null;
            }
            const passwordsMatch = await bcrypt.compare(pass, user.pass);
            return passwordsMatch ? user : null;
          }
        } catch (error) {
          console.log("Error:", error);
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackUrl: "/",
    }),
  ],

  callbacks: {
    async signIn({ user, account }) {
      if (account.provider === "google") {
        const { name, email } = user;
        try {
          await connect();
          const userExists = await User.findOne({ email });

          if (!userExists) {
            const res = await fetch("/api/users/signup", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                username: name,
                email,
                pass: "",
              }),
            });

            if (res.ok) {
              return user;
            }
          }
        } catch (error) {
          console.log(error);
        }
      }

      return user;
    },
    session: async ({ session})=> { 
           
      const user = await User.findOne({ email: session.user.email }) || await Employee.findOne({email:session.user.email});
      session.user = user;

      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
