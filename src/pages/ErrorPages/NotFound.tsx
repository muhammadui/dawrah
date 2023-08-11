import { NavLink } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-semibold mb-4">404 - Page Not Found</h1>
      <p className="text-gray-600">
        The page you are looking for doesn't exist.
      </p>
      <NavLink
        to={"/"}
        className="mt-8 px-4 py-2 bg-neutral-800 text-white rounded hover:bg-neutral-950"
      >
        Back to Home
      </NavLink>
    </div>
  );
};

export default NotFound;
