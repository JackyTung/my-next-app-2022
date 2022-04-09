import Layout from "@/components/Layout";
import Home from "@/containers/Home";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchProfile } from "@/redux/profile/slice";
import useIsMounted from "@/hooks/useIsMounted";

const HomePage = () => {
  const dispatch = useDispatch();
  const isMounted = useIsMounted();
  useEffect(() => {
    if (isMounted) {
      dispatch(fetchProfile({ userName: "JackyTung" }));
    }
  }, [isMounted]);

  return (
    <Layout title="Home page">
      <Home />
    </Layout>
  );
};

export default HomePage;
