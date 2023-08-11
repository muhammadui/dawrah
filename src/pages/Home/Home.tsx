import NavBar from "../../components/NavBar";

const Home = () => {
  return (
    <>
      <NavBar />
      <div className="main__wrapper flex flex-col items-center justify-center">
        <div className="wrapper flex flex-col items-center justify-center ">
          <h1 className=" text-8xl font-extrabold">Daurah Online</h1>
        </div>
      </div>
    </>
  );
};

export default Home;
