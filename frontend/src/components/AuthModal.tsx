import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

type AuthTab = "signin" | "signup";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSignIn?: (email: string, password: string) => Promise<void> | void;
  onSignUp?: (name: string, email: string, password: string) => Promise<void> | void;
  initialTab?: AuthTab;
}

export function AuthModal({ isOpen, onClose, onSignIn, onSignUp, initialTab = "signin" }: AuthModalProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [tab, setTab] = useState<AuthTab>(initialTab);

  useEffect(() => {
    if (isOpen) {
      // reset tab and fields when opened
      setTab(initialTab);
      setEmail("");
      setPassword("");
      setName("");
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
    try {
      setLoading(true);
      if (onSignUp) await onSignUp(name, email, password);
      onClose();
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 shadow-2xl">
        <DialogHeader>
          <DialogTitle className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Welcome to ArteNact</DialogTitle>
        </DialogHeader>

        <Tabs value={tab} onValueChange={(v) => setTab(v as AuthTab)} className="mt-4">
          <TabsList className="grid grid-cols-2">
            <TabsTrigger value="signin">Sign In</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
          </TabsList>

          <TabsContent value="signin" className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <Button className="w-full" onClick={handleSignIn} disabled={loading}>
              {loading ? "Signing in..." : "Sign In"}
            </Button>
          </TabsContent>

          <TabsContent value="signup" className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email2">Email</Label>
              <Input id="email2" type="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password2">Password</Label>
              <Input id="password2" type="password" placeholder="Create a password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <Button className="w-full" onClick={handleSignUp} disabled={loading}>
              {loading ? "Creating account..." : "Create Account"}
            </Button>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}