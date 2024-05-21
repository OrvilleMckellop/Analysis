import { useState } from "react";
import Module3 from "./modules/Module3";
import Module1 from "./modules/Module1";
import Module2 from "./modules/Module2";

function App() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };
  return (
    <>
      <div>
        <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
          <ul className="flex flex-wrap -mb-px">
            <li className="me-2">
              <a
                href="#"
                className={`inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 ${
                  activeTab === "profile" ? "text-blue-600 border-blue-600" : ""
                }`}
                onClick={() => handleTabChange("profile")}
              >
                Module 1
              </a>
            </li>
            <li className="me-2">
              <a
                href="#"
                className={`inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 ${
                  activeTab === "dashboard"
                    ? "text-blue-600 border-blue-600"
                    : ""
                }`}
                onClick={() => handleTabChange("dashboard")}
              >
                Module 2
              </a>
            </li>
            <li className="me-2">
              <a
                href="#"
                className={`inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 ${
                  activeTab === "settings"
                    ? "text-blue-600 border-blue-600"
                    : ""
                }`}
                onClick={() => handleTabChange("settings")}
              >
                Module 3
              </a>
            </li>
            <li className="me-2">
              <a
                href="#"
                className={`inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 ${
                  activeTab === "contacts"
                    ? "text-blue-600 border-blue-600"
                    : ""
                }`}
                onClick={() => handleTabChange("contacts")}
              >
                Module 4
              </a>
            </li>
            <li className="me-2">
              <a
                href="#"
                className={`inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 ${
                  activeTab === "contacts"
                    ? "text-blue-600 border-blue-600"
                    : ""
                }`}
                onClick={() => handleTabChange("contacts")}
              >
                Module 5
              </a>
            </li>
          </ul>
        </div>
        {/* Content for each tab */}
        {activeTab === "profile" && (
          <div>
            <Module1 />
          </div>
        )}
        {activeTab === "dashboard" && (
          <div>
            <Module2 />
          </div>
        )}
        {activeTab === "settings" && (
          <div>
            <Module3 />
          </div>
        )}
        {activeTab === "contacts" && <div>Contacts Content</div>}
      </div>
    </>
  );
}

export default App;
