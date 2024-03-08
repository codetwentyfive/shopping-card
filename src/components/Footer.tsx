import { ModeToggle } from "./mode-toggle";

const Footer = () => {
  return (
    <footer className="py-4 container mx-auto flex justify-center items-center">
      <div className="text-sm md:text-base text-start pr-2">
        <p>&copy; {new Date().getFullYear()} Altan Uul. All rights reserved.</p>
      </div>
      <div className="">
        <ModeToggle />
      </div>
    </footer>
  );
};

export default Footer;
