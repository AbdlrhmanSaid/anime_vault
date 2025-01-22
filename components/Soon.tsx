import Link from "next/link";
import Loading from "./Loading";
const Soon = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
      <h1 className="text-4xl font-bold text-blue-500">Soon</h1>
      <Link
        href="/"
        className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
      >
        Back To Home
      </Link>
    </div>
  );
};

export default Soon;
