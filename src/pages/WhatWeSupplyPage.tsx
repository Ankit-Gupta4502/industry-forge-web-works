
import React from 'react';
import { Button } from '@/components/ui/button';
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Wrench, Factory, Building2, Forklift, Settings, Check } from 'lucide-react';

const WhatWeSupplyPage = () => {
  const supplyCategories = [
    {
      id: 'manufacturing',
      title: 'Manufacturing Equipment',
      icon: <Factory className="h-10 w-10 text-primary" />,
      description: 'High-performance manufacturing machinery designed for precision, efficiency, and durability.',
      items: [
        'Industrial Robot Arms',
        'CNC Machines',
        'Hydraulic Press Systems',
        'Assembly Line Equipment',
        'Quality Control Systems',
        'Automated Packaging Solutions'
      ]
    },
    {
      id: 'construction',
      title: 'Construction Machinery',
      icon: <Building2 className="h-10 w-10 text-primary" />,
      description: 'Powerful and reliable construction equipment for projects of any scale.',
      items: [
        'Excavators & Bulldozers',
        'Concrete Mixers & Pumps',
        'Tower Cranes',
        'Mobile Cranes',
        'Road Construction Equipment',
        'Foundation Drilling Machinery'
      ]
    },
    {
      id: 'material-handling',
      title: 'Material Handling Solutions',
      icon: <Forklift className="h-10 w-10 text-primary" />,
      description: 'Efficient systems for moving, storing, and controlling materials throughout your facility.',
      items: [
        'Forklifts & Pallet Jacks',
        'Conveyor Belt Systems',
        'Automated Storage Solutions',
        'Overhead Cranes',
        'Order Picking Systems',
        'Loading Dock Equipment'
      ]
    },
    {
      id: 'industrial-parts',
      title: 'Industrial Parts & Components',
      icon: <Settings className="h-10 w-10 text-primary" />,
      description: 'Essential components and replacement parts for industrial machinery maintenance and upgrades.',
      items: [
        'Industrial Gearboxes',
        'Hydraulic Systems',
        'Electric Motors & Drives',
        'Bearings & Bushings',
        'Industrial Pumps',
        'Pneumatic Components'
      ]
    },
  ];

  const serviceOfferingData = [
    {
      service: 'Equipment Leasing',
      manufacturing: true,
      construction: true,
      material: true,
      parts: false,
    },
    {
      service: 'Custom Engineering',
      manufacturing: true,
      construction: true,
      material: true,
      parts: true,
    },
    {
      service: 'Maintenance & Repair',
      manufacturing: true,
      construction: true,
      material: true,
      parts: true,
    },
    {
      service: 'Installation & Setup',
      manufacturing: true,
      construction: true,
      material: true,
      parts: false,
    },
    {
      service: 'Operator Training',
      manufacturing: true,
      construction: true,
      material: true,
      parts: false,
    },
    {
      service: 'Technical Consultation',
      manufacturing: true,
      construction: true,
      material: true,
      parts: true,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">What We Supply</h1>
            <p className="text-xl text-blue-100">
              Discover our comprehensive range of industrial equipment, machinery, and services designed to power your business operations.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Your One-Stop Industrial Equipment Source</h2>
            <p className="text-lg text-gray-600">
              With over 25 years of experience, we provide top-quality industrial equipment and solutions for businesses of all sizes. Whether you need manufacturing equipment, construction machinery, material handling solutions, or industrial components, we have you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Supply Categories Section */}
      <section className="bg-gray-50 section-padding">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Supply Categories</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {supplyCategories.map((category) => (
              <div key={category.id} className="bg-white shadow-md rounded-lg overflow-hidden">
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    {category.icon}
                    <h3 className="text-2xl font-bold">{category.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">{category.description}</p>
                  <ul className="space-y-3">
                    {category.items.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 mr-3 text-green-500 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border-t p-4 bg-gray-50">
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => window.location.href = `/products`}
                  >
                    Browse {category.title}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Table */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-6 text-center">Service Offerings by Category</h2>
          <p className="text-lg text-gray-600 text-center mb-10">
            In addition to our equipment supply, we offer a range of services to ensure your operations run smoothly.
          </p>
          
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[250px]">Service</TableHead>
                  <TableHead>Manufacturing</TableHead>
                  <TableHead>Construction</TableHead>
                  <TableHead>Material Handling</TableHead>
                  <TableHead>Industrial Parts</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {serviceOfferingData.map((row, idx) => (
                  <TableRow key={idx}>
                    <TableCell className="font-medium">{row.service}</TableCell>
                    <TableCell>{row.manufacturing ? <Check className="h-5 w-5 text-green-500" /> : null}</TableCell>
                    <TableCell>{row.construction ? <Check className="h-5 w-5 text-green-500" /> : null}</TableCell>
                    <TableCell>{row.material ? <Check className="h-5 w-5 text-green-500" /> : null}</TableCell>
                    <TableCell>{row.parts ? <Check className="h-5 w-5 text-green-500" /> : null}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white section-padding">
        <div className="container-custom text-center max-w-4xl mx-auto">
          <Wrench size={48} className="text-secondary mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Equip Your Business?</h2>
          <p className="text-lg mb-8 text-gray-300">
            Contact our equipment specialists today to discuss your specific requirements and discover how our solutions can help your business thrive.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-secondary">View Products Catalog</Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/20">
              Request Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhatWeSupplyPage;
