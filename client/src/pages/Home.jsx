const Home = () => {
  return (
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
          <div className="w-[46%]">
            <img
              src="../../public/images/home.png"
              alt="image of a workplace"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
