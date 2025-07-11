import { Link } from "react-router-dom";

export default function Home() {
return (
    <div className="bg-white text-[#D7263D] flex-1 flex flex-col items-center justify-center px-4 py-10 my-10">
      {/* Hero Section */}
      <section className="text-center max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Bright Spaces. Solar Powered. Family Ready.
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Discover affordable, solar-powered retail spaces perfect for families and future-focused businesses.
        </p>
        <Link
          to="/products"
          className="bg-[#D7263D] border-2 cursor-pointer text-white px-6 py-2 rounded-full text-lg font-semibold hover:bg-amber-50 hover:text-[#D7263D] hover:border-[#D7263D] transition"
        >
          Shop Now
        </Link>
      </section>

      {/* About the Team Section */}
      <section className="mt-20 max-w-5xl text-center">
        <h2 className="text-3xl font-semibold mb-4">Meet Our Team</h2>
        <p className="text-md max-w-xl mx-auto">
          We're a group of parents and solar enthusiasts dedicated to repurposing used spaces into bright, energy-efficient stores. 
          Our mission is to make sustainable retail accessible to families across the country.
        </p>
      </section>
    </div>
  );}
