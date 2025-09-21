import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

type AuthTab = "signin" | "signup";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSignIn?: (email: string, password: string) => Promise<void> | void;
  onSignUp?: (name: string, email: string, password: string, role: string) => Promise<void> | void;
  initialTab?: AuthTab;
}

export function AuthModal({
  isOpen,
  onClose,
  onSignIn,
  onSignUp,
  initialTab = "signin",
}: AuthModalProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState<string | undefined>(undefined);
  const [loading, setLoading] = useState(false);
  const [tab, setTab] = useState<AuthTab>(initialTab);

  useEffect(() => {
    if (isOpen) {
      setTab(initialTab);
      setEmail("");
      setPassword("");
      setName("");
      setRole(undefined);
    }
  }, [isOpen, initialTab]);

  const handleSignIn = async () => {
    try {
      setLoading(true);
      if (onSignIn) await onSignIn(email, password);
      onClose();
    } finally {
      setLoading(false);
    }
  };

  const handleSignUp = async () => {
    if (!role) return; // Prevent signup if no role selected
    try {
      setLoading(true);
      if (onSignUp) await onSignUp(name, email, password, role);
      onClose();
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md p-8 bg-amber-950 text-white rounded-xl border border-amber-800 shadow-2xl">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-amber-700 bg-clip-text text-transparent">
            Welcome to ArteNact
          </DialogTitle>
        </DialogHeader>

        <Tabs
          value={tab}
          onValueChange={(v) => setTab(v as AuthTab)}
          className="mt-4"
        >
          <TabsList className="grid grid-cols-2 p-1 mb-6 bg-transparent border border-amber-800 rounded-lg">
            <TabsTrigger 
              value="signin" 
              className="text-white data-[state=active]:bg-amber-700 data-[state=active]:text-white rounded-md transition-colors"
            >
              Sign In
            </TabsTrigger>
            <TabsTrigger 
              value="signup" 
              className="text-white data-[state=active]:bg-amber-700 data-[state=active]:text-white rounded-md transition-colors"
            >
              Sign Up
            </TabsTrigger>
          </TabsList>

          {/* ---- SIGN IN ---- */}
          <TabsContent value="signin" className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-amber-100">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="w-full h-12 px-4 bg-amber-900 border border-amber-700 text-white placeholder-amber-400 rounded-lg focus:ring focus:ring-amber-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-medium text-amber-100">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                className="w-full h-12 px-4 bg-amber-900 border border-amber-700 text-white placeholder-amber-400 rounded-lg focus:ring focus:ring-amber-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button 
              className="w-full h-12 text-lg font-bold bg-amber-700 hover:bg-amber-800 transition-colors" 
              onClick={handleSignIn} 
              disabled={loading}
            >
              {loading ? "Signing in..." : "Sign In"}
            </Button>
          </TabsContent>

          {/* ---- SIGN UP ---- */}
          <TabsContent value="signup" className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-medium text-amber-100">Full Name</Label>
              <Input
                id="name"
                placeholder="Your name"
                className="w-full h-12 px-4 bg-amber-900 border border-amber-700 text-white placeholder-amber-400 rounded-lg focus:ring focus:ring-amber-500"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email2" className="text-sm font-medium text-amber-100">Email</Label>
              <Input
                id="email2"
                type="email"
                placeholder="you@example.com"
                className="w-full h-12 px-4 bg-amber-900 border border-amber-700 text-white placeholder-amber-400 rounded-lg focus:ring focus:ring-amber-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password2" className="text-sm font-medium text-amber-100">Password</Label>
              <Input
                id="password2"
                type="password"
                placeholder="Create a password"
                className="w-full h-12 px-4 bg-amber-900 border border-amber-700 text-white placeholder-amber-400 rounded-lg focus:ring focus:ring-amber-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* Role dropdown */}
            <div className="space-y-2">
              <Label htmlFor="role" className="text-sm font-medium text-amber-100">Role</Label>
              <Select value={role} onValueChange={(v) => setRole(v)}>
                <SelectTrigger
                  id="role"
                  className="w-full h-12 px-4 bg-amber-900 text-white border border-amber-700 placeholder-amber-400 rounded-lg"
                >
                  <SelectValue placeholder="Choose role" />
                </SelectTrigger>
                <SelectContent className="bg-amber-900 text-white border-amber-700">
                  <SelectItem value="artisan">Artisan</SelectItem>
                  <SelectItem value="customer">Customer</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button
              className="w-full h-12 text-lg font-bold bg-amber-700 hover:bg-amber-800 transition-colors"
              onClick={handleSignUp}
              disabled={loading || !role}
            >
              {loading ? "Creating account..." : "Create Account"}
            </Button>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}