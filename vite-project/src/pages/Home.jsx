import React from 'react';
import DefaultLayout from '../layouts/DefaultLayout';

const Home = () => {
  return (
    <DefaultLayout>
      <section id="home" className="bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            National Representation<br />
            for<br />
            Carlo Acutis in Ireland
          </h2>
        </div>
      </section>
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl text-center text-gray-700 mb-12 leading-relaxed">
            We are a small group of families who have been deeply moved and inspired by the life of Carlo Acutis. Working directly with the Archbishop of Assisi and Bishops of Ireland, we want to share Carlo's story with as many people as we can!
          </h2>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default Home;
