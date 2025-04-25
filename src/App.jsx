import React from "react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-100 to-white">
      <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
        <button className="text-2xl font-bold text-purple-800 hover:text-purple-600 transition-colors duration-200">Verto</button>
        <ul className="flex gap-6 text-gray-700 font-medium">
          <li className="hover:text-purple-600 cursor-pointer">Home</li>
          <li className="hover:text-purple-600 cursor-pointer">Browse</li>
          <li className="hover:text-purple-600 cursor-pointer">My Closet</li>
          <li className="hover:text-purple-600 cursor-pointer">How It Works</li>
          <li className="hover:text-purple-600 cursor-pointer">Login</li>
        </ul>
      </nav>

      <div className="bg-purple-700 text-white text-center py-3 px-4 font-semibold text-sm">
        ⚡ DEAL ALERT ⚡: Connect and follow Verto on TikTok/Douyin (抖音) for $5 off your first swap!
      </div>

      <header className="text-center py-20 px-6 bg-[url('/closet.png')] bg-cover bg-center bg-no-repeat text-white">
        <h1 className="text-4xl font-bold drop-shadow-lg">Verto</h1>
        <p className="mt-4 text-lg drop-shadow-md">
          Rent, Wear, Return – Fashion Freedom Delivered
        </p>
      </header>

      <div className="bg-white shadow-md rounded-xl p-6 mx-6 mb-8 mt-2 text-center">
        <h2 className="text-xl font-medium text-purple-800 mb-2">Ready to upgrade your closet?</h2>
        <input
          type="text"
          placeholder="Ex. Suits, Dresses, Formal Wear..."
          className="w-full md:w-2/3 mx-auto block px-4 py-3 text-lg border border-purple-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      <main className="max-w-5xl mx-auto px-6">
        <section className="bg-white shadow-xl rounded-2xl p-8 mb-10">
          <h2 className="text-2xl font-semibold text-purple-700 mb-4">What is Verto?</h2>
          <p className="text-gray-800">
            Verto is a clothing rental and swap app designed to help you find the perfect outfit for any occasion — from college formals to Halloween parties. Enjoy a smooth, intuitive interface, simple return process, and Uber-style ratings for trust and transparency.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-6">
          <div className="bg-purple-50 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-medium text-purple-800">How It Works</h3>
            <ul className="list-disc list-inside text-gray-700 mt-2">
              <li>Browse and select outfits via our app</li>
              <li>Receive your clothes in a reusable box</li>
              <li>Wear and return in the same packaging</li>
              <li>Rate your experience — just like Uber</li>
            </ul>
          </div>

          <div className="bg-purple-50 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-medium text-purple-800">Why Verto?</h3>
            <ul className="list-disc list-inside text-gray-700 mt-2">
              <li>Perfect for special events & college life</li>
              <li>Affordable alternative to buying new clothes</li>
              <li>Eco-friendly and space-saving</li>
              <li>Community-driven trust system</li>
            </ul>
          </div>
        </section>

        <section className="mt-20">
          <h2 className="text-2xl font-semibold text-purple-700 mb-6 text-center">Testimonials</h2>
          <div className="overflow-hidden relative">
            <div className="animate-scroll whitespace-nowrap flex space-x-4 w-max">
              {[...Array(2)].flatMap(() => [
                <div key={Math.random()} className="bg-white shadow-md rounded-xl p-6 w-[400px] h-full flex flex-col justify-between whitespace-normal break-words">
                  <p className="text-gray-700 italic">“Verto saved me from spending $100 on a one-night dress. I love it!”</p>
                  <p className="mt-2 text-sm text-gray-500">— Emily, Boston College</p>
                </div>,
                <div key={Math.random()} className="bg-white shadow-md rounded-xl p-6 min-w-[350px] max-w-[400px]">
                  <p className="text-gray-700 italic">“The return process was seamless. I’m hooked!”</p>
                  <p className="mt-2 text-sm text-gray-500">— Marcus, NYU</p>
                </div>,
                <div key={Math.random()} className="bg-white shadow-md rounded-xl p-6 w-[400px] h-full flex flex-col justify-between whitespace-normal break-words">
                  <p className="text-gray-700 italic">“Perfect for theme parties. The Uber-style rating gives me peace of mind.”</p>
                  <p className="mt-2 text-sm text-gray-500">— Hi’ilei, USC</p>
                </div>,
                <div key={Math.random()} className="bg-white shadow-md rounded-xl p-6 w-[400px] h-full flex flex-col justify-between whitespace-normal break-words">
                  <p className="text-gray-700 italic">“As a guy with zero fashion sense, this was a lifesaver.”</p>
                  <p className="mt-2 text-sm text-gray-500">— John, Northeastern</p>
                </div>
              ])}
            </div>
          </div>
        </section>

        <style>{`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll {
            animation: scroll 40s linear infinite;
          }
        `}</style>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-purple-700 mb-6 text-center">Recent Transactions</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow p-4">
              <img src="\sam.png" alt="Party outfit" className="w-full h-48 object-cover rounded-lg" />
              <p className="mt-3 text-gray-800 font-medium">Sam rented a sequin party dress for a New Year's Bash 🎉</p>
            </div>
            <div className="bg-white rounded-xl shadow p-4">
              <img src="\ava.png" alt="Formal outfit" className="w-full h-48 object-cover rounded-lg" />
              <p className="mt-3 text-gray-800 font-medium">Ava borrowed a sleek blazer for her business school interview 💼</p>
            </div>
            <div className="bg-white rounded-xl shadow p-4">
              <img src="leo.png" alt="Costume outfit" className="w-full h-48 object-cover rounded-lg" />
              <p className="mt-3 text-gray-800 font-medium">Leo swapped in a Dracula costume just in time for Halloween 🧛</p>
            </div>
          </div>
        </section>

        <div className="text-center mt-12">
          <button className="text-white bg-purple-700 hover:bg-purple-800 px-6 py-3 text-lg rounded-full">
            Get Started
          </button>
        </div>
      </main>

      <footer className="bg-black text-gray-300 text-sm mt-16 pt-10 pb-6 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
          <div>
            <h4 className="font-semibold mb-2 text-white">Company</h4>
            <ul className="space-y-1">
              <li className="hover:underline cursor-pointer">About Us</li>
              <li className="hover:underline cursor-pointer">Careers</li>
              <li className="hover:underline cursor-pointer">Press</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-white">Support</h4>
            <ul className="space-y-1">
              <li className="hover:underline cursor-pointer">Contact</li>
              <li className="hover:underline cursor-pointer">FAQs</li>
              <li className="hover:underline cursor-pointer">Returns</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-white">Legal</h4>
            <ul className="space-y-1">
              <li className="hover:underline cursor-pointer">Terms of Service</li>
              <li className="hover:underline cursor-pointer">Privacy Policy</li>
              <li className="hover:underline cursor-pointer">Sitemap</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-white">Follow Us</h4>
            <ul className="space-y-1">
              <li className="hover:underline cursor-pointer">Instagram</li>
              <li className="hover:underline cursor-pointer">TikTok</li>
              <li className="hover:underline cursor-pointer">Twitter</li>
            </ul>
          </div>
        </div>
        <div className="text-center text-gray-500 text-xs mt-10">
          &copy; 2025 Verto. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
