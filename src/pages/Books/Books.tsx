import NavBar from "../../components/NavBar";

const Books = () => {
  return (
    <>
      <NavBar />
      <div className="main__wrapper flex flex-col items-center justify-center">
        <div className="wrapper flex flex-col items-center justify-center ">
          <h1 className=" text-8xl font-extrabold">Books Section</h1>
        </div>
      </div>
    </>
  );
};

export default Books;
