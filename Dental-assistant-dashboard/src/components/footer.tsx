function Footer() {
  return (
    // wee need to work on the footer navbar. it is ok by now but need to work on it

    <footer className="bg-light text-dark py-6 fixed bottom-0 w-4/5">
      {/* it needs some changes in here => items-center pr-[300px] */}
      <div className="container mx-auto text-center flex justify-center items-center ">
        {/* Footer Links */}
        <div className="flex  space-x-6 ">
          <a
            href="#"
            className="text-dark hover:text-accent3 transition duration-300"
          >
            About
          </a>
          <a
            href="#"
            className="text-dark hover:text-accent3 transition duration-300"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-dark hover:text-accent3 transition duration-300"
          >
            Terms of Service
          </a>
        </div>

        {/* Copyright Text */}
        {/* <p className="text-sm text-accent3">
          &copy; 2024 AloAi Inc. All rights reserved.
        </p> */}
      </div>
    </footer>
  );
}

export default Footer;
