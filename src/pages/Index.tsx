
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Shield, Smartphone, QrCode, MapPin, Users, Package, Star, Truck } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Header */}
      <header className="border-b bg-background/90 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">WhiteTag</span>
              <p className="text-xs text-muted-foreground">Premium Pet Protection</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/login">
              <Button variant="ghost" className="hover:bg-primary/10">Login</Button>
            </Link>
            <Link to="/register">
              <Button className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 shadow-lg">Get Started</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <Badge className="mb-6 bg-gradient-to-r from-orange-100 to-red-100 text-orange-700 border-orange-200" variant="secondary">
          🇮🇳 Proudly Made in India
        </Badge>
        <h1 className="text-6xl font-bold mb-8 bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">
          Never Lose Your<br />Pet Again
        </h1>
        <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
          Premium metal pet ID tags with QR codes for instant location sharing via WhatsApp. 
          We manufacture and deliver custom tags to keep your furry friends safe.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <Link to="/register">
            <Button size="lg" className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 shadow-lg text-lg px-8 py-6 animate-pulse">
              Order Your Pet Tag
            </Button>
          </Link>
          <Button size="lg" variant="outline" className="border-2 hover:bg-primary/5 text-lg px-8 py-6">
            <Package className="w-5 h-5 mr-2" />
            See Sample Tags
          </Button>
        </div>
        
        {/* Trust indicators */}
        <div className="flex justify-center items-center space-x-8 text-sm text-muted-foreground">
          <div className="flex items-center space-x-2">
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            <span>Premium Quality</span>
          </div>
          <div className="flex items-center space-x-2">
            <Truck className="w-4 h-4 text-green-500" />
            <span>Free Delivery</span>
          </div>
          <div className="flex items-center space-x-2">
            <Shield className="w-4 h-4 text-blue-500" />
            <span>1 Year Warranty</span>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">How WhiteTag Works</h2>
          <p className="text-muted-foreground text-lg">Simple, secure, and effective pet protection in 3 steps</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center hover:shadow-2xl transition-all duration-300 hover:scale-105 border-0 bg-gradient-to-br from-white to-blue-50">
            <CardHeader className="pb-4">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl">Create Profile</CardTitle>
              <CardDescription className="text-base leading-relaxed">
                Upload your pet's photo and details to create a unique digital profile with personalized information
              </CardDescription>
            </CardHeader>
          </Card>
          
          <Card className="text-center hover:shadow-2xl transition-all duration-300 hover:scale-105 border-0 bg-gradient-to-br from-white to-purple-50">
            <CardHeader className="pb-4">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Package className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl">Receive Metal Tag</CardTitle>
              <CardDescription className="text-base leading-relaxed">
                We manufacture and deliver a premium metal tag with QR code on one side and pet name on the other
              </CardDescription>
            </CardHeader>
          </Card>
          
          <Card className="text-center hover:shadow-2xl transition-all duration-300 hover:scale-105 border-0 bg-gradient-to-br from-white to-pink-50">
            <CardHeader className="pb-4">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl">Instant Recovery</CardTitle>
              <CardDescription className="text-base leading-relaxed">
                Anyone who finds your pet can scan the QR code and instantly share their location via WhatsApp
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gradient-to-r from-primary/5 to-purple-500/5 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Premium Features</h2>
            <p className="text-muted-foreground text-lg">Everything you need to keep your pet safe</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <QrCode className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Durable Metal Tags</h3>
              <p className="text-sm text-muted-foreground">Waterproof, scratch-resistant premium metal construction</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <Smartphone className="w-10 h-10 text-green-500 mb-4" />
              <h3 className="font-semibold mb-2">WhatsApp Integration</h3>
              <p className="text-sm text-muted-foreground">Direct location sharing through India's favorite messaging app</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <Shield className="w-10 h-10 text-blue-500 mb-4" />
              <h3 className="font-semibold mb-2">Privacy Controls</h3>
              <p className="text-sm text-muted-foreground">Choose what information to share publicly for safety</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <Users className="w-10 h-10 text-purple-500 mb-4" />
              <h3 className="font-semibold mb-2">Multiple Contacts</h3>
              <p className="text-sm text-muted-foreground">Add family members, neighbors, or pet sitters as contacts</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">Simple Pricing</h2>
          <p className="text-muted-foreground text-lg">One plan, unlimited pets, premium metal tags included</p>
        </div>
        
        <Card className="max-w-lg mx-auto border-0 shadow-2xl bg-gradient-to-br from-white to-purple-50">
          <CardHeader className="text-center pb-8">
            <Badge className="w-fit mx-auto mb-4 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 border-green-200">
              Most Popular
            </Badge>
            <CardTitle className="text-3xl mb-2">Annual Plan</CardTitle>
            <div className="text-5xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent mb-2">₹599</div>
            <CardDescription className="text-lg">per year, everything included</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center text-base">
                <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center mr-3">
                  <Shield className="w-3 h-3 text-white" />
                </div>
                Premium metal pet tag delivered free
              </li>
              <li className="flex items-center text-base">
                <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center mr-3">
                  <Shield className="w-3 h-3 text-white" />
                </div>
                Unlimited pet profiles
              </li>
              <li className="flex items-center text-base">
                <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center mr-3">
                  <Shield className="w-3 h-3 text-white" />
                </div>
                WhatsApp location sharing
              </li>
              <li className="flex items-center text-base">
                <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center mr-3">
                  <Shield className="w-3 h-3 text-white" />
                </div>
                24/7 customer support
              </li>
              <li className="flex items-center text-base">
                <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center mr-3">
                  <Shield className="w-3 h-3 text-white" />
                </div>
                1 year warranty on tags
              </li>
            </ul>
            <Button className="w-full bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 shadow-lg text-lg py-6" size="lg">
              Contact Admin to Subscribe
            </Button>
          </CardContent>
        </Card>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-primary to-purple-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="transform hover:scale-105 transition-transform">
              <div className="text-5xl font-bold mb-3">2000+</div>
              <div className="text-xl opacity-90">Pets Protected</div>
            </div>
            <div className="transform hover:scale-105 transition-transform">
              <div className="text-5xl font-bold mb-3">1000+</div>
              <div className="text-xl opacity-90">Happy Families</div>
            </div>
            <div className="transform hover:scale-105 transition-transform">
              <div className="text-5xl font-bold mb-3">150+</div>
              <div className="text-xl opacity-90">Pets Reunited</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex items-center space-x-3 mb-6 md:mb-0">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <Heart className="w-7 h-7 text-white" />
              </div>
              <div>
                <span className="text-3xl font-bold">WhiteTag</span>
                <p className="text-sm text-gray-400">Premium Pet Protection</p>
              </div>
            </div>
            <div className="flex space-x-8">
              <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
          <div className="text-center text-gray-400 border-t border-gray-800 pt-8">
            <p>&copy; 2024 WhiteTag. Made with ❤️ for Indian pet parents by WhiteBranding.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
