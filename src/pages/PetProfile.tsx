
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, MapPin, Phone, MessageCircle, Instagram, Download, Home } from "lucide-react";

const PetProfile = () => {
  const { username } = useParams();
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [locationAccuracy, setLocationAccuracy] = useState<number | null>(null);

  // Mock pet data - in real app, fetch based on username
  const pet = {
    name: "Fluffy",
    type: "Cat",
    breed: "Persian",
    age: "3 years",
    color: "White with grey patches",
    description: "Very friendly and loves belly rubs. Responds to the name Fluffy. Has a small scar on left ear.",
    photo: "/placeholder.svg",
    owner: {
      name: "Priya Sharma",
      phone: "+91 9876543210",
      whatsapp: "+91 9876543210",
      instagram: "@priya_sharma",
      address: "123 Pet Street, Delhi, India",
      showPhone: true,
      showWhatsApp: true,
      showInstagram: true,
      showAddress: false
    }
  };

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
          setLocationAccuracy(position.coords.accuracy);
        },
        (error) => {
          console.error("Error getting location:", error);
          alert("Could not get your location. Please enable location services.");
        },
        { enableHighAccuracy: true, timeout: 10000, maximumAge: 60000 }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  const shareLocationViaWhatsApp = () => {
    if (location && pet.owner.whatsapp) {
      const message = `Found ${pet.name}! 🐾📍 Here's my location: https://maps.google.com/?q=${location.lat},${location.lng}`;
      const whatsappUrl = `https://wa.me/${pet.owner.whatsapp.replace(/\s+/g, '').replace('+', '')}?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    } else if (!location) {
      getCurrentLocation();
    }
  };

  const downloadContact = () => {
    const vCard = `BEGIN:VCARD
VERSION:3.0
FN:${pet.owner.name}
TEL:${pet.owner.phone}
END:VCARD`;
    
    const blob = new Blob([vCard], { type: 'text/vcard' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${pet.owner.name.replace(/\s+/g, '_')}.vcf`;
    link.click();
    window.URL.revokeObjectURL(url);
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4 py-8 max-w-md">
        {/* Emergency Banner */}
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 text-center">
          <p className="text-red-700 font-semibold text-lg">🚨 Found this pet?</p>
          <p className="text-red-600 text-sm">Help reunite them with their family!</p>
        </div>

        {/* Pet Photo */}
        <Card className="mb-6 overflow-hidden">
          <CardContent className="p-0">
            <img
              src={pet.photo}
              alt={pet.name}
              className="w-full h-64 object-cover bg-muted"
            />
          </CardContent>
        </Card>

        {/* Pet Info */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="text-center mb-4">
              <h1 className="text-3xl font-bold mb-2">{pet.name}</h1>
              <div className="flex justify-center space-x-2 mb-2">
                <Badge variant="secondary">{pet.type}</Badge>
                {pet.breed && <Badge variant="outline">{pet.breed}</Badge>}
              </div>
              {pet.age && <p className="text-muted-foreground">{pet.age}</p>}
            </div>

            {pet.color && (
              <div className="mb-4">
                <h3 className="font-semibold mb-1">Color/Markings</h3>
                <p className="text-muted-foreground">{pet.color}</p>
              </div>
            )}

            {pet.description && (
              <div>
                <h3 className="font-semibold mb-1">About {pet.name}</h3>
                <p className="text-muted-foreground">{pet.description}</p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="space-y-3 mb-6">
          <Button
            onClick={shareLocationViaWhatsApp}
            className="w-full h-14 text-lg bg-green-600 hover:bg-green-700"
          >
            <MapPin className="w-5 h-5 mr-2" />
            Share My Location via WhatsApp
            {locationAccuracy && (
              <span className="ml-2 text-xs opacity-80">
                (±{Math.round(locationAccuracy)}m)
              </span>
            )}
          </Button>

          <Button
            onClick={downloadContact}
            variant="outline"
            className="w-full h-12"
          >
            <Download className="w-4 h-4 mr-2" />
            Save Owner Contact 📱
          </Button>
        </div>

        {/* Owner Contact */}
        <Card>
          <CardContent className="p-6">
            <h3 className="font-semibold mb-4 text-center">Contact Owner</h3>
            <div className="text-center mb-4">
              <p className="font-medium text-lg">{pet.owner.name}</p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {pet.owner.showPhone && (
                <Button
                  variant="outline"
                  className="h-12 bg-blue-50 border-blue-200 hover:bg-blue-100"
                  onClick={() => window.open(`tel:${pet.owner.phone}`)}
                >
                  <Phone className="w-4 h-4 mr-2 text-blue-600" />
                  Call
                </Button>
              )}

              {pet.owner.showWhatsApp && (
                <Button
                  variant="outline"
                  className="h-12 bg-green-50 border-green-200 hover:bg-green-100"
                  onClick={() => window.open(`https://wa.me/${pet.owner.whatsapp?.replace(/\s+/g, '').replace('+', '')}`)}
                >
                  <MessageCircle className="w-4 h-4 mr-2 text-green-600" />
                  WhatsApp
                </Button>
              )}

              {pet.owner.showInstagram && pet.owner.instagram && (
                <Button
                  variant="outline"
                  className="h-12 bg-pink-50 border-pink-200 hover:bg-pink-100"
                  onClick={() => window.open(`https://instagram.com/${pet.owner.instagram.replace('@', '')}`)}
                >
                  <Instagram className="w-4 h-4 mr-2 text-pink-600" />
                  Instagram
                </Button>
              )}

              {pet.owner.showAddress && pet.owner.address && (
                <Button
                  variant="outline"
                  className="h-12 bg-purple-50 border-purple-200 hover:bg-purple-100 col-span-2"
                  onClick={() => window.open(`https://maps.google.com/?q=${encodeURIComponent(pet.owner.address)}`)}
                >
                  <Home className="w-4 h-4 mr-2 text-purple-600" />
                  View Address
                </Button>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center mt-8">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <div className="w-6 h-6 bg-primary rounded-lg flex items-center justify-center">
              <Heart className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-bold text-primary">WhiteTag</span>
          </div>
          <p className="text-xs text-muted-foreground">
            Helping pets find their way home
          </p>
        </div>
      </div>
    </div>
  );
};

export default PetProfile;
