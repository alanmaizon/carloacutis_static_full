import React from 'react';

const Contact = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Let's Connect - Get in touch with us!</h2>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="text-center">
            <img
              src="/assets/images/carlo-acutis-ireland-logo.jpg"
              alt="Carlo Acutis Ireland Logo"
              className="w-32 h-32 mx-auto rounded-full mb-4"
            />
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-bold mb-2">National Director of Carlo Acutis Ireland</h3>
              <p>Mary Ong</p>
              <p>+44 7300 866 444</p>
              <p>info@carloacutisireland.org</p>
              <p className="text-gray-600">Based in Belfast</p>
            </div>
          </div>
          <div className="text-center">
            <img
              src="/assets/images/mary-eucharist_2.png"
              alt="Youth Directors"
              className="w-32 h-32 mx-auto rounded-full mb-4"
            />
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-bold mb-2">Directors of Carlo Acutis Youth Ireland</h3>
              <p>Mary-Aoife and Séamus Ong</p>
              <p>+353 83 416 6687</p>
              <p>youth@carloacutisireland.org</p>
              <p className="text-gray-600">Based in Dublin</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
