import { useState } from "react";
import Module1 from "./modules/Module1";
import Module2 from "./modules/Module2";
import Module3 from "./modules/Module3";

function App() {
  const [activeTab, setActiveTab] = useState("profile");

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
                  activeTab === "module4" ? "text-blue-600 border-blue-600" : ""
                }`}
                onClick={() => handleTabChange("module4")}
              >
                Module 4
              </a>
            </li>
            <li className="me-2">
              <a
                href="#"
                className={`inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 ${
                  activeTab === "module5" ? "text-blue-600 border-blue-600" : ""
                }`}
                onClick={() => handleTabChange("module5")}
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
        {activeTab === "module4" && (
          <div>
            <h2>Content for Module 4</h2>
            <p>This is the content for the fourth module.</p>
          </div>
        )}
        {activeTab === "module5" && (
          <div>
            <h2>Content for Module 5</h2>
            <p>This is the content for the fifth module.</p>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
