import Container from "./shared/Container";
import SocialIcons from "./shared/SocialIcons";
import Image from "next/image";
import { Clock } from "lucide-react";

export default function Footer() {
  const links = [
    { label: "Home", href: "#" },
    { label: "About", href: "#" },
    { label: "Projects", href: "#" },
    { label: "Contact", href: "#" },
  ];
  return (
    <footer className="bg-gray-900 text-white py-4 border-t border-yellow-600">
      <Container className="">
        <div className="flex flex-col sm:flex-row sm:justify-between  gap-6 items-center">
          <div className="flex flex-col items-center sm:items-start">
            <a href="/">
              <Image
                src="/images/logo.png"
                alt="Peak Renovations Logo"
                width={100}
                height={40}
              />
            </a>
            <p className="text-sm text-gray-400 mt-2">Portland, Oregon</p>
            <p className="text-sm text-gray-400">Oregon CCB #123456</p>
            <div className="text-sm text-gray-400 mt-4">
              <div className="flex gap-2 items-center ">
                <Clock className="w-4 h-4 mt-0.5 text-gray-400 sm:hidden xl:block" />
                <p className="text-[12px] xl:text-sm">Hours: Mon–Fri 9AM–5PM</p>
              </div>

              <div className="flex gap-2 items-center">
                <Clock className="w-4 h-4 mt-0.5 text-gray-400 sm:hidden xl:block" />
                <p className="text-[12px] xl:text-sm">
                  Saturday | Sunday Closed
                </p>
              </div>
            </div>
          </div>

          <nav className=" items-center space-x-6 text-base flex">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="group relative text-gray-400 transition-colors text-md xl:text-xl "
              >
                {link.label}
                <span className="underline-hover" />
              </a>
            ))}
          </nav>

          <div className="">
            <SocialIcons />
          </div>
        </div>
        <p className="text-xs text-gray-500 mt-8 text-center sm:text-left">
          © {new Date().getFullYear()} Peak Renovations PDX. All rights
          reserved.
        </p>
      </Container>
    </footer>
  );
}
