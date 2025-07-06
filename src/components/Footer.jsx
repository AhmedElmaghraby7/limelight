import { Link } from "react-router-dom";

export default function(){
  return (
    <footer className="bg-[#D7263D] text-white py-8 w-full">
      <div className="max-w-7xl w-fit mx-auto px-4 grid md:grid-cols-3 gap-6 text-center md:text-left">
        {/* About */}
        <div>
          <h3 className="text-xl font-semibold mb-2">About Limelight</h3>
          <p className="text-sm">
            We offer solar-powered used retail locations tailored for families looking for a brighter future.
          </p>
        </div>

        {/* Links */}
        <div className="my-5">
          <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/information" className="hover:underline">Information</Link></li>
            <li><Link to="/products" className="hover:underline">Products</Link></li>
            <li><Link to="/privacy" className="hover:underline">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Contact / CTA */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Need Help?</h3>
          <p className="text-sm mb-2">Reach out to our support team any time.</p>
          <Link
            to="/contact"
            className="inline-block bg-white text-[#D7263D] px-4 py-1 rounded border-2 hover:border-white hover:text-white hover:bg-[#D7263D] transition"
          >
            Contact Us
          </Link>
        </div>
      </div>

      <div className="mt-8 border-t border-white/30 pt-4 text-center text-sm">
        © {new Date().getFullYear()} Limelight. All rights reserved.
      </div>
    </footer>
  );
};

