import React from 'react';
import DefaultLayout from '../layouts/DefaultLayout';

const Resources = () => {
    return (
        <DefaultLayout>
            <section className="py-16 bg-white">
                <h2 className="text-3xl font-bold text-center mb-8">Resources & Outreach</h2>
                <p className="max-w-3xl mx-auto text-lg leading-relaxed text-center">
                    Access materials and tools to help you share Carlo Acutis’ message in your school, parish, or community.
                </p>
            </section>
            <section className="bg-teal-800 rounded-lg p-8 mb-8 text-center">
                <h2 className="text-4xl font-bold text-white mb-4">Carlo Acutis Shop</h2>
                <hr className="border-gray-400 my-4" />
                <p className="text-2xl text-white">More Items coming soon</p>
            </section>
        </DefaultLayout>
    );
};

export default Resources;
