// src/pages/Dashboard.tsx
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Plus, Calendar, ShoppingCart, User as UserIcon, LogOut, PawPrint } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import type { User } from '@supabase/supabase-js';

const Dashboard = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const getSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        navigate("/auth");
      } else {
        setUser(session.user);
      }
      setIsLoading(false);
    };
    getSession();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session) {
        navigate("/auth");
      } else {
        setUser(session.user);
      }
    });
    return () => subscription.unsubscribe();
  }, [navigate]);

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast({ title: "Error signing out", description: error.message, variant: "destructive" });
    } else {
      navigate("/");
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full"></div>
      </div>
    );
  }

  if (!user) {
    return null;
  }
  
  // Get the user's full name from metadata, or fall back to the email
  const displayName = user.user_metadata?.full_name || user.email;

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Heart className="w-8 h-8 text-primary" />
            <span className="text-2xl font-bold text-foreground">PetCare</span>
          </div>
          <div className="flex items-center space-x-4">
            {/* Display the name here */}
            <span className="text-muted-foreground text-sm">Welcome, {displayName}</span>
            <Button variant="outline" size="sm" onClick={handleSignOut}>
              <LogOut className="w-4 h-4 mr-2" />
              Sign Out
            </Button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* ... Rest of the dashboard content ... */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Welcome to Your Pet Dashboard!</h1>
          <p className="text-muted-foreground">Manage all your pet's needs in one convenient place.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer"><CardHeader className="text-center pb-3"><PawPrint className="w-12 h-12 text-primary mx-auto mb-2" /><CardTitle className="text-lg">Add Pet</CardTitle></CardHeader><CardContent className="pt-0"><CardDescription className="text-center">Create a profile for your new furry friend</CardDescription><Button className="w-full mt-4" variant="outline"><Plus className="w-4 h-4 mr-2" />Add Pet</Button></CardContent></Card>
          <Card className="hover:shadow-lg transition-shadow cursor-pointer"><CardHeader className="text-center pb-3"><Calendar className="w-12 h-12 text-primary mx-auto mb-2" /><CardTitle className="text-lg">Book Appointment</CardTitle></CardHeader><CardContent className="pt-0"><CardDescription className="text-center">Schedule vet visits and grooming</CardDescription><Button className="w-full mt-4" variant="outline"><Calendar className="w-4 h-4 mr-2" />Schedule</Button></CardContent></Card>
          <Card className="hover:shadow-lg transition-shadow cursor-pointer"><CardHeader className="text-center pb-3"><ShoppingCart className="w-12 h-12 text-primary mx-auto mb-2" /><CardTitle className="text-lg">Pet Store</CardTitle></CardHeader><CardContent className="pt-0"><CardDescription className="text-center">Shop for food, toys, and supplies</CardDescription><Button className="w-full mt-4" variant="outline"><ShoppingCart className="w-4 h-4 mr-2" />Shop Now</Button></CardContent></Card>
          <Card className="hover:shadow-lg transition-shadow cursor-pointer"><CardHeader className="text-center pb-3"><UserIcon className="w-12 h-12 text-primary mx-auto mb-2" /><CardTitle className="text-lg">Profile</CardTitle></CardHeader><CardContent className="pt-0"><CardDescription className="text-center">Manage your account settings</CardDescription><Button className="w-full mt-4" variant="outline"><UserIcon className="w-4 h-4 mr-2" />Settings</Button></CardContent></Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card><CardHeader><CardTitle>Your Pets</CardTitle><CardDescription>Currently no pets added to your profile</CardDescription></CardHeader><CardContent><div className="text-center py-8"><PawPrint className="w-16 h-16 text-muted-foreground mx-auto mb-4" /><p className="text-muted-foreground mb-4">Start by adding your first pet profile</p><Button><Plus className="w-4 h-4 mr-2" />Add Your First Pet</Button></div></CardContent></Card>
          <Card><CardHeader><CardTitle>Upcoming Appointments</CardTitle><CardDescription>Stay on top of your pet's health schedule</CardDescription></CardHeader><CardContent><div className="text-center py-8"><Calendar className="w-16 h-16 text-muted-foreground mx-auto mb-4" /><p className="text-muted-foreground mb-4">No upcoming appointments scheduled</p><Button variant="outline"><Calendar className="w-4 h-4 mr-2" />Schedule Appointment</Button></div></CardContent></Card>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
