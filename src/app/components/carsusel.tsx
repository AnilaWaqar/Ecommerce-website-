import React from "react";

export default function Carsusel() {
  return (
    <div>
      <section className="bg-gradient-to-r from-black to-slate-700">
        {/* Matching max-width and padding with the navbar */}
        <div className="max-w-screen-xl mx-auto px-4 py-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-4">
            {/* Pizza 1 */}
            <div className="col-span-2 bg-gradient-to-r from-black to-slate-300 flex flex-col">
              <a
                href="https://www.google.com"
                className="group relative flex flex-col overflow-hidden rounded-lg pb-4 pt-40 flex-grow"
              >
                <img
                  src="https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_960_720.jpg"
                  alt="pizza"
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 py-4 xs:text-xl md:text-xl">
                  Paperonika Pizza
                </h3>
              </a>
            </div>

            {/* Pizza 2 */}
            <div className="col-span-2 bg-gradient-to-r from-black to-slate-700 flex flex-col">
              <a
                href="https://www.google.com"
                className="group relative flex flex-col overflow-hidden rounded-lg pb-4 pt-40 flex-grow"
              >
                <img
                  src="https://img.freepik.com/free-photo/freshly-cooked-gourmet-pizza-rustic-wood-table-generative-ai_188544-53715.jpg"
                  alt="pizza 2"
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 py-4 xs:text-xl md:text-xl">
                  Chicken Tikka Pizza
                </h3>
              </a>

              {/* Nested Grid for Pizza 3 and 4 */}
              <div className="grid gap-4 grid-cols-2">
                {/* Pizza 3 */}
                <a
                  href=""
                  className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
                >
                  <img
                    src="https://img.freepik.com/free-photo/pizza-with-shrimp-salmon-olives_2829-4055.jpg"
                    alt="Pizza 3"
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                  <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 py-4 xs:text-xl md:text-xl">
                    Chicken Fajita
                  </h3>
                </a>

                {/* Pizza 4 */}
                <a
                  href=""
                  className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
                >
                  <img
                    src="https://img.freepik.com/free-photo/side-view-pizza-with-slices-bell-pepper-pizza-slices-flour-board-cookware_176474-3185.jpg"
                    alt="Pizza 4"
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                  <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 py-4 xs:text-xl md:text-xl">
                    Deep Fish Pizza
                  </h3>
                </a>
              </div>
            </div>

            {/* Pizza 5 */}
            <div className="col-span-2 bg-gradient-to-r black to-slate flex flex-col">
              <a
                href=""
                className="group relative flex flex-col overflow-hidden rounded-lg pb-4 pt-40 flex-grow"
              >
                <img
                  src="https://img.freepik.com/free-photo/sliced-chicken-pizza-served-with-yogurt-sauce-with-herbs_140725-7057.jpg"
                  alt="Pizza 5"
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 py-4 xs:text-xl md:text-xl">
                  Veg Cheesy Pizza
                </h3>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
