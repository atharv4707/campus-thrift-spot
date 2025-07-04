
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navbar from '@/components/Navbar';
import { 
  Star, 
  MapPin, 
  Calendar, 
  Settings, 
  Package,
  Heart,
  MessageSquare,
  TrendingUp
} from 'lucide-react';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('listings');

  const userStats = {
    itemsSold: 12,
    totalEarnings: '$450',
    rating: 4.8,
    reviewCount: 24,
    joinDate: 'September 2023'
  };

  const myListings = [
    {
      id: 1,
      title: 'TI-84 Plus Calculator',
      price: '$45',
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=300&fit=crop',
      status: 'active',
      views: 23,
      likes: 5
    },
    {
      id: 2,
      title: 'Chemistry Textbook',
      price: '$80',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop',
      status: 'sold',
      views: 45,
      likes: 8
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Profile Header */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold">
                SM
              </div>
              
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900">Sarah Martinez</h1>
                    <p className="text-gray-600">Computer Science Student</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium">{userStats.rating}</span>
                      <span className="text-gray-500">({userStats.reviewCount} reviews)</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>Engineering Building</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>Member since {userStats.joinDate}</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{userStats.itemsSold}</div>
                    <div className="text-sm text-gray-600">Items Sold</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">{userStats.totalEarnings}</div>
                    <div className="text-sm text-gray-600">Total Earned</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">{userStats.rating}</div>
                    <div className="text-sm text-gray-600">Rating</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <Button>
                  <Settings className="h-4 w-4 mr-2" />
                  Edit Profile
                </Button>
                <Button variant="outline">
                  <Package className="h-4 w-4 mr-2" />
                  Sell Item
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Profile Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-6">
            <TabsTrigger value="listings">My Listings</TabsTrigger>
            <TabsTrigger value="favorites">Favorites</TabsTrigger>
            <TabsTrigger value="messages">Messages</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>

          <TabsContent value="listings">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {myListings.map((item) => (
                <Card key={item.id} className="card-hover">
                  <div className="aspect-square bg-gray-200 relative">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover rounded-t-lg"
                    />
                    <Badge 
                      className={`absolute top-3 right-3 ${
                        item.status === 'active' ? 'bg-green-600' : 'bg-gray-600'
                      }`}
                    >
                      {item.status}
                    </Badge>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-lg font-bold text-primary mb-3">{item.price}</p>
                    
                    <div className="flex justify-between items-center text-sm text-gray-600">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <TrendingUp className="h-4 w-4" />
                          <span>{item.views} views</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Heart className="h-4 w-4" />
                          <span>{item.likes}</span>
                        </div>
                      </div>
                      <Button size="sm" variant="outline">
                        Edit
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="favorites">
            <div className="text-center py-12">
              <Heart className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No favorites yet</h3>
              <p className="text-gray-600">Items you like will appear here</p>
            </div>
          </TabsContent>

          <TabsContent value="messages">
            <div className="text-center py-12">
              <MessageSquare className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No messages</h3>
              <p className="text-gray-600">Your conversations will appear here</p>
            </div>
          </TabsContent>

          <TabsContent value="reviews">
            <div className="space-y-4">
              {[1, 2, 3].map((review) => (
                <Card key={review}>
                  <CardContent className="p-4">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="font-medium">Alex K.</span>
                          <div className="flex items-center">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                          <span className="text-sm text-gray-500">2 days ago</span>
                        </div>
                        <p className="text-gray-700">Great seller! Item was exactly as described and pickup was smooth.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Profile;
