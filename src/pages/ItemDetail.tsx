import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Navbar from '@/components/Navbar';
import { 
  ArrowLeft, 
  MapPin, 
  Star, 
  Heart, 
  Share2, 
  MessageSquare,
  Phone,
  Mail,
  Calendar,
  Clock
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ItemDetail = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const [showContactForm, setShowContactForm] = useState(false);
  const [message, setMessage] = useState('');
  const [buyerContact, setBuyerContact] = useState('');

  // Mock item data - in real app, this would be fetched based on ID
  const item = {
    id: 1,
    title: 'Scientific Calculator TI-84 Plus',
    price: '$45',
    originalPrice: '$120',
    images: [
      'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600&h=400&fit=crop'
    ],
    seller: {
      name: 'Sarah Martinez',
      rating: 4.9,
      reviewCount: 24,
      joinDate: 'September 2023',
      avatar: 'SM'
    },
    location: 'Engineering Building',
    condition: 'Like New',
    timePosted: '2 hours ago',
    category: 'calculators',
    description: 'Barely used scientific calculator, perfect for math and engineering courses. Includes original box, manual, and protective case. All functions work perfectly. Selling because I graduated and no longer need it.',
    features: [
      'Graphing capabilities',
      'Programming functions',
      'Statistical analysis',
      'Original packaging included',
      'Protective case included'
    ],
    contactMethod: 'email',
    views: 45,
    interested: 8
  };

  // Mock suggested items - in real app, this would be fetched based on category
  const suggestedItems = [
    {
      id: 2,
      title: 'Graphing Calculator TI-83',
      price: '$35',
      originalPrice: '$90',
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=300&h=200&fit=crop',
      seller: 'Mike R.',
      condition: 'Good',
      rating: 4.7,
      timePosted: '1d ago'
    },
    {
      id: 3,
      title: 'Scientific Calculator Casio',
      price: '$25',
      originalPrice: '$60',
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=300&h=200&fit=crop',
      seller: 'Emma L.',
      condition: 'Like New',
      rating: 4.8,
      timePosted: '3h ago'
    },
    {
      id: 4,
      title: 'Engineering Calculator HP',
      price: '$60',
      originalPrice: '$150',
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=300&h=200&fit=crop',
      seller: 'David K.',
      condition: 'Excellent',
      rating: 5.0,
      timePosted: '2d ago'
    },
    {
      id: 5,
      title: 'Basic Calculator Set',
      price: '$15',
      originalPrice: '$40',
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=300&h=200&fit=crop',
      seller: 'Lisa T.',
      condition: 'Good',
      rating: 4.5,
      timePosted: '5h ago'
    }
  ];

  const handleContactSeller = () => {
    if (!message.trim() || !buyerContact.trim()) {
      toast({
        title: "Missing Information",
        description: "Please fill in your contact details and message.",
        variant: "destructive"
      });
      return;
    }

    // Here you would send the message to the seller
    console.log('Message sent:', { message, buyerContact, itemId: id });
    
    toast({
      title: "Message Sent!",
      description: "The seller will receive your message and contact you soon.",
    });

    setMessage('');
    setBuyerContact('');
    setShowContactForm(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Back Button */}
        <div className="mb-6">
          <Link to="/browse">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Browse
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Images and Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Image Gallery */}
            <Card>
              <CardContent className="p-0">
                <div className="aspect-square bg-gray-200 relative rounded-t-lg overflow-hidden">
                  <img 
                    src={item.images[0]} 
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 flex gap-2">
                    <Button size="sm" variant="ghost" className="bg-white/80 hover:bg-white">
                      <Heart className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="bg-white/80 hover:bg-white">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                  <Badge className="absolute top-4 left-4 bg-green-600">
                    {item.condition}
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Item Details */}
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-2xl">{item.title}</CardTitle>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-3xl font-bold text-primary">{item.price}</span>
                      {item.originalPrice && (
                        <span className="text-lg text-gray-500 line-through">{item.originalPrice}</span>
                      )}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>{item.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>Posted {item.timePosted}</span>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Description</h3>
                  <p className="text-gray-700">{item.description}</p>
                </div>

                {item.features && (
                  <div>
                    <h3 className="font-semibold mb-2">Features</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      {item.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="flex gap-4 text-sm text-gray-600">
                  <span>{item.views} views</span>
                  <span>{item.interested} interested</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Seller Info and Contact */}
          <div className="space-y-6">
            {/* Seller Information */}
            <Card>
              <CardHeader>
                <CardTitle>Seller Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                    {item.seller.avatar}
                  </div>
                  <div>
                    <p className="font-semibold">{item.seller.name}</p>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm">{item.seller.rating} ({item.seller.reviewCount} reviews)</span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-600">Member since {item.seller.joinDate}</p>
              </CardContent>
            </Card>

            {/* Contact Seller */}
            <Card>
              <CardHeader>
                <CardTitle>Contact Seller</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {!showContactForm ? (
                  <Button 
                    onClick={() => setShowContactForm(true)}
                    className="w-full"
                  >
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                ) : (
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="buyerContact">Your Contact Info</Label>
                      <Input
                        id="buyerContact"
                        value={buyerContact}
                        onChange={(e) => setBuyerContact(e.target.value)}
                        placeholder="Your email or phone"
                        className="mt-1"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Hi! I'm interested in your item. Is it still available?"
                        className="mt-1"
                        rows={4}
                      />
                    </div>
                    
                    <div className="flex gap-2">
                      <Button onClick={handleContactSeller} className="flex-1">
                        Send Message
                      </Button>
                      <Button 
                        variant="outline" 
                        onClick={() => setShowContactForm(false)}
                      >
                        Cancel
                      </Button>
                    </div>
                  </div>
                )}

                <div className="border-t pt-4">
                  <p className="text-sm text-gray-600 mb-2">Safety Tips:</p>
                  <ul className="text-xs text-gray-500 space-y-1">
                    <li>• Meet in a public place on campus</li>
                    <li>• Inspect the item before purchasing</li>
                    <li>• Bring a friend if possible</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Suggested Items Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Similar Items You Might Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {suggestedItems.map((suggestedItem) => (
              <Link key={suggestedItem.id} to={`/item/${suggestedItem.id}`}>
                <Card className="card-hover cursor-pointer overflow-hidden">
                  <div className="aspect-square bg-gray-200 relative">
                    <img 
                      src={suggestedItem.image} 
                      alt={suggestedItem.title}
                      className="w-full h-full object-cover"
                    />
                    <Badge className="absolute top-3 left-3 bg-green-600">
                      {suggestedItem.condition}
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
                    <h3 className="font-semibold text-lg mb-2 line-clamp-2">{suggestedItem.title}</h3>
                    
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xl font-bold text-primary">{suggestedItem.price}</span>
                      <span className="text-sm text-gray-500 line-through">{suggestedItem.originalPrice}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span>{suggestedItem.rating}</span>
                      </div>
                      <span>•</span>
                      <span>{suggestedItem.seller}</span>
                    </div>
                    
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <Clock className="h-4 w-4" />
                      <span>{suggestedItem.timePosted}</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
