"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { prefix } from "@/utils/prefix";
import { categories } from "@/data/categories";

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
  const [productsMenuOpen, setProductsMenuOpen] = useState(false);

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
      className={`fixed top-0 left-0 right-0 z-50 bg-[#f4f4f4]/95 backdrop-blur-sm shadow-sm transition-all duration-300 ${
        scrolled ? "py-1.5" : "py-2"
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
            className="flex items-center hover:opacity-90 transition-opacity"
          >
            <Image
              src={`${prefix}/images/logo.png`}
              alt="Logo"
              width={160}
              height={60}
              priority
              className={`object-contain transition-all duration-300 ${
                scrolled ? "h-12" : "h-16"
              }`}
            />
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden items-center">
          <button
            type="button"
            className="inline-flex items-center justify-center p-2.5 text-gray-700 hover:bg-gray-100 rounded-lg"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open menu</span>
            <Bars3Icon className="h-6 w-6" />
          </button>
        </div>

        {/* Desktop navigation */}
        <div className="hidden lg:flex lg:gap-x-8 items-center mr-18">
          {navigation.map((item) => {
            if (item.name === "Sản phẩm") {
              return (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setProductsMenuOpen(true)}
                  onMouseLeave={() => setProductsMenuOpen(false)}
                >
                  <Link
                    href={item.href}
                    className={`font-semibold text-gray-900 hover:text-blue-900 relative group transition-all flex items-center gap-1 ${
                      scrolled ? "text-base py-1" : "text-xl py-2"
                    }`}
                  >
                    {item.name}
                    <ChevronDownIcon className={`h-4 w-4 transition-transform duration-200 ${productsMenuOpen ? "rotate-180" : ""}`} />
                    <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-blue-900 group-hover:w-full transition-all duration-300" />
                  </Link>
                  
                  {/* Dropdown Menu */}
                  {productsMenuOpen && (
                    <div className="absolute top-full left-0 w-64 z-50">
                      {/* Invisible bridge area to prevent menu from closing */}
                      <div className="h-2" />
                      <div className="bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                        {categories.map((category) => (
                          <Link
                            key={category.slug}
                            href={category.link}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors"
                          >
                            {category.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            }
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`font-semibold text-gray-900 hover:text-blue-900 relative group transition-all ${
                  scrolled ? "text-base py-1" : "text-xl py-2"
                }`}
              >
                {item.name}
                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-blue-900 group-hover:w-full transition-all duration-300" />
              </Link>
            );
          })}
        </div>

        {/* Search bar (Desktop) */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center">
          <form
            action="/products"
            method="GET"
            className="relative w-64 xl:w-72"
          >
            <input
              type="text"
              name="search"
              placeholder="Tìm sản phẩm..."
              className={`w-full rounded-2xl border border-gray-200 bg-white px-4 pr-11 text-gray-900 placeholder-gray-400 outline-none transition-all duration-200 hover:border-gray-300 hover:shadow-sm ${
                scrolled ? "py-1.5 text-sm" : "py-2 text-base"
              }`}
            />

            <button
              type="submit"
              className="absolute right-3 top-1/2 -translate-y-1/2 
                opacity-70 hover:opacity-100 
                transition-opacity"
              aria-label="Search"
            >
              <Image
                src={`${prefix}/images/icon/search.png`}
                alt="Search"
                width={18}
                height={18}
              />
            </button>
          </form>
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

        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full bg-white px-6 py-6 sm:max-w-sm">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="text-xl font-bold text-blue-900"
            >
              Phúc Hải Liên
            </Link>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-gray-700 hover:bg-gray-100 rounded-lg"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>

          {/* Mobile search */}
          <form
            action="/products"
            method="GET"
            className="mt-6 relative"
          >
            <input
              type="text"
              name="search"
              placeholder="Tìm sản phẩm..."
              className="w-full rounded-xl border border-gray-200 px-4 py-2 pr-10 outline-none transition-all hover:border-gray-300 hover:shadow-sm"
            />

            <button
              type="submit"
              className="absolute right-3 top-1/2 -translate-y-1/2 opacity-70 hover:opacity-100"
            >
              <Image
                src={`${prefix}/images/icon/search.png`}
                alt="Search"
                width={18}
                height={18}
              />
            </button>
          </form>

          <div className="mt-6 space-y-2">
            {navigation.map((item) => {
              if (item.name === "Sản phẩm") {
                return (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block rounded-lg px-3 py-2 text-base font-semibold hover:bg-gray-50 hover:text-blue-900"
                    >
                      {item.name}
                    </Link>
                    <div className="ml-4 mt-1 space-y-1">
                      {categories.map((category) => (
                        <Link
                          key={category.slug}
                          href={category.link}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-blue-900"
                        >
                          {category.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block rounded-lg px-3 py-2 text-base font-semibold hover:bg-gray-50 hover:text-blue-900"
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
