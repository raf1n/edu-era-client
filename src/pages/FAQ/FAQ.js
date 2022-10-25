import React from "react";

const FAQ = () => {
  return (
    <section className=" text-gray-800">
      <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
        <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
          Frequently Asked Questions
        </h2>
        <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-300">
          <details>
            <summary className="py-2 text-2xl outline-none cursor-pointer focus:underline">
              How well do we serve students?
            </summary>
            <div className="px-4 pb-4 text-xl">
              <p>
                We provide round-the-clock assistance to our motivated pupils.
              </p>
            </div>
          </details>
          <details>
            <summary className="py-2 text-2xl outline-none cursor-pointer focus:underline">
              Are mentors well-versed in their fields?
            </summary>
            <div className="px-4 pb-4 text-xl">
              <p>
                All of the mentors have extensive training and expertise in
                their respective fields. We guarantee that our mentors will do
                their best effort to teach you.
              </p>
            </div>
          </details>
          <details>
            <summary className="py-2 text-2xl outline-none cursor-pointer focus:underline">
              What sets your courses apart from those offered by others?
            </summary>
            <div className="px-4 pb-4 text-xl">
              <p>
                With our Track courses, you'll get the greatest results and
                become an expert in your particular field.
              </p>
            </div>
          </details>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
