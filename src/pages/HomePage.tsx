
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Factory, Forklift, Settings, Wrench, ArrowRight } from 'lucide-react';

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white">
        <div className="container-custom py-20 md:py-32 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <h1 className="hero-heading">
              Industrial Machinery <span className="text-secondary">Solutions</span> For Your Business
            </h1>
            <p className="text-lg text-gray-300">
              Leading provider of high-quality industrial equipment and machinery with over 30 years of experience.
              Elevate your operations with our cutting-edge solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="btn-secondary" asChild>
                <Link to="/products">View Products</Link>
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/20">
                Contact Us
              </Button>
            </div>
          </div>
          <div className="flex-1">
            <img 
              src="https://images.unsplash.com/photo-1487887235947-a955ef187fcc" 
              alt="Industrial Machinery" 
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-heading">Why Choose MachTech?</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive industrial solutions tailored to meet your specific business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: <Wrench size={40} className="text-primary" />, 
                title: "Quality Equipment", 
                desc: "Durable machinery built to last and perform in demanding industrial environments." 
              },
              { 
                icon: <Factory size={40} className="text-primary" />, 
                title: "Expert Support", 
                desc: "Technical assistance from industry professionals with decades of experience." 
              },
              { 
                icon: <Settings size={40} className="text-primary" />, 
                title: "Custom Solutions", 
                desc: "Tailored machinery configurations designed for your specific operations." 
              },
              { 
                icon: <Forklift size={40} className="text-primary" />, 
                title: "Reliable Service", 
                desc: "Prompt maintenance and repair services to minimize downtime." 
              },
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="mb-4 flex justify-center">{feature.icon}</div>
                <h3 className="font-bold text-xl mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-10">
            <div>
              <h2 className="section-heading mb-2">Featured Products</h2>
              <p className="text-gray-600">Explore our top-rated industrial machinery</p>
            </div>
            <Button variant="link" className="text-primary flex items-center gap-2" asChild>
              <Link to="/products">
                View All Products <ArrowRight size={16} />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
                title: "Industrial Robot Arm",
                desc: "Precision robotic solutions for manufacturing and assembly operations.",
                price: "$45,000"
              },
              {
                img: "https://images.unsplash.com/photo-1493962853295-0fd70327578a",
                title: "Heavy-Duty Excavator",
                desc: "Powerful excavation equipment for construction and mining projects.",
                price: "$125,000"
              },
              {
                img: "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac",
                title: "Mobile Crane",
                desc: "Versatile lifting solutions for various industrial applications.",
                price: "$85,000"
              }
            ].map((product, index) => (
              <div key={index} className="card-industrial group">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={product.img} 
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2">{product.title}</h3>
                  <p className="text-gray-600 mb-4">{product.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-xl text-primary">{product.price}</span>
                    <Button variant="outline" className="text-primary border-primary">Details</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white section-padding">
        <div className="container-custom text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Upgrade Your Industrial Equipment?</h2>
          <p className="text-lg mb-8 text-blue-100">
            Contact our experts today for a personalized consultation and find the perfect machinery solutions for your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-secondary" asChild>
              <Link to="/contact">Request a Quote</Link>
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/20" asChild>
              <Link to="/products">Explore Products</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
