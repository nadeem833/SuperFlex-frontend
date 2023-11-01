const LandingPageFooter = () => {
  return (
    <footer className="bg-black mt-14 border-t">
      <div className="p-4 block mx-auto md:flex md:justify-between md:items-center">
        <div className="md:flex md:gap-4 laptop:gap-24 items-center ">
          <img
            src="/assets/SuperflexLogo.svg"
            alt="Logo"
            className="w-36 mb-4 md:mb-0 md:w-72"
          />

          <ul className="text-gray-400 flex flex-col md:flex-row md:gap-4 laptop:gap-8">
            <li className="text-white font-poppins text-base font-light">
              <a href="#Home" className="hover:text-white">
                Features
              </a>
            </li>
            <li className="text-white font-poppins text-base font-light">
              <a href="#Pricing" className="hover:text-white">
                Pricing
              </a>
            </li>
            <li className="text-white font-poppins text-base font-light">
              <a href="#FAQ" className="hover:text-white">
                FAQ
              </a>
            </li>
          </ul>
        </div>

        <p className="text-white font-poppins text-base font-light mt-4 md:mt-0">
          © Copyright 2023. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default LandingPageFooter;
