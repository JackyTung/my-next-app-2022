import Layout from "@/components/Layout";
import Home from "@/containers/Home";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchProfile } from "@/redux/profile/slice";

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProfile({ userName: "JackyTung" }));
  }, []);

  return (
    <Layout title="Home page">
      <Home />
    </Layout>
  );
};

export default HomePage;
