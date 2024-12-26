import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <main className="relative flex justify-center items-center w-full min-h-dvh m-0 p-0">
      <Outlet />
    </main>
  );
}

export default Layout;
