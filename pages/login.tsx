import { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/solid";

const language = [
  { id: 1, name: "Default - English (Standard)" },
  { id: 2, name: "Indonesia" },
  { id: 3, name: "China" },
  { id: 4, name: "Arabic" },
];

const login = () => {
  const [selected, setSelected] = useState(language[0]);
  const [query, setQuery] = useState("");

  const filteredLanguage =
    query === ""
      ? language
      : language.filter((language) =>
          language.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );
  return (
    <section className="container-fluid lg:max-h-full">
      <div className="container-fluid">
        <div className="lg:flex lg:flex-wrap">
          <div className="lg:w-1/2 lg:px-20 px-10 md:px-0">
            <div className="lg:px-4 2xl">
              <div className="text-center">
                <img
                  className="mx-auto mt-3"
                  src="../public/assets/Logomark.png"
                  alt="logo"
                />
                <h4 className="text-base text-[#667085] mt-1 mb-8">
                  The most popular open source Electronic <br></br> Health
                  Record and Medical Practice <br></br> Management solution.{" "}
                  <br></br>
                  <br></br>
                  <span className="text-sm">
                    Acknowledgement, Licensing, Certification
                  </span>
                </h4>
              </div>
              <form>
                <div className="mb-4">
                  <span className="text-[#344054]">Email</span>
                  <input
                    type="text"
                    className="form-control block w-full px-3 py-1.5 mt-2 text-base font-normal text-[#344054] bg-white bg-clip-padding border border-solid border-gray-300 rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-[#7F56D9] focus:outline-none"
                    id="exampleFormControlInput1"
                    placeholder="Enter your mail"
                  />
                </div>
                <div className="mb-4">
                  <span className="text-[#344054]">Password</span>
                  <input
                    type="password"
                    className="form-control block w-full px-3 py-1.5 mt-2 text-base font-normal text-[#344054] bg-white bg-clip-padding border border-solid border-gray-300 rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-[#7F56D9] focus:outline-none"
                    id="exampleFormControlInput1"
                    placeholder="Password"
                  />
                </div>
                <div>
                  <span className="text-[#344054]">Language</span>
                  <Combobox value={selected} onChange={setSelected}>
                    <div className="relative mt-2 ">
                      <div className="relative w-full px-3 py-1.5 cursor-default overflow-hidden bg-white text-left border border-solid rounded-lg focus:outline-none sm:text-sm transition ease-in-out m-0 focus:bg-white focus:border-[#7F56D9]">
                        <Combobox.Input
                          className="w-full focus:outline-none border-none p-1.5 text-sm leading-5 text-[#344054]"
                          displayValue={(language) => language.name}
                          onChange={(event) => setQuery(event.target.value)}
                        />
                        <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                          <ChevronDownIcon
                            className="h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                        </Combobox.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                        afterLeave={() => setQuery("")}
                      >
                        <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg focus:outline-none sm:text-sm">
                          {filteredLanguage.length === 0 && query !== "" ? (
                            <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                              Nothing found.
                            </div>
                          ) : (
                            filteredLanguage.map((language) => (
                              <Combobox.Option
                                key={language.id}
                                className={({ active }) =>
                                  `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                    active
                                      ? "bg-[#7F56D9] text-white"
                                      : "text-gray-900"
                                  }`
                                }
                                value={language}
                              >
                                {({ selected, active }) => (
                                  <>
                                    <span
                                      className={`block truncate ${
                                        selected ? "font-medium" : "font-normal"
                                      }`}
                                    >
                                      {language.name}
                                    </span>
                                    {selected ? (
                                      <span
                                        className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                          active
                                            ? "text-white"
                                            : "text-[#7F56D9]"
                                        }`}
                                      >
                                        <CheckIcon
                                          className="h-5 w-5"
                                          aria-hidden="true"
                                        />
                                      </span>
                                    ) : null}
                                  </>
                                )}
                              </Combobox.Option>
                            ))
                          )}
                        </Combobox.Options>
                      </Transition>
                    </div>
                  </Combobox>
                </div>
                <div className="text-center pt-1 mt-8 mb-12 pb-1">
                  <button
                    className="inline-block px-6 py-3 text-white bg-[#7F56D9] font-medium text-sm leading-tight uppercase rounded-lg shadow-md hover:opacity-80 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                    type="button"
                  >
                    Sign in
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="lg:w-1/2 flex items-center bg-[url('../public/assets/login.png')] h-screen hidden lg:block ">
            <div className="text-white px-4 py-6 md:p-12 md:mx-6"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default login;
