import Footer from "../Components/Footer";
import Nav from "../Components/Nav";

export default function Home() {
  return (
    <div>
      {/* --------HEADER------- */}

      <div className="mb-10">
        <Nav />
      </div>
      <main className="flex flex-col items-center w-auto">
        <div className="flex flex-col items-center">
          <div>
            <div className="">
              <img
                src="https://images.unsplash.com/photo-1640960543409-dbe56ccc30e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60"
                alt=""
                className="w-32 min-w-32 max-w-32 h-32 min-h-32 max-h-32 rounded-full "
              />
            </div>
          </div>
          <h1 className="font-sans mt-5 text-7xl text-gray-800">
            Lakhan Rajput
          </h1>

          {/* Edit Profile */}
          {/* <a className="mt-10 " href="#">
            <button className=" rounded-md bg-[#05a081] font-semibold text-xl text-white px-6 py-2 ">
              <span>
                <FaPen className=" inline-flex  mr-2 w-4 " />
              </span>
              Edit Profile
            </button>
          </a> */}

          {/* <div className="grid  grid-cols-3 mt-10  divide-x text-center font-medium ">
            <a className=" mx-6 " href="#">
              <p className="text-gray-500">Total Views </p>
              <h4 className="font-sans text-2xl">0</h4>
            </a>
            <a href="#">
              <p className="text-gray-500">All-time rank </p>
              <h4 className="font-sans text-2xl">461.5K</h4>
            </a>
            <a href="#">
              <p className="text-gray-500">30-day rank</p>
              <h4 className="font-sans text-2xl">24.6K</h4>
            </a>
          </div> */}
        </div>
        {/* ------------ */}
        <div className="flex mt-20 sm:flex-col ">
          <div className="inline-flex gap-2 md:gap-10 items-center sm:justify-evenly ">
            <a
              href="#_"
              className="relative px-5 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group"
            >
              <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
              <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
              <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
              <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
              <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
              <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
                GALLERY <span>0</span>
              </span>
            </a>
            <a
              href="#_"
              className="relative px-5 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group"
            >
              <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
              <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
              <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
              <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
              <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
              <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
                COLLECTIONS <span>0</span>
              </span>
            </a>
          </div>
        </div>
        {/* ------- */}
        <div className="font-semibold text-4xl mt-36 ">
          <h2>Lakhan has no videos or photos yet 😔</h2>
        </div>
      </main>
      {/* ------FOOTER----- */}
      <div className="mt-20 ">
        <Footer />
      </div>
    </div>
  );
}
