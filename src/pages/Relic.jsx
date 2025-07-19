import React from 'react';
import DefaultLayout from '../layouts/DefaultLayout';

const Relic = () => {
  return (
    <DefaultLayout>
      <section className="py-16 bg-white">
        <h2 className="text-3xl font-bold text-center mb-8">Relic Visit Information</h2>
        <p className="max-w-3xl mx-auto text-lg leading-relaxed text-center">
          Learn how to request a visit of the primary relic of Carlo Acutis to your diocese or parish.
        </p>
      </section>
      <section className="bg-white">
        <div
          className="relative h-72 bg-center bg-cover mb-8"
          style={{ backgroundImage: "url('/assets/images/carlo-acutis-ireland-relic.jpg')" }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
          <div className="relative h-full flex items-center justify-center">
            <h1 className="text-5xl font-bold text-white">Relic Visits</h1>
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-2xl font-semibold text-gray-900">
              To arrange a visit of the Primary Relic to your parish, the Bishop of your diocese must make contact with Assisi to request the visitation of the relic.
            </p>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default Relic;
