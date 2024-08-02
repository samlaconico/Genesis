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
      <h1 className="bg-genesis-orange fixed lg:static w-full text-white text-center z-30 p-1 font-jost">
        WE ARE NOW LOCATED AT 24922 Anza Dr Valencia, CA 91355
      </h1>

      <div className="py-3 fixed h-32 bg-white lg:static top-8 flex-row flex w-full space-x-7 px-3 justify-center lg:pr-8 lg:px-4 z-50 md:border-b-0">
        <Link href="/" className="content-center">
          <img src="/images/logo_text.png" className="max-h-full self-center lg:block" />
        </Link>
        <div className="hidden lg:flex flex-row space-x-6 self-center font-normal font-poppins text-2xl pr-4 text-nowrap">
          <Link
            href="/"
            className={
              pathname == "/"
                ? "underline underline-offset-4 decoration-genesis-orange"
                : "hover:decoration-genesis-orange decoration-white transition-all underline underline-offset-4"
            }
          >
            HOME
          </Link>
          <Link
            href="/services"
            className={
              pathname == "/services"
                ? "underline underline-offset-4 decoration-genesis-orange"
                : "hover:decoration-genesis-orange decoration-white transition-all underline underline-offset-4"
            }
          >
            SERVICES
          </Link>
          <Link
            href="/blog"
            className={
              pathname == "/blog"
                ? "underline underline-offset-4 decoration-genesis-orange"
                : "hover:decoration-genesis-orange decoration-white transition-all underline underline-offset-4"
            }
          >
            BLOG
          </Link>

          <Link
            href="/contact"
            className={
              pathname == "/contact"
                ? "underline underline-offset-4 decoration-genesis-orange"
                : "hover:decoration-genesis-orange decoration-white transition-all underline underline-offset-4"
            }
          >
            CONTACT
          </Link>
          <Link
            href="/about-us"
            className={
              pathname == "/about-us"
                ? "underline underline-offset-4 decoration-genesis-orange"
                : "hover:decoration-genesis-orange decoration-white transition-all underline underline-offset-4"
            }
          >
            ABOUT US
          </Link>
        </div>

        <div
          onClick={() => setNav(!nav)}
          className="self-center cursor-pointer lg:hidden"
        >
          <HiMiniBars4 className="size-10" />
        </div>

        <div
          className={
            nav
              ? "fixed lg:hidden top-0 right-0 w-[300px] h-screen bg-white z-50 duration-300 font-poppins"
              : "fixed lg:hidden top-0 right-[-100%] w-[300px] h-screen bg-white z-50 duration-300"
          }
        >
          <HiMiniChevronDoubleRight
            onClick={() => {
              setNav(!nav);
            }}
            className="cursor-pointer size-12"
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
                className={
                  services ? "transition-all duration-300 " : "hidden "
                }
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
                    <li className="p-3 px-12 border-t-2 hover:bg-neutral-300 capitalize">
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
                  <li className="p-3 px-12 border-t-2 hover:bg-neutral-300 capitalize">
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
