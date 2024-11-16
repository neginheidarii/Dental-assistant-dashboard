function Footer() {
  return (
    <footer className="bg-light text-dark py-6 fixed bottom-0 w-full">
      <div className="container mx-auto text-center">
        {/* Footer Links */}
        <div className="flex justify-center space-x-6 mb-4">
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
        <p className="text-sm text-accent3">
          &copy; 2024 AloAi Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
