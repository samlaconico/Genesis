"use client";

import { sendEmail } from "@/utils/send-email";
import { FormEvent, useEffect, useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [descripion, setDescription] = useState("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(name + " - " + year + make + model + "\n" + phone + "\n" + descripion + "\n");

    sendEmail(email, name, (name + "\n" + phone + "\n" + year + ' ' + make + ' ' + model + "\n" + "\n" + descripion));

    setName("")
    setYear("")
    setMake("")
    setModel("")
    setEmail("")
    setPhone("")
    setDescription("")
  };

  return (
    <>
      <form onSubmit={onSubmit} className="font-poppins">
        <div className="flex-col flex px-10">
          <div className="pb-4">
            <h1>Contact Info</h1>
            <div className="flex">
              <input
                type="text"
                name="name"
                className="border-neutral-300 w-full h-10 rounded-l border-l-2 border-t-2 border-b-2 border-r p-2"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>
          </div>
          <div className="pb-4">
            <h1>Vehicle Details</h1>
            <div className="flex pb-2">
              <input
                type="text"
                name="year"
                className="border-neutral-300 w-full h-10 rounded-l border-l-2 border-t-2 border-b-2 border-r p-2"
                placeholder="Year"
                onChange={(e) => setYear(e.target.value)}
                value={year}
              />
              <input
                type="text"
                name="make"
                className="border-neutral-300 w-full h-10 rounded-r border-r-2 border-t-2 border-b-2 border-l p-2"
                placeholder="Make"
                onChange={(e) => setMake(e.target.value)}
                value={make}
              />
            </div>
            <div className="flex">
              <input
                type="text"
                name="model"
                className="border-neutral-300 w-full h-10 rounded border-l-2 border-t-2 border-b-2 border-r-2 p-2"
                placeholder="Model"
                onChange={(e) => setModel(e.target.value)}
                value={model}
              />
            </div>
          </div>
          <div className="pb-4">
            <h1>Contact Details</h1>
            <div className="flex pb-2">
              <input
                type="email"
                name="email"
                className="border-neutral-300 w-full h-10 rounded-l border-l-2 border-t-2 border-b-2 border-r p-2"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <input
                type="text"
                name="phone"
                className="border-neutral-300 w-full h-10 rounded-r border-r-2 border-t-2 border-b-2 border-l p-2"
                placeholder="Phone Number"
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
              />
            </div>
          </div>
          <div className="pb-4">
            <div className="flex pb-2">
              <textarea
                name="description"
                className="border-neutral-300 w-full h-48 text-wrap rounded-l border-l-2 border-t-2 border-b-2 border-r p-2"
                placeholder="Description"
                onChange={(e) => setDescription(e.target.value)}
                value={descripion}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-genesis-orange text-white text-lg h-16 rounded-3xl  w-56"
            onSubmit={(e) => {
              e.preventDefault;
            }}
          >
            Send Request
          </button>
        </div>
      </form>
    </>
  );
}
