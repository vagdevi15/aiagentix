import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import SignInForm from "./SignInForm";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-sm border-b border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img
              src="/lovable-uploads/5cae1dda-0923-45f3-a55b-1ac6d921a11c.png"
              alt="Logo"
              className="w-100 h-20"
            />
          </div>

          <div className="hidden md:block">
            <div className="ml-5 flex items-baseline space-x-8">
              <DropdownMenu>
                <DropdownMenuTrigger className="text-white hover:text-primary flex items-center">
                  Domains <ChevronDown className="ml-1 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {/* <DropdownMenuItem onClick={() => document.getElementById("healthcare")?.scrollIntoView({ behavior: "smooth" })}>
                    Healthcare Agent
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => document.getElementById("finance")?.scrollIntoView({ behavior: "smooth" })}>
                    Financial Agent
                  </DropdownMenuItem> */}
                  {/* <div className="absolute mt-2 w-48 bg-white shadow-lg rounded-lg border border-gray-200"> */}
        <div
          className="cursor-pointer px-4 py-2 text-[#a63777] bg-gray-100 hover:bg-gray-200"
          onClick={() =>
            document.getElementById("healthcare")?.scrollIntoView({
              behavior: "smooth",
            })
          }
        >
          Healthcare 
        </div>
        <div
          className="cursor-pointer px-4 py-2 text-[#a63777] bg-gray-100 hover:bg-gray-200"
          onClick={() =>
            document.getElementById("finance")?.scrollIntoView({
              behavior: "smooth",
            })
          }
        >
          Financial Services
        </div>
      {/* </div> */}

                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger className="text-white hover:text-primary flex items-center">
                  Prodify Labs <ChevronDown className="ml-1 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {/* <DropdownMenuItem>Open Source Models</DropdownMenuItem>
                  <DropdownMenuItem>Model Optimization</DropdownMenuItem> */}
                  
        <div
          className="cursor-pointer px-4 py-2 text-[#a63777]  bg-gray-100 hover:bg-gray-200"
          onClick={() =>
            document.getElementById("healthcare")?.scrollIntoView({
              behavior: "smooth",
            })
          }
        >
          Open Source Models
        </div>
        <div
          className="cursor-pointer px-4 py-2 text-[#a63777] bg-gray-100 hover:bg-gray-200"
          onClick={() =>
            document.getElementById("finance")?.scrollIntoView({
              behavior: "smooth",
            })
          }
        >
          Model Optimization
        </div>

                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger className="text-yellow hover:text-primary flex items-center">
                  Company <ChevronDown className="ml-1 h-8 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {/* <DropdownMenuItem>About Us</DropdownMenuItem>
                  <DropdownMenuItem>Careers</DropdownMenuItem> */}
         {/* <div className="absolute mt-2 w-40 bg-white shadow-lg rounded-lg border border-gray-200"> */}
          <div
            className="cursor-pointer px-4 py-2 text-[#a63777] bg-gray-100 hover:bg-gray-200"
            onClick={() =>
              document.getElementById("healthcare")?.scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            About Us
          </div>
          <div
            className="cursor-pointer px-4 py-2 text-[#a63777] bg-gray-100 hover:bg-gray-200"
            onClick={() =>
              document.getElementById("finance")?.scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            Careers
          </div>
      {/* </div>  */}

                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-4">
              <Button
                variant="outline"
                className="text-white border-[#a63777] hover:bg-[#a63777]"
                onClick={() => setShowSignIn(true)}
              >
                Sign In
              </Button>
              <Button
                className="bg-[#a63777] hover:bg-[#a63777]/80"
                onClick={() => document.getElementById("demo-form")?.scrollIntoView({ behavior: "smooth" })}
              >
                Book Demo
              </Button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-[#a63777]"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#healthcare" className="text-white block px-3 py-2 rounded-md">
              Healthcare Agent
            </a>
            <a href="#finance" className="text-white block px-3 py-2 rounded-md">
              Financial Agent
            </a>
            <a href="#" className="text-white block px-3 py-2 rounded-md">
              Prodify Labs
            </a>
            <a href="#" className="text-white block px-3 py-2 rounded-md">
              Company
            </a>
          </div>
          <div className="pt-4 pb-3 border-t border-[#a63777]/20">
            <div className="px-2 space-y-1">
              <Button
                variant="outline"
                className="w-full text-white border-[#a63777] hover:bg-[#a63777]"
                onClick={() => setShowSignIn(true)}
              >
                Sign In
              </Button>
              <Button
                className="w-full bg-[#a63777] hover:bg-[#a63777]/80"
                onClick={() => {
                  document.getElementById("demo-form")?.scrollIntoView({ behavior: "smooth" });
                  setIsOpen(false);
                }}
              >
                Book Demo
              </Button>
            </div>
          </div>
        </div>
      )}

      <SignInForm isOpen={showSignIn} onClose={() => setShowSignIn(false)} />
    </nav>
  );
};

export default Navbar;