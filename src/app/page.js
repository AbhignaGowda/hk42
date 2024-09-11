import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to City-360</h1>
          <p className="text-lg mb-8">
            Empowering smart cities with modern infrastructure and cutting-edge technology.
          </p>
          <a
            href="#features"
            className="bg-yellow-400 text-blue-900 px-6 py-3 rounded-full font-semibold hover:bg-yellow-500 transition"
          >
            Explore Features
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Our Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Smart Traffic Management</h3>
              <p>
                Use intelligent traffic systems to reduce congestion and improve urban mobility.
              </p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Efficient Waste Management</h3>
              <p>
                Real-time monitoring and optimized waste collection to keep our city clean.
              </p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Smart Grids & Energy</h3>
              <p>
                Improve energy efficiency with automated smart grids and renewable energy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-200 py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Real-Time Data Monitoring</h3>
              <p>
                Access real-time data about city infrastructure, including water, traffic, and more.
              </p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Sustainable Urban Planning</h3>
              <p>
                Plan for sustainable growth with smart planning tools and data insights.
              </p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold mb-4">IoT-Driven Solutions</h3>
              <p>
                Use IoT technology to integrate city services for better management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 City-360. All rights reserved.</p>
          <div className="flex justify-center mt-4">
            <a href="#" className="text-yellow-400 hover:text-yellow-500 mx-2">Facebook</a>
            <a href="#" className="text-yellow-400 hover:text-yellow-500 mx-2">Twitter</a>
            <a href="#" className="text-yellow-400 hover:text-yellow-500 mx-2">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
