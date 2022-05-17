import Header from "template/header/Header";
import Sidebar from "template/Sidebar/index";
import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "antd/dist/antd.css";
import "./css/style.scss";
import "./css/template-styles/index.css";
// or 'antd/dist/antd.less'
import "react-toastify/dist/ReactToastify.css";

import ManageAppViews from "views";
import { ToastContainer } from "react-toastify";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Router>
      <ToastContainer />

      <div className="app">
        <div className="flex h-screen overflow-hidden">
          <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            <main>
              <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
                <ManageAppViews />
              </div>
            </main>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
