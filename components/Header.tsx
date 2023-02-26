import Link from "next/link";
import { useRouter } from "next/router";
import { CartBar } from "./Cart/CartBar";

export const Header = () => {
  const router = useRouter();
  console.log(router.pathname);
  return (
    <header className="max-w-5xl mx-auto w-full flex items-center justify-between bg-gray-700 px-4">
      <nav className=" py-4 px-4 text-white flex ">
        <Link
          className={router.pathname == "/" ? "selected mr-2" : "mr-2"}
          href="/"
        >
          home
        </Link>
        <Link
          className={router.pathname == "/about" ? "selected mr-2" : "mr-2"}
          href="/about"
        >
          about
        </Link>
        <Link
          className={router.pathname == "/user" ? "selected mr-2" : "mr-2"}
          href="/user"
        >
          user
        </Link>
        <Link
          className={router.pathname == "/user/[id]" ? "selected mr-2" : "mr-2"}
          href="/user/1"
        >
          userId
        </Link>
      </nav>
      <CartBar />
    </header>
  );
};
