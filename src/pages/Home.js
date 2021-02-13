import BlogList from "../components/BlogList";
import useFetch from "../library/useFetch";

const Home = () => {
  const { data, isPending, error } = useFetch("http://localhost:3001/blogs");

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {data && <BlogList blogs={data} title="Fatih Blogs" />}
    </div>
  );
};

export default Home;
