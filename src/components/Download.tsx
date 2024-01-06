export const Download = () => {
  return (
    <section id="Download" className="font-custom1 py-24 bg-gray-100">
      <img src="./download-bg.png" alt="download background" className="hidden md:flex absolute"/>
      <div className="container mx-auto px-10">
        <div className="download-text flex flex-col gap-8 text-center md:text-left md:w-1/2 md:items-start md:px-24">
          <h2 className="font-bold text-5xl leading-tight mb-4">
            Download our app to get most out of it
          </h2>
          <p className="text-gray-500 mb-8">
            Thrown shy denote ten ladies though ask saw. Or by to he going think
            order event music. Incommode so intention defective at convinced.
            Led income months itself and houses you.
          </p>
          <div className="download-text__btns flex flex-col gap-5 md:grid md:grid-cols-2 md:items-center">
            <img alt="download_img" src="./download-android.png" />
            <img alt="download_img" src="./download-ios.png" />
          </div>
        </div>
      </div>
    </section>
  );
};
