
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Shield, Smartphone, QrCode, MapPin, Users } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Header */}
      <header className="border-b bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Heart className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-2xl font-bold text-primary">WhiteTag</span>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/login">
              <Button variant="ghost">Login</Button>
            </Link>
            <Link to="/register">
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <Badge className="mb-4" variant="secondary">
          🇮🇳 Made for India
        </Badge>
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
          Never Lose Your Pet Again
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Digital pet ID tags with QR codes for instant location sharing via WhatsApp. 
          Help your furry friends find their way home safely.
        </p>
        <div className="flex justify-center space-x-4">
          <Link to="/register">
            <Button size="lg" className="animate-pulse">
              Start Free Trial
            </Button>
          </Link>
          <Button size="lg" variant="outline">
            Watch Demo
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">How WhiteTag Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <QrCode className="w-12 h-12 mx-auto mb-4 text-primary" />
              <CardTitle>Create Digital ID</CardTitle>
              <CardDescription>
                Upload your pet's photo and details to create a unique digital profile with QR code
              </CardDescription>
            </CardHeader>
          </Card>
          
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <Smartphone className="w-12 h-12 mx-auto mb-4 text-primary" />
              <CardTitle>Print & Attach</CardTitle>
              <CardDescription>
                Download the QR code, print it, and attach to your pet's collar or harness
              </CardDescription>
            </CardHeader>
          </Card>
          
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <MapPin className="w-12 h-12 mx-auto mb-4 text-primary" />
              <CardTitle>Instant Location</CardTitle>
              <CardDescription>
                Anyone who finds your pet can scan and instantly share their location via WhatsApp
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Simple Pricing</h2>
          <p className="text-muted-foreground">One plan, unlimited pets, all features included</p>
        </div>
        
        <Card className="max-w-md mx-auto">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Annual Plan</CardTitle>
            <div className="text-4xl font-bold text-primary">₹599</div>
            <CardDescription>per year, all inclusive</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center">
                <Shield className="w-4 h-4 text-green-500 mr-2" />
                Unlimited pet profiles
              </li>
              <li className="flex items-center">
                <Shield className="w-4 h-4 text-green-500 mr-2" />
                QR code generation
              </li>
              <li className="flex items-center">
                <Shield className="w-4 h-4 text-green-500 mr-2" />
                WhatsApp integration
              </li>
              <li className="flex items-center">
                <Shield className="w-4 h-4 text-green-500 mr-2" />
                24/7 support
              </li>
            </ul>
            <Button className="w-full" size="lg">
              Contact Admin to Subscribe
            </Button>
          </CardContent>
        </Card>
      </section>

      {/* Stats Section */}
      <section className="bg-primary/5 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">1000+</div>
              <div className="text-muted-foreground">Pets Protected</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Happy Families</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Pets Reunited</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Heart className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-2xl font-bold text-primary">WhiteTag</span>
            </div>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-muted-foreground hover:text-primary">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-muted-foreground hover:text-primary">
                Terms of Service
              </Link>
              <Link to="/contact" className="text-muted-foreground hover:text-primary">
                Contact Us
              </Link>
            </div>
          </div>
          <div className="text-center mt-8 text-muted-foreground">
            <p>&copy; 2024 WhiteTag. Made with ❤️ for Indian pet parents.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
