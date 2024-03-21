import { withAuth } from "next-auth/middleware";

export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  function middleware(req) {
    console.log("🚀 ~ middleware ~ eq.nextauth.token:", req.nextauth.token);
  },
  {
    callbacks: {
      authorized: ({ token }) => {
        console.log("🚀 ~ token:", token);
        return !!token?.user;
      },
    },
  },
);

export const config = {
  matcher: ["/about-us"],
};