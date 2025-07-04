
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/Navbar';
import { 
  Search, 
  TrendingUp, 
  Users, 
  Shield, 
  Calculator,
  BookOpen,
  Laptop,
  Palette,
  MapPin,
  Clock,
  Star
} from 'lucide-react';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { name: 'Calculators', icon: Calculator, count: '120+', color: 'bg-blue-100 text-blue-600' },
    { name: 'Textbooks', icon: BookOpen, count: '300+', color: 'bg-green-100 text-green-600' },
    { name: 'Electronics', icon: Laptop, count: '85+', color: 'bg-purple-100 text-purple-600' },
    { name: 'Art Supplies', icon: Palette, count: '65+', color: 'bg-orange-100 text-orange-600' },
  ];

  const featuredItems = [
    {
      id: 1,
      title: 'TI-84 Plus Calculator',
      price: '$45',
      originalPrice: '$120',
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=300&fit=crop',
      seller: 'Sarah M.',
      location: 'Engineering Building',
      condition: 'Like New',
      timePosted: '2h ago',
      rating: 4.9
    },
    {
      id: 2,
      title: 'MacBook Pro 2020',
      price: '$800',
      originalPrice: '$1299',
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=300&fit=crop',
      seller: 'Alex K.',
      location: 'Computer Science Dorm',
      condition: 'Good',
      timePosted: '5h ago',
      rating: 4.8
    },
    {
      id: 3,
      title: 'Chemistry Textbook Bundle',
      price: '$80',
      originalPrice: '$250',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop',
      seller: 'Mike R.',
      location: 'Science Library',
      condition: 'Good',
      timePosted: '1d ago',
      rating: 4.7
    }
  ];

  const stats = [
    { label: 'Active Students', value: '2,500+', icon: Users },
    { label: 'Items Sold', value: '1,200+', icon: TrendingUp },
    { label: 'Verified Sellers', value: '98%', icon: Shield }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="gradient-bg text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Buy & Sell on Campus
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Find great deals on textbooks, calculators, and more from fellow students
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search for items..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 py-3 text-lg bg-white text-gray-900 border-0 shadow-lg"
              />
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/browse">Browse Items</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-gray-900" asChild>
              <Link to="/sell">Start Selling</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular Categories</h2>
            <p className="text-xl text-gray-600">Find exactly what you need for your studies</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Link key={index} to="/browse" className="group">
                <Card className="card-hover cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-lg mb-4 ${category.color}`}>
                      <category.icon className="h-8 w-8" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{category.name}</h3>
                    <p className="text-sm text-gray-600">{category.count} items</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Items */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Items</h2>
              <p className="text-gray-600">Great deals from verified sellers</p>
            </div>
            <Button variant="outline" asChild>
              <Link to="/browse">View All</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredItems.map((item) => (
              <Card key={item.id} className="card-hover cursor-pointer overflow-hidden">
                <div className="aspect-video bg-gray-200 relative">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <Badge className="absolute top-3 right-3 bg-green-600">
                    {item.condition}
                  </Badge>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl font-bold text-primary">{item.price}</span>
                    <span className="text-sm text-gray-500 line-through">{item.originalPrice}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span>{item.rating}</span>
                    </div>
                    <span>•</span>
                    <span>{item.seller}</span>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>{item.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{item.timePosted}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Trading?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of students saving money on campus essentials
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
              <Link to="/register">Sign Up Now</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black" asChild>
              <Link to="/login">Login</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
