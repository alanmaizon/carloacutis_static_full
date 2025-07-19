import React from 'react';
import DefaultLayout from '../layouts/DefaultLayout';

const Schools = () => {
  return (
    <DefaultLayout>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6">
            We organise interactive fun workshops suitable for young people in schools, parishes and retreats. Here is all you need to do.
          </h2>
          <ul className="list-disc list-inside text-lg space-y-3">
            <li>Inform your school principal or teacher that you would like to host a visit or workshop to your school, parish or retreat.</li>
            <li>
              Consider what you would like included as part of the visit. We offer interactive workshops on Carlo, quiz events, exhibition of eucharistic miracles, and Carlo’s life and Q&A sessions. We are also very happy to take on any suggestions you might have for the visit!
            </li>
            <li>Contact us on <a href="mailto:info@carloacutisireland.org" className="text-blue-700 underline">info@carloacutisireland.org</a> or complete our application form below and a member our Carlo team will be in touch!</li>
            <li>
              From there, the directors of Carlo Acutis Youth Ireland are happy to volunteer their time to run a school visit or workshop on an arranged date and time.
            </li>
          </ul>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default Schools;
