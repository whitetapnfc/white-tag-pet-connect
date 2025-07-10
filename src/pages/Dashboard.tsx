
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, QrCode, Calendar, Settings, Heart, Phone, MessageCircle, Download } from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [subscriptionStatus] = useState({
    isActive: false,
    daysRemaining: 0,
    planType: "Annual"
  });

  const [pets] = useState([
    {
      id: 1,
      name: "Fluffy",
      type: "Cat",
      breed: "Persian",
      photo: "/placeholder.svg",
      username: "fluffy_the_cat",
      qrGenerated: true
    },
    {
      id: 2,
      name: "Bruno",
      type: "Dog",
      breed: "Golden Retriever",
      photo: "/placeholder.svg",
      username: "bruno_golden",
      qrGenerated: false
    }
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Header */}
      <header className="bg-background/80 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Heart className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-2xl font-bold text-primary">WhiteTag</span>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </Button>
            <Button variant="ghost" size="sm">
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome back, Pet Parent! 🐾</h1>
          <p className="text-muted-foreground">Manage your pets and keep them safe with WhiteTag</p>
        </div>

        {/* Subscription Status */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Subscription Status
              {!subscriptionStatus.isActive && (
                <Badge variant="destructive">Inactive</Badge>
              )}
              {subscriptionStatus.isActive && (
                <Badge variant="default">Active</Badge>
              )}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {!subscriptionStatus.isActive ? (
              <div className="text-center py-6">
                <Calendar className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                <p className="text-lg font-medium mb-2">Subscription Not Active</p>
                <p className="text-muted-foreground mb-4">
                  Contact our admin to activate your ₹599/year subscription and unlock all features
                </p>
                <div className="flex justify-center space-x-4">
                  <Button>
                    <Phone className="w-4 h-4 mr-2" />
                    Call Admin
                  </Button>
                  <Button variant="outline">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp Admin
                  </Button>
                </div>
              </div>
            ) : (
              <div className="text-center py-4">
                <p className="text-lg font-medium text-green-600">
                  Active - {subscriptionStatus.daysRemaining} days remaining
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Pet Management */}
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Your Pets</h2>
              <Link to="/dashboard/add-pet">
                <Button>
                  <Plus className="w-4 h-4 mr-2" />
                  Add Pet
                </Button>
              </Link>
            </div>

            <div className="grid gap-6">
              {pets.map((pet) => (
                <Card key={pet.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <img
                        src={pet.photo}
                        alt={pet.name}
                        className="w-16 h-16 rounded-full object-cover bg-muted"
                      />
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold">{pet.name}</h3>
                        <p className="text-muted-foreground">{pet.type} • {pet.breed}</p>
                        <p className="text-sm text-primary">whitetag.com/pet/{pet.username}</p>
                      </div>
                      <div className="flex flex-col space-y-2">
                        {pet.qrGenerated ? (
                          <Button size="sm" variant="outline">
                            <Download className="w-4 h-4 mr-2" />
                            Download QR
                          </Button>
                        ) : (
                          <Button size="sm">
                            <QrCode className="w-4 h-4 mr-2" />
                            Generate QR
                          </Button>
                        )}
                        <Button size="sm" variant="ghost">
                          Edit Pet
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Quick Stats</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Total Pets</span>
                    <span className="font-semibold">{pets.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">QR Codes Generated</span>
                    <span className="font-semibold">{pets.filter(p => p.qrGenerated).length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Profile Views</span>
                    <span className="font-semibold">127</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Need Help?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <Phone className="w-4 h-4 mr-2" />
                    Contact Support
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp Help
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
