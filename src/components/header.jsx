import "boxicons/css/boxicons.min.css";

const Header = () => {
  const togglemobilemenu = () => {
    const mobilemenu = document.getElementById("mobilemenu");

    if (mobilemenu.classList.contains("hidden")) {
      mobilemenu.classList.remove("hidden");
    } else {
      mobilemenu.classList.add("hidden");
    }
  };
  return (
    <header className="flex justify-between items-center py-4 px-4 lg:px-20">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-light m-0">
        {" "}
        Blews{" "}
      </h1>

      <nav className="hidden md:flex items-center gap-12">
        <a
          href="#"
          className="text-base tracking-wider transition-colors hover:text-gray-300z-50"
        >
          company
        </a>

        <a
          href="#"
          className="text-base tracking-wider transition-colors hover:text-gray-300z-50"
        >
          features
        </a>

        <a
          href="#"
          className="text-base tracking-wider transition-colors hover:text-gray-300z-50"
        >
          resources
        </a>

        <a
          href="#"
          className="text-base tracking-wider transition-colors hover:text-gray-300z-50"
        >
          docs
        </a>
      </nav>

      <button className="hidden md:block bg-[#a7a7a7] text-black py-3 px-8 rounded-full border-none font-medium transition-all duration-700 hover:bg-white cursor-pointer z-50">
        {" "}
        sign-in{" "}
      </button>

      {/* mobile menu button */}
      <button
        className="md:hidden text-3xl p-2 z-50"
        onClick={togglemobilemenu}
      >
        <i class="bx bx-menu"></i>
      </button>

      <div
        id="mobilemenu"
        className=" hidden md:hidden fixed top-16 bottom-0 right-0 left-0 p-5 z-40 bg-black bg-opacity-70 backdrop-blur- md  "
      >
        <nav className="flex flex-col gap-6 items-center">
          {" "}
          <a
            href="#"
            className="text-base tracking-wider transition-colors hover:text-gray-300z-50"
          >
            company
          </a>
          <a
            href="#"
            className="text-base tracking-wider transition-colors hover:text-gray-300z-50"
          >
            features
          </a>
          <a
            href="#"
            className="text-base tracking-wider transition-colors hover:text-gray-300z-50"
          >
            resources
          </a>
          <a
            href="#"
            className="text-base tracking-wider transition-colors hover:text-gray-300z-50"
          >
            docs
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
