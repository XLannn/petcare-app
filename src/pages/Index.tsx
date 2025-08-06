import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Calendar, ShoppingCart, Users, Star, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Heart className="w-8 h-8 text-primary" />
            <span className="text-2xl font-bold text-foreground">PetCare</span>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/auth">
              <Button variant="outline">Sign In</Button>
            </Link>
            <Link to="/auth">
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 text-foreground">
            Complete Care for Your
            <span className="text-primary"> Beloved Pets</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            From health tracking to appointment scheduling and online shopping - everything your pet needs in one place.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/auth">
              <Button size="lg" className="w-full sm:w-auto">
                Start Pet Care Journey
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              <Phone className="w-4 h-4 mr-2" />
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Everything Your Pet Needs
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Pet Profiles</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Create detailed profiles for each pet with photos, medical history, and important information.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Calendar className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Appointment Booking</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Schedule vet visits, grooming appointments, and other pet care services with ease.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <ShoppingCart className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Pet Store</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Shop for food, toys, accessories, and medications - all delivered to your door.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Community</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Connect with other pet owners, share experiences, and get advice from experts.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            What Pet Parents Say
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="text-center">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, index) => (
                      <Star key={index} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <CardDescription>
                    "PetCare has made managing my dog's health so much easier. The appointment reminders are a lifesaver!"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold text-foreground">Pet Owner #{i}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Give Your Pet the Best Care?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of pet parents who trust PetCare for their furry friends.
          </p>
          <Link to="/auth">
            <Button size="lg" variant="secondary">
              Sign Up Today - It's Free!
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-card border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Heart className="w-6 h-6 text-primary" />
            <span className="text-xl font-bold text-foreground">PetCare</span>
          </div>
          <p className="text-muted-foreground">
            © 2024 PetCare. Made with ❤️ for pets and their families.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
