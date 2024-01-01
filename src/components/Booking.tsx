export function Booking() {
  return (
    <div>
      <section id="Booking" className="font-custom1 py-16">
        <div className="container mx-auto px-10">
          <div className="booking-content flex items-center justify-center h-auto w-auto relative md:justify-center">
            <div className="booking-content-box bg-white bg-cover bg-center bg-no-repeat shadow-lg rounded-md text-black w-full h-auto px-4 py-6 relative">
              <h2 className="text-2xl font-bold mb-8">Book a car</h2>
              <form className="box-form grid grid-rows-4 gap-5">
                <div className="box-form__car-type flex flex-col">
                  <label className="flex flex-row mb-3 font-semibold">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="input-icon"
                    >
                      <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                      <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                      <path d="M5 17h-2v-6l2 -5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-6m-6 -6h15m-6 0v-5"></path>
                    </svg>{" "}
                    &nbsp; Select Your Car Type{" "}
                    <b className="text-orange-600">*</b>
                  </label>
                  <select className="border border-gray-300 rounded-2xl p-3 pl-4 text-gray-500 font-rubik text-md font-normal outline-none">
                    <option>Select your car type</option>
                    <option value="Audi A1 S-Line">Audi A1 S-Line</option>
                    <option value="VW Golf 6">VW Golf 6</option>
                    <option value="Toyota Camry">Toyota Camry</option>
                    <option value="BMW 320 ModernLine">
                      BMW 320 ModernLine
                    </option>
                    <option value="Mercedes-Benz GLK">Mercedes-Benz GLK</option>
                    <option value="VW Passat CC">VW Passat CC</option>
                  </select>
                </div>
                <div className="box-form__pick-up-location flex flex-col">
                  <label className="flex flex-row mb-3 font-semibold">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="input-icon"
                    >
                      <path
                        d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z"
                        fill="currentColor"
                        stroke-width="0"
                      ></path>
                    </svg>{" "}
                    &nbsp; Pick-up <b className="text-orange-600">*</b>
                  </label>
                  <select className="border border-gray-300 rounded-2xl p-3 pl-4 text-gray-500 font-rubik text-md font-normal outline-none">
                    <option>Select pick up location</option>
                    <option>Belgrade</option>
                    <option>Novi Sad</option>
                    <option>Nis</option>
                    <option>Kragujevac</option>
                    <option>Subotica</option>
                  </select>
                </div>
                <div className="box-form__drop-of-location flex flex-col">
                  <label className="flex flex-row mb-3 font-semibold">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="input-icon"
                    >
                      <path
                        d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z"
                        fill="currentColor"
                        stroke-width="0"
                      ></path>
                    </svg>{" "}
                    &nbsp; Drop-of <b className="text-orange-600">*</b>
                  </label>
                  <select className="border border-gray-300 rounded-2xl p-3 pl-4 text-gray-500 font-rubik text-md font-normal outline-none">
                    <option>Select drop off location</option>
                    <option>Novi Sad</option>
                    <option>Belgrade</option>
                    <option>Nis</option>
                    <option>Kragujevac</option>
                    <option>Subotica</option>
                  </select>
                </div>
                <div className="box-form__pick-up-time flex flex-col">
                  <label className="flex flex-row mb-3 font-semibold">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="input-icon"
                    >
                      <path d="M4 5m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                      <path d="M16 3l0 4"></path>
                      <path d="M8 3l0 4"></path>
                      <path d="M4 11l16 0"></path>
                      <path d="M8 15h2v2h-2z"></path>
                    </svg>
                    &nbsp; Pick-up <b className="text-orange-600">*</b>
                  </label>
                  <input
                    id="picktime"
                    type="date"
                    value=""
                    className="border border-gray-300 rounded-2xl p-3 pl-4 text-gray-500 font-rubik text-md font-normal outline-none"
                  ></input>
                </div>
                <div className="box-form__drop-of-time flex flex-col">
                  <label className="flex flex-row mb-3 font-semibold">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="input-icon"
                    >
                      <path d="M4 5m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                      <path d="M16 3l0 4"></path>
                      <path d="M8 3l0 4"></path>
                      <path d="M4 11l16 0"></path>
                      <path d="M8 15h2v2h-2z"></path>
                    </svg>
                    &nbsp; Drop-of <b className="text-orange-600">*</b>
                  </label>
                  <input
                    id="picktime"
                    type="date"
                    value=""
                    className="border border-gray-300 rounded-2xl p-3 pl-4 text-gray-500 font-rubik text-md font-normal outline-none"
                  ></input>
                </div>
                <button
                  className="text-white bg-gradient-to-br from-red-500 to-orange-400 font-semibold rounded-3xl px-5 py-2.5 text-center me-2 mb-2"
                >
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
