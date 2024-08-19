import React from 'react';
import usabilityImage from '../../../../public/About us/About us Elements/Usability.png';
import protectionImage from '../../../../public/About us/About us Elements/Protection.png';
import professionalismImage from '../../../../public/About us/About us Elements/Profession.png' ;
import Image from 'next/image';

const PartnerProgram = () => {
  const programs = [
    {
      title: 'Usability',
      subtitle: 'all we do is for our users',
      description: 'Our main principle is simplicity and convenience of all our projects. All of our products are focused on ensuring that our users have the ability to defend themselves easier in the digital world. We believe that the user does not have to think how to protect his computer from cyber-threats, because it is our main task. It is important to create such products which can be easily used without any external help. If someone needs revision help it means that the program is not clear enough.',
      image: usabilityImage,
    },
    {
      title: 'Protection',
      subtitle: 'must be available',
      description: 'Our main advantage is accessibility. Available technology distinguishes us from other manufacturers of antivirus software and allows everybody to take advantage of such IT product. This applies to applications for end users, but also to applications for developers and technology partners that require the use of available and reliable solutions. For these users, we offer various options of all our developed technology to create its own products.',
      image: protectionImage,
    },
    {
      title: 'Professionalism',
      subtitle: 'is the key to success',
      description: 'Cluster Team is a local team of professionals in the development of antivirus software. Some our specialists have an experience in antivirus area more than 15 years. We are fully aware that the success of the project depends on people who work in it. We are always interested in people who are ready to learn and want to achieve professional heights.',
      image: professionalismImage,
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl lg:px-10 mx-auto text-center">
        <h2 className="text-xl lg:text-4xl font-bold mb-5">PARTNER PROGRAMS</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {programs.map((program, index) => (
            <div key={index} className="text-center">
              <Image src={program.image} alt={program.title} className="w-[70px] h-[70px] mx-auto mb-6 bg-green-500 rounded-full
              p-5 object-cover" />
              <h3 className="text-2xl font-semibold mb-2">{program.title}</h3>
              <h4 className="text-green-500 font-medium mb-4">{program.subtitle}</h4>
              <p className="text-gray-700 text-center text-[14px]">{program.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerProgram;
