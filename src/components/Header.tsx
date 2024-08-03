"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/images/logo.png";
import { ServiceData } from "../../data";
import { useEffect, useState } from "react";
import { HiMiniBars4 } from "react-icons/hi2";
import { HiMiniChevronDoubleRight } from "react-icons/hi2";
import { usePathname } from "next/navigation";

const ListItemStyle: string = "p-6 border-t-2 hover:bg-neutral-300";

export default function Header() {
  const [nav, setNav] = useState(false);
  const [services, setServices] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    console.log(nav);
  }, [nav]);

  return (
    <div>
      <h1 className="fixed z-30 w-full bg-genesis-orange p-1 text-center font-jost text-white lg:static">
        WE ARE NOW LOCATED AT 24922 Anza Dr Valencia, CA 91355
      </h1>

      <div className="fixed top-8 z-50 flex h-32 w-full flex-row justify-center space-x-7 bg-white px-3 py-3 md:border-b-0 lg:static lg:px-4 lg:pr-8">
        <Link href="/" className="content-center">
          <img
            src="/images/logo_text.png"
            className="max-h-full self-center lg:block"
          />
        </Link>
        <div className="hidden flex-row space-x-6 self-center text-nowrap pr-4 font-poppins text-2xl font-normal lg:flex">
          <Link
            href="/"
            className={
              pathname == "/"
                ? "underline decoration-genesis-orange underline-offset-4"
                : "underline decoration-white underline-offset-4 transition-all hover:decoration-genesis-orange"
            }
          >
            HOME
          </Link>
          <Link
            href="/services"
            className={
              pathname == "/services"
                ? "underline decoration-genesis-orange underline-offset-4"
                : "underline decoration-white underline-offset-4 transition-all hover:decoration-genesis-orange"
            }
          >
            SERVICES
          </Link>
          <Link
            href="/blog"
            className={
              pathname == "/blog"
                ? "underline decoration-genesis-orange underline-offset-4"
                : "underline decoration-white underline-offset-4 transition-all hover:decoration-genesis-orange"
            }
          >
            BLOG
          </Link>

          <Link
            href="/contact"
            className={
              pathname == "/contact"
                ? "underline decoration-genesis-orange underline-offset-4"
                : "underline decoration-white underline-offset-4 transition-all hover:decoration-genesis-orange"
            }
          >
            CONTACT
          </Link>
          <Link
            href="/about-us"
            className={
              pathname == "/about-us"
                ? "underline decoration-genesis-orange underline-offset-4"
                : "underline decoration-white underline-offset-4 transition-all hover:decoration-genesis-orange"
            }
          >
            ABOUT US
          </Link>
        </div>

        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer self-center lg:hidden"
        >
          <HiMiniBars4 className="size-10" />
        </div>

        <div
          className={
            nav
              ? "fixed right-0 top-0 z-50 h-screen w-[300px] bg-white font-poppins duration-300 lg:hidden"
              : "fixed right-[-100%] top-0 z-50 h-screen w-[300px] bg-white duration-300 lg:hidden"
          }
        >
          <HiMiniChevronDoubleRight
            onClick={() => {
              setNav(!nav);
            }}
            className="size-12 cursor-pointer"
          />

          <ul>
            <Link
              onClick={() => {
                setNav(!nav);
                setServices(false);
              }}
              href="/"
            >
              <li className={ListItemStyle}>HOME</li>
            </Link>

            <div>
              <li
                onClick={() => {
                  setServices(!services);
                }}
                className={ListItemStyle}
              >
                SERVICES
              </li>
              <div
                className={services ? "transition-all duration-300" : "hidden"}
              >
                {ServiceData.map((item, key) => (
                  <Link
                    key={key}
                    href={`/services#${item.title}`}
                    onClick={() => {
                      setNav(!nav);
                      setServices(!services);
                    }}
                  >
                    <li className="border-t-2 p-3 px-12 capitalize hover:bg-neutral-300">
                      {item.title}
                    </li>
                  </Link>
                ))}
                <Link
                  href="/services"
                  onClick={() => {
                    setNav(!nav);
                    setServices(!services);
                  }}
                >
                  <li className="border-t-2 p-3 px-12 capitalize hover:bg-neutral-300">
                    View All
                  </li>
                </Link>
              </div>
            </div>
            <Link
              onClick={() => {
                setNav(!nav);
                setServices(false);
              }}
              href="/blog"
            >
              <li className={ListItemStyle}>BLOG</li>
            </Link>

            <Link
              onClick={() => {
                setNav(!nav);
                setServices(false);
              }}
              href="/contact"
            >
              <li className={ListItemStyle}>CONTACT</li>
            </Link>
            <Link
              onClick={() => {
                setNav(!nav);
                setServices(false);
              }}
              href="/about-us"
            >
              <li className={`${ListItemStyle} border-b-2`}>ABOUT US</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
