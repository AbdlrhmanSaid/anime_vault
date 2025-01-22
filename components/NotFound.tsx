import Link from "next/link";
const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
      <h1 className="text-4xl font-bold text-blue-500">404</h1>
      <p className="text-lg text-gray-400 mt-2">Page Not Found</p>
      <Link
        href="/"
        className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
        onClick={() => {
          window.close();
        }}
      >
        Back To Home
      </Link>
    </div>
  );
};

export default NotFound;
