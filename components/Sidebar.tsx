import React from "react";

const Sidebar = () => {
  return (
    <div>
      <div className="flex flex-col bg-primary h-screen py-4 px-2 justify-between w-52">
        <div className="flex items-center justify-between text-slate-50 font-bold text-xl mb-8 px-5">
          <img src="/public/assets/logo.png" alt="" />
          <h1 className="">Hospital App</h1>
        </div>

        <div className="flex flex-col flex-auto">
          {/* sidebar items */}
          <div className="p-2 cursor-pointer hover:bg-violet-600">
            <div className="flex flex-row space-x-3">
              <svg
                className="w-6 h-6 text-slate-50"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                ></path>
              </svg>
              <h4 className="font-bold text-slate-50">Calendar</h4>
            </div>
          </div>
          <div className="p-2 cursor-pointer hover:bg-violet-600">
            <div className="flex flex-row space-x-3">
              <svg
                className="w-6 h-6 text-slate-50"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                ></path>
              </svg>
              <h4 className="font-bold text-slate-50">Flow Board</h4>
            </div>
          </div>
          <div className="p-2 cursor-pointer hover:bg-violet-600">
            <div className="flex flex-row space-x-3">
              <svg
                className="w-6 h-6 text-slate-50"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                ></path>
              </svg>
              <h4 className="font-bold text-slate-50">Recall Board</h4>
            </div>
          </div>
          <div className="p-2 cursor-pointer hover:bg-violet-600">
            <div className="flex flex-row space-x-3">
              <svg
                className="w-6 h-6 text-slate-50"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                ></path>
              </svg>
              <h4 className="font-bold text-slate-50">Messages</h4>
            </div>
          </div>
          <div className="p-2 cursor-pointer hover:bg-violet-600">
            <div className="flex flex-row space-x-3">
              <svg
                className="w-6 h-6 text-slate-50"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                ></path>
              </svg>
              <h4 className="font-bold text-slate-50">Patients / Client</h4>
            </div>
          </div>
          <div className="p-2 cursor-pointer hover:bg-violet-600">
            <div className="flex flex-row space-x-3">
              <svg
                className="w-6 h-6 text-slate-50"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                ></path>
              </svg>
              <h4 className="font-bold text-slate-50">Modules</h4>
            </div>
          </div>
          <div className="p-2 cursor-pointer hover:bg-violet-600">
            <div className="flex flex-row space-x-3">
              <svg
                className="w-6 h-6 text-slate-50"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                ></path>
              </svg>
              <h4 className="font-bold text-slate-50">Procedures</h4>
            </div>
          </div>
          <div className="p-2 cursor-pointer hover:bg-violet-100">
            <div className="flex flex-row space-x-3">
              <svg
                className="w-6 h-6 text-slate-50"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                ></path>
              </svg>
              <h4 className="font-bold text-slate-50">Administration</h4>
            </div>
          </div>
          <div className="p-2 cursor-pointer hover:bg-violet-600">
            <div className="flex flex-row space-x-3">
              <svg
                className="w-6 h-6 text-slate-50"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                ></path>
              </svg>
              <h4 className="font-bold text-slate-50">Reports</h4>
            </div>
          </div>
          <div className="p-2 cursor-pointer hover:bg-violet-600">
            <div className="flex flex-row space-x-3">
              <svg
                className="w-6 h-6 text-slate-50"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <h4 className="font-bold text-slate-50">About</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
