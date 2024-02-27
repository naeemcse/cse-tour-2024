"use client";
import React from "react";
import { useEffect, useState } from "react";

const page = () => {
  const [persons, setPersons] = useState([]);
  const getAllPerson = async () => {
    try {
      const res = await fetch(`/api/users`);
      const data = await res.json();
      setPersons(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getAllPerson();
  }, []);
  return (
    <div className=" flex flex-wrap ">
      {persons.map((person) => (
        <div
          key={person._id}
          className="max-w-2xl mx-4 mb-1  sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm lg:mx-auto sm:mx-auto xl:mx-auto  mt-16 bg-white shadow-xl rounded-lg text-gray-900"
        >
          <div className="rounded-t-lg h-32 overflow-hidden">
            <img
              className="object-cover object-top w-full"
              src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
              alt="Mountain"
            />
          </div>
          <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
            <img
              className="object-cover object-center w-full h-32"
              src={person.profileImage}
              alt={person.personName}
            />
          </div>
          <div className="text-center mt-2">
            <h2 className="font-semibold sriracha-regular">{person.personName}</h2>
            <p className="text-gray-500">CSE-{person.cseBatch}</p>
            {person.cseBatch === "12" && <span className="text-green-400 tana-lekha ">Organizer</span>}
          </div>
          <ul className="py-4 mt-2 text-gray-700 flex items-center justify-around">
            <li className="flex flex-col items-center justify-around">
              {person.mobileNumber}
            </li>
            <li className="flex flex-col items-center justify-between">
              {person.tShirtSize}
            </li>
            <li className="flex flex-col items-center justify-around"></li>
          </ul>
          <div className="p-4 border-t mx-8 mt-2">
            <button className="w-1/2 block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2">
              {" "}
              Massage{" "}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default page;
