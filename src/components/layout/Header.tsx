"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Trang chủ", href: "/" },
  { name: "Sản phẩm", href: "/products" },
  { name: "Dịch vụ", href: "/service" },
  { name: "Giới thiệu", href: "/about" },
  { name: "Liên hệ", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className="sticky top-0 z-50 shadow-sm backdrop-blur-sm bg-[#f4f4f4] bg-opacity-95 transition-all duration-300 ease-in-out"
      style={{ 
        height: scrolling ? "70px" : "100px",
        minHeight: scrolling ? "70px" : "100px" // Prevents content jumping
      }}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between lg:px-4 h-full transition-all duration-300 ease-in-out"
        aria-label="Global"
      >
        {/* Logo */}
        <div className="flex lg:flex-1 items-center h-full">
          <Link
            href="/"
            className="flex items-center hover:scale-105 transition-transform duration-200 h-full py-2"
          >
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={80}
              height={80}
              className="object-contain transition-all duration-300 ease-in-out w-auto"
              style={{
                height: scrolling ? "50px" : "80px",
                maxHeight: scrolling ? "50px" : "80px"
              }}
            />
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden items-center">
          <button
            type="button"
            className="inline-flex items-center justify-center p-2.5 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all duration-200"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon 
              className="transition-all duration-300 ease-in-out"
              style={{
                height: scrolling ? "20px" : "24px",
                width: scrolling ? "20px" : "24px"
              }}
              aria-hidden="true" 
            />
          </button>
        </div>

        {/* Desktop nav */}
        <div className="hidden lg:flex lg:gap-x-8 items-center h-full">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="font-semibold leading-6 text-gray-900 hover:text-blue-900 relative group px-2 py-1 transition-all duration-300 ease-in-out whitespace-nowrap"
              style={{
                fontSize: scrolling ? "18px" : "20px",
                lineHeight: scrolling ? "1.4" : "1.5"
              }}
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-900 group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center h-full">
          <Link
            href="/contact"
            className="font-semibold leading-6 text-blue-900 px-3 py-2 border border-transparent rounded-md hover:border-blue-900 hover:bg-blue-50 transition-all duration-300 ease-in-out whitespace-nowrap"
            style={{
              fontSize: scrolling ? "18px" : "20px",
              lineHeight: scrolling ? "1.4" : "1.5"
            }}
          >
            Yêu cầu báo giá <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>

      {/* Mobile menu */}
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-0 z-10 h-full w-full overflow-y-auto bg-white px-3 py-3">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="-m-1.5 p-1.5 hover:scale-105 transition-transform duration-200"
            >
              <span className="text-xl font-bold text-blue-900">
                Phúc Hải Liên
              </span>
            </Link>
            <button
              type="button"
              className="-m-2.5 p-2.5 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-6 flow-root">
            <div className="-my-6">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block px-3 py-2 text-xl font-semibold leading-7 text-gray-900 hover:bg-gray-50 hover:text-blue-900 hover:translate-x-2 transition-all duration-200 rounded-lg"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <Link
                  href="/contact"
                  className="-mx-3 block px-3 py-2.5 text-xl font-semibold leading-7 text-blue-900 hover:bg-blue-50 hover:translate-x-2 transition-all duration-200 rounded-lg border border-transparent hover:border-blue-200"
                >
                  Yêu cầu báo giá
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}