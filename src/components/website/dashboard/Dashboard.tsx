import { useState } from "react";
import Sidebar from "./Sidebar";
import Blogs from "./Blogs";
import Contact from "./Contact";
import Employees from "./Employees";
import Jobs from "./Jobs";
import Services from "./Services";
import Overview from "./Overview";

const Dashboard: React.FC = () => {
  const [selectedComponent, setSelectedComponent] = useState("default");

  const renderComponent = () => {
    switch (selectedComponent) {
      case "Blogs":
        return <Blogs />;
      case "Enquiry":
        return <Contact />;
      case "Employees":
        return <Employees />;
      case "Jobs":
        return <Jobs />;
      case "Services":
        return <Services />;
      case "Overview":
        return <Overview />;
      default:
        return <Overview />;
    }
  };
  return (
    <main className="grid grid-cols-10 mx-auto">
      <div className="col-span-2">
        <Sidebar
          onComponentSelect={setSelectedComponent}
          selectedComponent={selectedComponent}
        />
      </div>
      <div className="col-span-8 h-screen border bg-zinc-100 p-[2vw]">
        {renderComponent()}
      </div>
    </main>
  );
};

export default Dashboard;
