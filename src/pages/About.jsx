import React from 'react';
import DefaultLayout from '../layouts/DefaultLayout';

const About = () => {
  return (
    <DefaultLayout>
      <section className="py-16 bg-white">
        <h2 className="text-3xl font-bold text-center mb-8">About Carlo Acutis</h2>
        <p className="max-w-3xl mx-auto text-lg leading-relaxed text-center">
          Learn more about the life and mission of Carlo Acutis, his legacy, and the movement inspired in Ireland.
        </p>
      </section>
      <section className="bg-cover bg-center h-64 flex items-center justify-center" style={{ backgroundImage: "url('/assets/images/113150502.jpg')" }}>
        <div className="text-center">
          <p className="text-white text-xl italic font-serif">"Everyone is born as an Original but many die as Photocopies"</p>
          <span className="text-gray-300 text-lg mt-2 block">Carlo Acutis</span>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default About;
