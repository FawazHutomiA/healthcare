import React from "react";
import Sidebar from "../components/Sidebar";
import Table from "../components/Table";

const Patient = () => {
  return (
    <div>
      <div className="flex flex-row bg-primary">
        {/* sidebar */}
        <Sidebar />
        {/* body */}
        <div className="flex-auto">
          <div className="flex flex-col">
            <div className="flex flex-col bg-primary h-20 items-end">
              <div className="flex my-auto mr-6">
                <svg
                  className="w-6 h-6 mr-8 mt-2 text-slate-50 cursor-pointer"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  ></path>
                </svg>
                <div className="flex flex-col items-end">
                  <div className="text-slate-50 text-sm font-bold mr-2 mt-2">
                    Dimy Technology
                  </div>
                  <div className="mr-2 text-xs text-slate-50">Dokter</div>
                </div>
                <img
                  className="h-12 w-12 rounded-full cursor-pointer"
                  src="https://assets.pikiran-rakyat.com/crop/0x0:0x0/x/photo/2021/10/31/669023813.jpg"
                  alt=""
                />
              </div>
            </div>
            {/* table */}
            <Table />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Patient;
