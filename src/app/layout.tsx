import "./globals.css";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import VerticalMenu from "@/components/VerticalMenu";
import HorizontalMenu from "@/components/HorizontalMenu";
import Toast from "@/components/Toast";
import Providers from "./Providers";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import { createUser, getUserFullInfo } from "@/service/apiUser";
import { getSession } from "@auth0/nextjs-auth0";
import { type ReactNode } from "react";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Music Review",
  description: "Share your what you feel about music with others",
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const queryClient = new QueryClient();
  const session = await getSession();
  if (session?.user) {
    const userData = {
      auth0Id: session.user.sub,
      name: session.user.name,
      email: session.user.email,
    };
    await createUser(userData);
  }
  await queryClient.prefetchQuery({
    queryKey: ["user-full-info"],
    queryFn: getUserFullInfo,
  });

  return (
    <html lang="en">
      <UserProvider>
        <body>
          <Providers>
            <ReactQueryDevtools />
            <Toast />
            <HydrationBoundary state={dehydrate(queryClient)}>
              <div className="h-[100vh] sm:flex">
                <VerticalMenu />
                <HorizontalMenu />
                <div className="w-full h-[100vh] overflow-auto bg-color-white-2">
                  {children}
                </div>
              </div>
            </HydrationBoundary>
          </Providers>
          <Analytics />
        </body>
      </UserProvider>
    </html>
  );
}
