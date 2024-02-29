import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

export const Home = () => {
  const {
    data: catData,
    isLoading,
    isError,
    refetch,
  } = useQuery(["cat"], () => {
    return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
  });

  if (isError) {
    return <h1>Sorry, there was an error</h1>;
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <h1>
      THIS IS THE HOME PAGE <p>{catData?.fact}</p>
    </h1>
  );
};
