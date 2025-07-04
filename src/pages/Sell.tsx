
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Navbar from '@/components/Navbar';
import { Camera, MapPin, DollarSign, Package } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Sell = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    originalPrice: '',
    category: '',
    condition: '',
    location: '',
    contactMethod: '',
    contactInfo: ''
  });

  const categories = [
    { value: 'calculators', label: 'Calculators' },
    { value: 'textbooks', label: 'Textbooks' },
    { value: 'electronics', label: 'Electronics' },
    { value: 'supplies', label: 'Art & Supplies' },
    { value: 'furniture', label: 'Furniture' },
    { value: 'clothing', label: 'Clothing' },
    { value: 'other', label: 'Other' }
  ];

  const conditions = [
    { value: 'like-new', label: 'Like New' },
    { value: 'excellent', label: 'Excellent' },
    { value: 'good', label: 'Good' },
    { value: 'fair', label: 'Fair' }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.title || !formData.price || !formData.category || !formData.condition) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Here you would normally save to database
    console.log('Item submitted:', formData);
    
    toast({
      title: "Item Listed Successfully!",
      description: "Your item has been added to the marketplace.",
    });

    // Reset form
    setFormData({
      title: '',
      description: '',
      price: '',
      originalPrice: '',
      category: '',
      condition: '',
      location: '',
      contactMethod: '',
      contactInfo: ''
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Sell Your Item</h1>
          <p className="text-gray-600">List your item and connect with potential buyers</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Package className="h-5 w-5" />
              Item Details
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Item Photos */}
              <div>
                <Label htmlFor="photos">Photos</Label>
                <div className="mt-2 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer">
                  <Camera className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 mb-2">Click to upload photos</p>
                  <p className="text-sm text-gray-500">PNG, JPG up to 10MB each</p>
                </div>
              </div>

              {/* Basic Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="title">Item Title *</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => handleInputChange('title', e.target.value)}
                    placeholder="e.g. TI-84 Plus Calculator"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="category">Category *</Label>
                  <Select value={formData.category} onValueChange={(value) => handleInputChange('category', value)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select category" />
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
              </div>

              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  placeholder="Describe your item's condition, features, and any included accessories..."
                  className="mt-1"
                  rows={4}
                />
              </div>

              {/* Pricing */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="price">Selling Price * ($)</Label>
                  <div className="relative mt-1">
                    <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                      id="price"
                      type="number"
                      value={formData.price}
                      onChange={(e) => handleInputChange('price', e.target.value)}
                      placeholder="45"
                      className="pl-10"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="originalPrice">Original Price ($) (Optional)</Label>
                  <div className="relative mt-1">
                    <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                      id="originalPrice"
                      type="number"
                      value={formData.originalPrice}
                      onChange={(e) => handleInputChange('originalPrice', e.target.value)}
                      placeholder="120"
                      className="pl-10"
                    />
                  </div>
                </div>
              </div>

              {/* Condition and Location */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="condition">Condition *</Label>
                  <Select value={formData.condition} onValueChange={(value) => handleInputChange('condition', value)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select condition" />
                    </SelectTrigger>
                    <SelectContent>
                      {conditions.map((condition) => (
                        <SelectItem key={condition.value} value={condition.value}>
                          {condition.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="location">Pickup Location</Label>
                  <div className="relative mt-1">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                      id="location"
                      value={formData.location}
                      onChange={(e) => handleInputChange('location', e.target.value)}
                      placeholder="e.g. Engineering Building, Room 101"
                      className="pl-10"
                    />
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="contactMethod">Preferred Contact Method</Label>
                    <Select value={formData.contactMethod} onValueChange={(value) => handleInputChange('contactMethod', value)}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="How should buyers contact you?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="email">Email</SelectItem>
                        <SelectItem value="phone">Phone</SelectItem>
                        <SelectItem value="message">Campus Message</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="contactInfo">Contact Details</Label>
                    <Input
                      id="contactInfo"
                      value={formData.contactInfo}
                      onChange={(e) => handleInputChange('contactInfo', e.target.value)}
                      placeholder="Your email or phone number"
                      className="mt-1"
                    />
                  </div>
                </div>
              </div>

              <div className="flex gap-4 pt-6">
                <Button type="submit" className="flex-1">
                  List Item for Sale
                </Button>
                <Button type="button" variant="outline" className="flex-1">
                  Save as Draft
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Sell;
