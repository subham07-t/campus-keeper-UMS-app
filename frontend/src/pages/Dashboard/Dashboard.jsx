import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Faculties from "../Faculties";
import Profile from "../Profile";
import Students from "../Students";
const Dashboard = () => {
  return (
    <>
      {/* <Header /> */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          height: "100vh",
        }}
      >
        <Sidebar />

        <div style={{ width: "81.5%" }}>
          <Header />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
