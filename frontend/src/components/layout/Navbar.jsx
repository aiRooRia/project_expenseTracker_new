import Link from "next/link";
import { Fragment } from "react";

export const NavBar = ({ setShowAdd }) => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1 gap-3">
        <img src="beer.svg" alt="" width={35} />
        <Link href={"/dashboard"} className=" text-2xl">
          Dashboard
        </Link>
        <Link href={"/records"} className=" text-2xl w-[100px ]">
          Records
        </Link>
      </div>
      <div className="flex-none gap-2">
        <button
          onClick={() => {
            setShowAdd(true);
          }}
          className="btn btn-primary rounded-full"
        >
          + Record
        </button>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar "
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <Link href={"/"}>Logout</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
