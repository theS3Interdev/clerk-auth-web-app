import Link from "next/link";
import { UserButton, auth } from "@clerk/nextjs";

const Header = () => {
  const { userId } = auth();

  return (
    <nav className="mb-5 flex items-center justify-between bg-sky-800 px-6 py-4">
      <div className="flex items-center">
        <Link href="/">
          <div className="text-lg font-bold uppercase text-white">
            Clerk Auth
          </div>
        </Link>
      </div>

      <div className="flex items-center text-white">
        {!userId && (
          <>
            <Link
              href="sign-in"
              className="mr-4 text-gray-300 hover:text-white"
            >
              Sign In
            </Link>

            <Link
              href="sign-up"
              className="mr-4 text-gray-300 hover:text-white"
            >
              Sign Up
            </Link>
          </>
        )}

        {userId && (
          <>
            {/* <Link href="profile" className="text-gray-300 hover:text-white mr-4">
							Profile
						</Link> */}

            <div className="ml-auto">
              <UserButton afterSignOutUrl="/" />
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Header;
