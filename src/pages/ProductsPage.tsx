import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Wrench, Search, Factory, Settings, Forklift, Building2, SlidersHorizontal } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

const ProductsPage = () => {
  const productCategories = [
    { id: 'all', label: 'All Products' },
    { id: 'manufacturing', label: 'Manufacturing', icon: <Factory size={16} /> },
    { id: 'construction', label: 'Construction', icon: <Building2 size={16} /> },
    { id: 'material-handling', label: 'Material Handling', icon: <Forklift size={16} /> },
    { id: 'industrial-parts', label: 'Industrial Parts', icon: <Settings size={16} /> },
  ];

  const initialProducts = [
    {
      id: 1,
      name: 'Industrial Robot Arm',
      category: 'manufacturing',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e',
      price: '$45,000',
      description: 'High-precision robotic arm designed for assembly line operations with advanced motion control.',
      features: ['6-axis movement', 'Precision control', '200kg payload capacity', 'Integrated safety features'],
    },
    {
      id: 2,
      name: 'Heavy-Duty Excavator',
      category: 'construction',
      image: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a',
      price: '$125,000',
      description: 'Powerful excavation equipment for construction sites and mining operations with exceptional durability.',
      features: ['360° rotation', 'Reinforced bucket', 'Climate controlled cabin', 'Low fuel consumption'],
    },
    {
      id: 3,
      name: 'Hydraulic Press Machine',
      category: 'manufacturing',
      image: 'https://images.unsplash.com/photo-1487887235947-a955ef187fcc',
      price: '$38,500',
      description: 'Versatile hydraulic press for metal forming, stamping, and assembly processes.',
      features: ['200-ton capacity', 'Programmable cycles', 'Quick die change system', 'Energy efficient'],
    },
    {
      id: 4,
      name: 'Electric Forklift',
      category: 'material-handling',
      image: 'https://images.unsplash.com/photo-1465379944081-7f47de8d74ac',
      price: '$32,750',
      description: 'Eco-friendly electric forklift for warehouse operations with enhanced maneuverability.',
      features: ['3-ton lifting capacity', 'Zero emissions', '8-hour battery life', 'Compact design'],
    },
    {
      id: 5,
      name: 'CNC Milling Machine',
      category: 'manufacturing',
      image: 'https://images.unsplash.com/photo-1487887235947-a955ef187fcc',
      price: '$78,900',
      description: 'High-precision CNC milling machine for complex parts manufacturing with advanced control system.',
      features: ['5-axis capability', 'Automated tool changer', 'High-speed spindle', 'Industrial computer control'],
    },
    {
      id: 6,
      name: 'Mobile Crane',
      category: 'construction',
      image: 'https://images.unsplash.com/photo-1465379944081-7f47de8d74ac',
      price: '$85,000',
      description: 'Versatile mobile crane for construction sites with excellent reach and lifting capacity.',
      features: ['50-ton lifting capacity', 'Telescopic boom', 'All-terrain wheels', 'Stabilizing outriggers'],
    },
    {
      id: 7,
      name: 'Conveyor Belt System',
      category: 'material-handling',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e',
      price: '$12,500',
      description: 'Customizable conveyor belt system for efficient material handling in various industries.',
      features: ['Modular design', 'Variable speed control', 'Stainless steel construction', 'Low maintenance'],
    },
    {
      id: 8,
      name: 'Industrial Gearbox',
      category: 'industrial-parts',
      image: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a',
      price: '$4,800',
      description: 'Heavy-duty industrial gearbox designed for power transmission in demanding applications.',
      features: ['Hardened steel gears', 'Oil bath lubrication', 'Cast iron housing', 'Customizable ratio'],
    },
  ];

  const [products, setProducts] = useState(initialProducts);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState('name-asc');
  
  // Effect for filtering and sorting products
  useEffect(() => {
    let filteredProducts = [...initialProducts];
    
    // Apply search filter
    if (searchQuery) {
      filteredProducts = filteredProducts.filter(product => 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    // Apply sorting
    switch (sortOption) {
      case 'name-asc':
        filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name-desc':
        filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case 'price-asc':
        filteredProducts.sort((a, b) => {
          const priceA = parseFloat(a.price.replace(/[^0-9.-]+/g, ''));
          const priceB = parseFloat(b.price.replace(/[^0-9.-]+/g, ''));
          return priceA - priceB;
        });
        break;
      case 'price-desc':
        filteredProducts.sort((a, b) => {
          const priceA = parseFloat(a.price.replace(/[^0-9.-]+/g, ''));
          const priceB = parseFloat(b.price.replace(/[^0-9.-]+/g, ''));
          return priceB - priceA;
        });
        break;
      default:
        break;
    }
    
    setProducts(filteredProducts);
  }, [searchQuery, sortOption]);
  
  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  // Handle tab change to filter by category
  const handleTabChange = (value: string) => {
    if (value === 'all') {
      setProducts(initialProducts);
    } else {
      const filtered = initialProducts.filter(product => product.category === value);
      setProducts(filtered);
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Industrial Equipment & Machinery</h1>
            <p className="text-xl text-blue-100">
              Browse our comprehensive range of high-quality industrial machinery for manufacturing, construction, and material handling.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="section-padding">
        <div className="container-custom">
          {/* Search and Filter */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                <Input 
                  type="search" 
                  placeholder="Search products..." 
                  className="pl-10"
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
              </div>
              <div className="flex gap-2">
                <Select
                  value={sortOption}
                  onValueChange={(value) => setSortOption(value)}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="name-asc">Name (A-Z)</SelectItem>
                    <SelectItem value="name-desc">Name (Z-A)</SelectItem>
                    <SelectItem value="price-asc">Price (Low to High)</SelectItem>
                    <SelectItem value="price-desc">Price (High to Low)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Product Categories Tabs */}
          <Tabs defaultValue="all" className="mb-12" onValueChange={handleTabChange}>
            <TabsList className="mb-8">
              {productCategories.map((category) => (
                <TabsTrigger key={category.id} value={category.id} className="flex items-center gap-2">
                  {category.icon}
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {/* All Products Tab */}
            <TabsContent value="all">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
                {products.length === 0 && (
                  <div className="col-span-3 text-center py-10">
                    <p className="text-lg text-gray-500">No products match your search criteria.</p>
                  </div>
                )}
              </div>
            </TabsContent>
            
            {/* Category-specific Tabs */}
            {productCategories.slice(1).map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {products
                    .filter((product) => product.category === category.id)
                    .map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  {products.filter(p => p.category === category.id).length === 0 && (
                    <div className="col-span-3 text-center py-10">
                      <p className="text-lg text-gray-500">No products match your search criteria in this category.</p>
                    </div>
                  )}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white section-padding">
        <div className="container-custom text-center max-w-4xl mx-auto">
          <Wrench size={48} className="text-secondary mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need a Custom Solution?</h2>
          <p className="text-lg mb-8 text-gray-300">
            Our team of engineers can design and build custom machinery to meet your specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-secondary">Request Custom Quote</Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/20">
              Speak to an Expert
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

// Product Card Component
const ProductCard = ({ product }: { product: any }) => {
  return (
    <div className="card-industrial group">
      <div className="h-56 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <h3 className="font-bold text-xl mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
        <div className="mb-4">
          <span className="font-bold text-xl text-primary">{product.price}</span>
        </div>
        <div className="flex justify-between items-center">
          <Button variant="outline" className="text-primary border-primary">Details</Button>
          <Button>Add to Quote</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
