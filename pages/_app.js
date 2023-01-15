import "@/styles/globals.css";
import { ThemeProvider } from "next-theme";
import Layout from "../Layout";
export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
