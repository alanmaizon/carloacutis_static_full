import React from 'react';
import DefaultLayout from '../layouts/DefaultLayout';

const Youth = () => {
  return (
    <DefaultLayout>
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">So what's the scéal behind it all?</h2>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="md:w-2/3">
              <p className="text-gray-700 leading-relaxed">
                We are Mary-Aoife and Séamus Ong, brother and sister living in Dublin. In October 2023 after graduating from college, we took a trip to Assisi and discovered Carlo Acutis for the first time. Up to this point, we had always thought saints were from the past and never imagined it could be possible to be a saint in the ordinary things in life. Carlo changed our minds! We learnt how he was a totally normal boy who liked football, video games and hanging out with his friends yet when you took a closer look, you noticed he rarely argued with anyone, he was always calm in his judgments, generous and ready to help everyone.
              </p>
            </div>
            <div className="md:w-1/3">
              <img src="/assets/images/whatsapp-image-2024-06-29-at-17-41-41.jpeg" alt="Carlo Acutis Youth Ireland" className="rounded-lg shadow-md w-full" />
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default Youth;
