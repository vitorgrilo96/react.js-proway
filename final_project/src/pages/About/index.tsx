import React from 'react';

type TeamMember = {
  name: string;
  role: string;
  imageSrc: string;
  bio: string;
};

const teamMembers: TeamMember[] = [
  {
    name: 'Jane Doe',
    role: 'CEO & Founder',
    imageSrc: '/images/jane.jpg',
    bio: 'Passionate about innovation and sustainability.',
  },
  {
    name: 'John Smith',
    role: 'Lead Developer',
    imageSrc: '/images/john.jpg',
    bio: 'Expert in React, TypeScript, and building scalable solutions.',
  },
  // Add more members as needed
];

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
        <p className="text-lg text-gray-600">
          We are a team of passionate individuals committed to delivering the best products and services to our customers.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Our Mission</h2>
        <p className="text-center text-gray-600">
          To innovate and lead in our industry by focusing on customer satisfaction and sustainable growth.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">Meet the Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div key={member.name} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
              <img
                src={member.imageSrc}
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
              <p className="text-sm text-gray-500 mt-2">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
