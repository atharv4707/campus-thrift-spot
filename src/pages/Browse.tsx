import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Navbar from '@/components/Navbar';
import { Search, Filter, MapPin, Clock, Star, Heart } from 'lucide-react';

const Browse = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('newest');

  const items = [
    {
      id: 1,
      title: 'Scientific Calculator TI-84 Plus',
      price: '$45',
      originalPrice: '$120',
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=300&fit=crop',
      seller: 'Sarah M.',
      location: 'Engineering Building',
      condition: 'Like New',
      timePosted: '2h ago',
      rating: 4.9,
      category: 'calculators',
      description: 'Barely used scientific calculator, perfect for math and engineering courses.'
    },
    {
      id: 2,
      title: 'MacBook Pro 13" 2020',
      price: '$800',
      originalPrice: '$1299',
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=300&fit=crop',
      seller: 'Alex K.',
      location: 'Computer Science Dorm',
      condition: 'Good',
      timePosted: '5h ago',
      rating: 4.8,
      category: 'electronics',
      description: 'Great laptop for coding and design work. Includes charger.'
    },
    {
      id: 3,
      title: 'Organic Chemistry Textbook',
      price: '$80',
      originalPrice: '$250',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop',
      seller: 'Mike R.',
      location: 'Science Library',
      condition: 'Good',
      timePosted: '1d ago',
      rating: 4.7,
      category: 'textbooks',
      description: 'Complete textbook with all chapters. Minor highlighting.'
    },
    {
      id: 4,
      title: 'Drafting Set Professional',
      price: '$25',
      originalPrice: '$65',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop',
      seller: 'Emma L.',
      location: 'Architecture Building',
      condition: 'Excellent',
      timePosted: '3h ago',
      rating: 5.0,
      category: 'supplies',
      description: 'Complete drafting set with compass, rulers, and case.'
    },
    {
      id: 5,
      title: 'iPad Pro with Apple Pencil',
      price: '$400',
      originalPrice: '$800',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop',
      seller: 'David W.',
      location: 'Design Studio',
      condition: 'Good',
      timePosted: '6h ago',
      rating: 4.6,
      category: 'electronics',
      description: 'Perfect for digital art and note-taking. Includes Apple Pencil.'
    },
    {
      id: 6,
      title: 'Physics Textbook Bundle',
      price: '$120',
      originalPrice: '$400',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
      seller: 'Lisa T.',
      location: 'Physics Department',
      condition: 'Like New',
      timePosted: '4h ago',
      rating: 4.9,
      category: 'textbooks',
      description: 'Complete physics series for undergraduate courses.'
    }
  ];

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'calculators', label: 'Calculators' },
    { value: 'textbooks', label: 'Textbooks' },
    { value: 'electronics', label: 'Electronics' },
    { value: 'supplies', label: 'Art & Supplies' }
  ];

  const filteredItems = items.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Browse Items</h1>
          <p className="text-gray-600">Find great deals from fellow students</p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="md:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Search items..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Sort */}
            <div>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger>
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredItems.length} item{filteredItems.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <Link key={item.id} to={`/item/${item.id}`}>
              <Card className="card-hover cursor-pointer overflow-hidden">
                <div className="aspect-square bg-gray-200 relative">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <Badge className="absolute top-3 left-3 bg-green-600">
                    {item.condition}
                  </Badge>
                  <Button 
                    size="sm" 
                    variant="ghost" 
                    className="absolute top-3 right-3 bg-white/80 hover:bg-white"
                    onClick={(e) => e.preventDefault()}
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg mb-2 line-clamp-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">{item.description}</p>
                  
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xl font-bold text-primary">{item.price}</span>
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
                      <span className="truncate">{item.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{item.timePosted}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No items found matching your criteria.</p>
            <Button className="mt-4" variant="outline">
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Browse;
