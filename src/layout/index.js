import { Outlet } from "react-router-dom";
export default function Layout({ children }) {
  return (
    <div className="min-h-full">
      {children ? children : <Outlet />}
    </div>
  );
}
