export function Testimonial() {
  return (
    <div>
      <section id="Testimonial" className="font-custom1 py-24 bg-gray-50">
        <div className="container mx-auto px-10">
          <div className="content flex flex-col">
            <div className="title flex flex-col text-center mb-10">
              <h4 className="text-xl font-semibold">Reviewed by People</h4>
              <h2 className="font-bold text-5xl mb-4 leading-tight">
                Our Clients
              </h2>
              <p className="text-gray-500">
                Discover the positive impact we've made on the our clients by
                reading through their testimonials. Our clients have experienced
                our service and results, and they're eager to share their
                positive experiences with you.
              </p>
            </div>
            <div className="testimonies flex flex-col gap-12 justify-center w-full">
              <div className="box-1 bg-white shadow-xl px-5 py-8 flex flex-col">
                <p className="font-semibold text-xl mb-10">
                  "We rented a car from this website and had an amazing
                  experience! The booking was easy and the rental rates were
                  very affordable. "
                </p>
                <div className="name flex justify-between items-center">
                  <img
                    src="./harry.png"
                    alt="user_img"
                    className="rounded-full w-24 h-24"
                  />
                  <span>
                    <h4 className="font-bold">Hari Putter</h4>
                    <p>Punjab</p>
                  </span>
                </div>
                <span className="quotes-icon hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="60"
                    height="60"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="tabler-icon tabler-icon-quote"
                  >
                    <path d="M10 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5"></path>
                    <path d="M19 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5"></path>
                  </svg>
                </span>
              </div>
              <div className="box-2 bg-white shadow-xl px-5 py-8 flex flex-col">
                <p className="font-semibold text-xl mb-10">
                  "The car was in great condition and made our trip even better.
                  Highly recommend for this car rental website!"
                </p>
                <div className="name flex justify-between items-center">
                  <img
                    src="./ron.png"
                    alt="user_img"
                    className="rounded-full w-24 h-24"
                  />
                  <span>
                    <h4 className="font-bold">Ron Grizzly</h4>
                    <p>Bihar</p>
                  </span>
                </div>
                <span className="quotes-icon hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="60"
                    height="60"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="tabler-icon tabler-icon-quote"
                  >
                    <path d="M10 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5"></path>
                    <path d="M19 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5"></path>
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
