import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Faculties from "../Faculties";
import Profile from "../Profile";
import Students from "../Students";
const Dashboard = () => {
  return (
    <>
      <Header />
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <Sidebar />
        {/* <Students /> */}
        {/* <Faculties /> */}
        <Profile />
      </div>
    </>
  );
};

export default Dashboard;
