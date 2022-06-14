import React from "react";

const Table = () => {
  const people = [
    {
      name: "Fawaz Hutomi A",
      sex: "Male",
      address: "Bandung",
    },
    {
      name: "Fawaz Hutomi A",
      sex: "Male",
      address: "Bandung",
    },
    {
      name: "Fawaz Hutomi A",
      sex: "Male",
      address: "Bandung",
    },
    {
      name: "Fawaz Hutomi A",
      sex: "Male",
      address: "Bandung",
    },
  ];
  return (
    <div>
      <div className="min-h-screen rounded-tl-3xl flex-1 p-7 bg-[#FFFFFF]">
        <div className="text-2xl mb-1">Facilities</div>
        <button className="bg-primary px-6 py-1 flex text-white rounded hover:bg-opacity-80 text-sm mb-8">
          <span className="pr-1">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              ></path>
            </svg>
          </span>
          Add Patient
        </button>
        <div className="flex flex-col">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-primary">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                      >
                        Sex
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                      >
                        Address
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                      >
                        Detail
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {people.map((person) => (
                      <tr key={person.name}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                              <img
                                className="h-10 w-10 rounded-full"
                                src="https://assets.pikiran-rakyat.com/crop/0x0:0x0/x/photo/2021/10/31/669023813.jpg"
                                alt=""
                              />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">
                                {person.name}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {person.sex}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {person.address}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <a
                            href="#"
                            className="hover:bg-[#ece7f3] border border-none rounded-xl bg-[#F9F5FF] text-[#6941C6]"
                          >
                            Detail
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
