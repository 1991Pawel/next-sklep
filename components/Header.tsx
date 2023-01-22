import Link from "next/link"
import { useRouter } from 'next/router';


export const Header = () => {
  const router = useRouter();
  console.log(router.pathname)
    return  (
        <header className="max-w-md mx-auto w-full">
        <nav className="bg-gray-700 py-4 px-4 text-white">
       Nawigacja <br/>
       <Link className={router.pathname == "/" ? "selected" : ""} href="/">
        home
        </Link>
      <Link className={router.pathname == "/about" ? "selected" : ""} href="/about">
          about
      </Link>
      <Link className={router.pathname == "/user" ? "selected" : ""} href="/user">
          user
      </Link>
      <Link className={router.pathname == "/user/[id]" ? "selected" : ""} href="/user/1">
          userId
      </Link>
        </nav>
      </header>
    )
}