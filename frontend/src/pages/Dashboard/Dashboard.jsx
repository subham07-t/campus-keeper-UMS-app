import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Students from "../Students/Students";
const Dashboard = () => {
  return (
    <>
      <Header />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Sidebar />
        <Students />
      </div>
    </>
  );
};

export default Dashboard;
