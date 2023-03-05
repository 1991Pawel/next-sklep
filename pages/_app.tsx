import { Layout } from "@/components/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import SEO from "../next-seo-config";
import { DefaultSeo } from "next-seo";
import { CartStateContextPovider } from "@/components/Cart/CartContext";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartStateContextPovider>
    <Layout>
      <DefaultSeo {...SEO} />
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </Layout>
    </CartStateContextPovider>
  );
}
