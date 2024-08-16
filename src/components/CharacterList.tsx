"use client";
import React from "react";

import { MdFilterAlt } from "react-icons/md";
import { useState } from "react";
interface Character {
  id: number;
  name: string;
  status: string;
  gender: string;
  image: string;
  location: {
    name: string;
  };
  origin: {
    name: string;
  };
}

interface Props {
  charcters: Character[];
}

const CharacterList = ({ charcters }: Props) => {
  const [statusFilter, setStatusFilter] = useState("");
  const [genderFilter, setGenderFilter] = useState("");

  const filteredCharacters = charcters?.filter(
    (char) =>
      (statusFilter ? char.status === statusFilter : true) &&
      (genderFilter ? char.gender === genderFilter : true)
  );
  console.log(genderFilter, statusFilter);
  return (
    <div className=" container mx-auto p-4">
      <div className=" flex flex-row gap-2 items-center">
        <MdFilterAlt size={28} />
        <h1 className=" text-xl font-semibold">Filters</h1>
      </div>
      <div className=" flex gap-4 mb-8">
        <input
          type="text"
          placeholder="Search by Status.."
          className="p-2 border outline-none focus:border-blue-500"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        />
        <select
          className="p-2 border "
          value={genderFilter}
          onChange={(e) => setGenderFilter(e.target.value)}
        >
          <option value="">All</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCharacters?.map((char) => (
          <div
            key={char.id}
            className=" text-white p-4  min-h-[400px] bg-[#3C3E44] rounded-lg shadow-md"
          >
            <img
              src={char.image}
              alt={char.name}
              className="w-full h-40 object-cover"
            />
            <h2 className=" text-2xl font-bold hover:text-red-400 hover:cursor-pointer mt-4">
              {char.name}
            </h2>
            <div className=" flex flex-row gap-2 items-center">
              {char.status === "Alive" ? (
                <div className=" bg-green-600 rounded-full w-3 h-3" />
              ) : (
                <div className=" bg-red-800 rounded-full w-3 h-3" />
              )}
              <p className="text-white">{char.status}</p>
            </div>
            <div className=" flex flex-col items-start gap-2 mt-2">
              <h2 className=" text-gray-400 font-semibold">
                Last known location:
              </h2>
              <p>{char.location.name}</p>
            </div>
            <div className=" flex flex-col items-start gap-2 mt-2">
              <h2 className=" text-gray-400 font-semibold">First Seen:</h2>
              <p>{char.origin.name}</p>
            </div>
          </div>
        )) ?? []}
      </div>
    </div>
  );
};

export default CharacterList;
