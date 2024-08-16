"use client";

import { sendEmail } from "@/utils/send-email";
import { FormEvent, useEffect, useState } from "react";

export default function BrandContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [descripion, setDescription] = useState("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(
      name +
        " - " +
        "\n" +
        phone +
        "\n" +
        descripion +
        "\n",
    );

    sendEmail(
      email,
      name,
      name +
        "\n" +
        phone +
        "\n" +
        "\n" +
        descripion,
    );

    setName("");
    setEmail("");
    setPhone("");
    setDescription("");
  };

  return (
    <>
      <form onSubmit={onSubmit} className="font-poppins">
        <div className="flex flex-col px-10">
          <div className="pb-4">
            <h1>Contact Info</h1>
            <div className="flex">
              <input
                type="text"
                name="name"
                className="h-10 w-full rounded-l border-b-2 border-l-2 border-r border-t-2 border-neutral-300 p-2"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>
          </div>
          <div className="pb-4">
            <h1>Contact Details</h1>
            <div className="flex pb-2">
              <input
                type="email"
                name="email"
                className="h-10 w-full rounded-l border-b-2 border-l-2 border-r border-t-2 border-neutral-300 p-2"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <input
                type="text"
                name="phone"
                className="h-10 w-full rounded-r border-b-2 border-l border-r-2 border-t-2 border-neutral-300 p-2"
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
                className="h-48 w-full text-wrap rounded-l border-b-2 border-l-2 border-r border-t-2 border-neutral-300 p-2"
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
            className="h-16 w-56 rounded-3xl bg-genesis-orange text-lg text-white"
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
