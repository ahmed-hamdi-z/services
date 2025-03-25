
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Providers from "./providers";

export default function App() {
  return (
    <Providers>
      <Layout>
        <Home />
      </Layout>
    </Providers>
  );
}
