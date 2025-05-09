
import React from 'react';
import { Wrench, Factory, Building, TruckFront } from 'lucide-react';

const AboutPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About MachTech Industries</h1>
            <p className="text-xl text-blue-100">
              With over three decades of experience, we're committed to providing 
              top-quality industrial machinery and exceptional service worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1493962853295-0fd70327578a" 
                alt="Company Headquarters" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="lg:w-1/2 space-y-6">
              <h2 className="section-heading">Our Story</h2>
              <p className="text-gray-700">
                Founded in 1985, MachTech Industries began as a small equipment supplier with a big vision: 
                to provide industrial businesses with reliable, innovative machinery backed by exceptional service.
              </p>
              <p className="text-gray-700">
                Today, we've grown into a global leader in industrial equipment solutions, serving clients across 
                manufacturing, construction, logistics, and more. Our commitment to quality and customer satisfaction
                remains at the core of everything we do.
              </p>
              <div className="pt-4 grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <p className="text-4xl font-bold text-primary">30+</p>
                  <p className="text-gray-700">Years Experience</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <p className="text-4xl font-bold text-primary">500+</p>
                  <p className="text-gray-700">Projects Completed</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <p className="text-4xl font-bold text-primary">50+</p>
                  <p className="text-gray-700">Countries Served</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <p className="text-4xl font-bold text-primary">98%</p>
                  <p className="text-gray-700">Client Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-gray-50 section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-heading">Our Vision & Mission</h2>
            <p className="text-gray-600">
              Driving industrial innovation through quality equipment and exceptional service
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="mb-4 inline-block p-3 bg-primary/10 rounded-full">
                <Wrench size={32} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-700">
                To be the global leader in industrial machinery solutions, recognized for our innovation, 
                reliability, and commitment to helping businesses thrive through superior equipment and support.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="mb-4 inline-block p-3 bg-secondary/10 rounded-full">
                <Factory size={32} className="text-secondary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-700">
                To provide high-quality industrial machinery and expert technical support that empowers 
                businesses to maximize productivity, efficiency, and growth while maintaining the highest 
                standards of safety and environmental responsibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-heading">Our Core Values</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              The principles that guide our business operations and relationships
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Quality",
                desc: "We never compromise on the quality of our products and services.",
                icon: <Wrench className="h-10 w-10 text-primary" />
              },
              {
                title: "Innovation",
                desc: "We continuously seek better solutions to meet evolving industry needs.",
                icon: <Gear className="h-10 w-10 text-primary" />
              },
              {
                title: "Integrity",
                desc: "We conduct business with honesty, transparency and ethical standards.",
                icon: <Building className="h-10 w-10 text-primary" />
              },
              {
                title: "Customer Focus",
                desc: "We prioritize our customers' success and satisfaction above all else.",
                icon: <TruckFront className="h-10 w-10 text-primary" />
              }
            ].map((value, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="mb-4 flex justify-center">{value.icon}</div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-50 section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-heading">Our Leadership Team</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Meet the experts behind our success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Robert Johnson",
                position: "Chief Executive Officer",
                image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&h=256&q=80"
              },
              {
                name: "Sarah Williams",
                position: "Chief Operations Officer",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&h=256&q=80"
              },
              {
                name: "Michael Chen",
                position: "Chief Technology Officer",
                image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&h=256&q=80"
              },
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover object-center"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-gray-600">{member.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
