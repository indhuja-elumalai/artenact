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
      <DialogContent className="max-w-md rounded-2xl border bg-white/90 border-zinc-200 shadow-xl backdrop-blur-md">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            Welcome to ArteNact
          </DialogTitle>
        </DialogHeader>

        <Tabs value={tab} onValueChange={(v) => setTab(v as AuthTab)} className="mt-6">
          <TabsList className="grid grid-cols-2 rounded-xl bg-zinc-100 dark:bg-zinc-700 p-1">
            <TabsTrigger
              value="signin"
              className="rounded-lg data-[state=active]:bg-white :bg-zinc-900 data-[state=active]:shadow-md transition"
            >
              Sign In
            </TabsTrigger>
            <TabsTrigger
              value="signup"
              className="rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-md transition"
            >
              Sign Up
            </TabsTrigger>
          </TabsList>

          {/* Sign In */}
          <TabsContent value="signin" className="mt-6 space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-lg border-zinc-300 dark:border-zinc-600 focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="rounded-lg border-zinc-300 dark:border-zinc-600 focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <Button
              className="w-full rounded-lg bg-gradient-to-r from-orange-600 to-red-600 hover:opacity-90 transition"
              onClick={handleSignIn}
              disabled={loading}
            >
              {loading ? "Signing in..." : "Sign In"}
            </Button>
          </TabsContent>

          {/* Sign Up */}
          <TabsContent value="signup" className="mt-6 space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="rounded-lg border-zinc-300 dark:border-zinc-600 focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email2">Email</Label>
              <Input
                id="email2"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-lg border-zinc-300 dark:border-zinc-600 focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password2">Password</Label>
              <Input
                id="password2"
                type="password"
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="rounded-lg border-zinc-300 dark:border-zinc-600 focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <Button
              className="w-full rounded-lg bg-gradient-to-r from-orange-600 to-red-600 hover:opacity-90 transition"
              onClick={handleSignUp}
              disabled={loading}
            >
              {loading ? "Creating account..." : "Create Account"}
            </Button>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
