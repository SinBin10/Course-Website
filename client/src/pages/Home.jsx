const Home = () => {
  return (
    <>
      <main>
        <section className="text-white">
          <div className="flex mx-52 gap-40 items-center">
            <div className="max-w-[31rem]">
              <p className=" text-gray-200">We are the World Best IT Company</p>
              <h1 className="text-5xl font-bold my-4">
                Welcome to Learn <br /> Web
              </h1>
              <p className=" text-gray-200">
                Are you ready to take your business to the next level with
                cutting-edge IT solutions ? Look no further! At LearnWeb, we
                specialize in providing innovative IT services and solutions
                tailored to meet your unique needs.
              </p>
              <div className="my-10 text-sm flex items-center gap-8">
                <a
                  className="bg-purple-600 px-6 py-2 rounded-lg"
                  href="/contact"
                >
                  Connect Now
                </a>
                <a
                  className="px-6 py-2 rounded-lg border-[1px] border-gray-500"
                  href="/service"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className="w-[46%]">
              <img
                src="../../public/images/home.png"
                alt="image of a workplace"
              />
            </div>
          </div>
        </section>
      </main>
      <section>
        <div className="bg-white flex justify-around mx-48 py-8 my-6 rounded-xl">
          <div className="text-black text-center">
            <span className="text-4xl font-medium">50+</span> <br />
            Registered Companies
          </div>
          <div className="border-r-2 border-r-black"></div>
          <div className="text-black text-center">
            <span className="text-4xl font-medium">10,000+</span> <br />
            Happy Clients
          </div>
          <div className="border-r-2 border-r-black"></div>
          <div className="text-black text-center">
            <span className="text-4xl font-medium">500+</span> <br />
            Well Known Developers
          </div>
          <div className="border-r-2 border-r-black"></div>
          <div className="text-black text-center">
            <span className="text-4xl font-medium">24/7</span> <br />
            Service
          </div>
        </div>
      </section>
      <section className="text-white">
        <div className="flex mx-52 gap-40 items-center">
          <div className="w-[35%]">
            <img
              src="../../public/images/home.png"
              alt="image of a workplace"
            />
          </div>
          <div className="max-w-[31rem]">
            <p className=" text-gray-200">We are the World Best IT Company</p>
            <h1 className="text-3xl font-bold my-4">
              Welcome to Learn <br /> Web
            </h1>
            <p className=" text-gray-200">
              Are you ready to take your business to the next level with
              cutting-edge IT solutions ? Look no further! At LearnWeb, we
              specialize in providing innovative IT services and solutions
              tailored to meet your unique needs.
            </p>
            <div className="my-10 text-sm flex items-center gap-8">
              <a className="bg-purple-600 px-6 py-2 rounded-lg" href="/contact">
                Connect Now
              </a>
              <a
                className="px-6 py-2 rounded-lg border-[1px] border-gray-500"
                href="/service"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
