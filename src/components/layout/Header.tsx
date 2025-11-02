"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { prefix } from "@/utils/prefix";

const navigation = [
  { name: "Trang chủ", href: "/" },
  { name: "Sản phẩm", href: "/products" },
  { name: "Dịch vụ", href: "/service" },
  { name: "Giới thiệu", href: "/about" },
  { name: "Liên hệ", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-[#f4f4f4]/95 backdrop-blur-sm shadow-sm transition-all duration-300 ease-in-out ${
        scrolled ? "py-2" : "py-2"
      }`}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 lg:px-6"
        aria-label="Global"
      >
        {/* Logo */}
        <div className="flex lg:flex-1 items-center">
          <Link
            href="/"
            className="flex items-center hover:opacity-90 transition-opacity duration-200"
          >
            <Image
              src={`${prefix}/images/logo.png`}
              alt="Logo"
              width={160}
              height={60}
              priority
              className={`object-contain transition-all duration-300 ease-in-out ${
                scrolled ? "h-12" : "h-16"
              }`}
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
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* Desktop navigation */}
        <div className="hidden lg:flex lg:gap-x-8 items-center">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`font-semibold text-gray-900 hover:text-blue-900 relative group transition-all duration-300 ease-in-out whitespace-nowrap ${
                scrolled ? "text-base py-1" : "text-lg py-2"
              }`}
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-900 group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </div>

        {/* Call-to-action */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center">
          <Link
            href="/contact"
            className={`font-semibold text-blue-900 px-4 py-2 border border-transparent rounded-md hover:border-blue-900 hover:bg-blue-50 transition-all duration-300 ease-in-out whitespace-nowrap ${
              scrolled ? "text-base" : "text-lg"
            }`}
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
        <div className="fixed inset-0 z-50 bg-black/30" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">

          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="-m-1.5 p-1.5 hover:opacity-90 transition-opacity duration-200"
              onClick={() => setMobileMenuOpen(false)}
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
            <div className="-my-6 divide-y divide-gray-200">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 hover:text-blue-900 rounded-lg transition-colors duration-200"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <Link
                  href="/contact"
                  className="-mx-3 block px-3 py-2.5 text-base font-semibold leading-7 text-white bg-blue-900 hover:bg-blue-800 rounded-lg hover:scale-[1.02] active:scale-95 transition-all duration-200 shadow-md hover:shadow-lg text-center"
                  onClick={() => setMobileMenuOpen(false)}
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
