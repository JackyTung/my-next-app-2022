import Layout from "@/components/Layout";
import Home from "@/containers/Home";

const HomePage = () => {
  return (
    <Layout title="Home page">
      <Home />
    </Layout>
  );
};

export async function getServersideProps() {
  return {
    props: {}, // will be passed to the page component as props
  };
}

export default HomePage;
