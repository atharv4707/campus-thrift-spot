
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import Navbar from '@/components/Navbar';
import { 
  Users, 
  Package, 
  DollarSign, 
  TrendingUp, 
  Search,
  MoreHorizontal,
  Shield,
  AlertTriangle
} from 'lucide-react';

const Admin = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const stats = [
    { label: 'Total Users', value: '2,547', icon: Users, change: '+12%', color: 'text-blue-600' },
    { label: 'Active Listings', value: '1,234', icon: Package, change: '+8%', color: 'text-green-600' },
    { label: 'Total Sales', value: '$45,670', icon: DollarSign, change: '+23%', color: 'text-purple-600' },
    { label: 'Success Rate', value: '94.2%', icon: TrendingUp, change: '+3%', color: 'text-orange-600' }
  ];

  const recentUsers = [
    { id: 1, name: 'Sarah Martinez', email: 'sarah.m@stanford.edu', university: 'Stanford', joinDate: '2024-01-15', status: 'active' },
    { id: 2, name: 'Alex Johnson', email: 'alex.j@berkeley.edu', university: 'UC Berkeley', joinDate: '2024-01-14', status: 'active' },
    { id: 3, name: 'Mike Rodriguez', email: 'mike.r@ucla.edu', university: 'UCLA', joinDate: '2024-01-13', status: 'pending' },
    { id: 4, name: 'Emma Liu', email: 'emma.l@mit.edu', university: 'MIT', joinDate: '2024-01-12', status: 'active' }
  ];

  const reportedItems = [
    { id: 1, title: 'Suspicious Calculator Listing', reporter: 'John D.', item: 'TI-84 Calculator', reason: 'Fake product', status: 'pending' },
    { id: 2, title: 'Inappropriate Images', reporter: 'Jane S.', item: 'MacBook Pro', reason: 'Inappropriate content', status: 'reviewed' },
    { id: 3, title: 'Overpriced Item', reporter: 'Mike K.', item: 'Textbook Bundle', reason: 'Price manipulation', status: 'resolved' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
          <p className="text-gray-600">Manage your campus marketplace</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    <p className={`text-sm ${stat.color} flex items-center gap-1`}>
                      <TrendingUp className="h-4 w-4" />
                      {stat.change}
                    </p>
                  </div>
                  <div className={`p-3 rounded-lg bg-gray-100`}>
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <Tabs defaultValue="users" className="space-y-6">
          <TabsList>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="listings">Listings</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="users">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>User Management</CardTitle>
                  <div className="flex gap-4">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <Input
                        placeholder="Search users..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10 w-64"
                      />
                    </div>
                    <Button>Export</Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>University</TableHead>
                      <TableHead>Join Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentUsers.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell className="font-medium">{user.name}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.university}</TableCell>
                        <TableCell>{user.joinDate}</TableCell>
                        <TableCell>
                          <Badge variant={user.status === 'active' ? 'default' : 'secondary'}>
                            {user.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="listings">
            <Card>
              <CardHeader>
                <CardTitle>Listing Management</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <Package className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Listing management coming soon</h3>
                  <p className="text-gray-600">Advanced listing controls and moderation tools</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reports">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-orange-500" />
                  Reported Items
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Report</TableHead>
                      <TableHead>Reporter</TableHead>
                      <TableHead>Item</TableHead>
                      <TableHead>Reason</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {reportedItems.map((report) => (
                      <TableRow key={report.id}>
                        <TableCell className="font-medium">{report.title}</TableCell>
                        <TableCell>{report.reporter}</TableCell>
                        <TableCell>{report.item}</TableCell>
                        <TableCell>{report.reason}</TableCell>
                        <TableCell>
                          <Badge 
                            variant={
                              report.status === 'pending' ? 'destructive' : 
                              report.status === 'reviewed' ? 'secondary' : 'default'
                            }
                          >
                            {report.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline">Review</Button>
                            <Button size="sm">Resolve</Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics">
            <Card>
              <CardHeader>
                <CardTitle>Analytics Dashboard</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <TrendingUp className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Analytics coming soon</h3>
                  <p className="text-gray-600">Detailed insights and reporting tools</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;
