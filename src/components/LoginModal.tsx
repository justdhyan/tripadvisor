
import React, { useState } from 'react';
import { X } from 'lucide-react';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger,
  DialogClose
} from './ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import RefinedButton from './RefinedButton';

interface LoginModalProps {
  trigger: React.ReactNode;
}

const LoginModal: React.FC<LoginModalProps> = ({ trigger }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic
    console.log('Login with:', email, password);
  };
  
  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle signup logic
    console.log('Sign up with:', email, password);
  };
  
  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md p-0 overflow-hidden rounded-lg">
        <DialogHeader className="relative pt-6 px-6">
          <DialogTitle className="text-center text-xl font-bold">Sign in to unlock the best of TripAdvisor</DialogTitle>
          <DialogClose className="absolute right-4 top-4 rounded-full p-1 opacity-70 hover:opacity-100">
            <X className="h-4 w-4" />
          </DialogClose>
        </DialogHeader>
        
        <Tabs defaultValue="login" className="px-6 pb-6">
          <TabsList className="grid grid-cols-2 mb-6">
            <TabsTrigger value="login">Sign In</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
          </TabsList>
          
          <TabsContent value="login">
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tripadvisor-green focus:border-transparent"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <label className="text-sm font-medium" htmlFor="password">
                    Password
                  </label>
                  <a href="#" className="text-sm text-tripadvisor-green hover:underline">
                    Forgot password?
                  </a>
                </div>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tripadvisor-green focus:border-transparent"
                  required
                />
              </div>
              
              <RefinedButton type="submit" fullWidth>
                Sign In
              </RefinedButton>
            </form>
            
            <div className="mt-4">
              <div className="relative flex items-center py-2">
                <div className="grow border-t border-gray-300"></div>
                <span className="mx-2 flex-shrink text-sm text-gray-500">or continue with</span>
                <div className="grow border-t border-gray-300"></div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-4">
                <button className="flex items-center justify-center gap-2 p-2 border border-gray-300 rounded-md hover:bg-gray-50">
                  <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="w-5 h-5" />
                  <span>Google</span>
                </button>
                <button className="flex items-center justify-center gap-2 p-2 border border-gray-300 rounded-md hover:bg-gray-50">
                  <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/facebook.svg" alt="Facebook" className="w-5 h-5" />
                  <span>Facebook</span>
                </button>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="signup">
            <form onSubmit={handleSignUp} className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium" htmlFor="signup-email">
                  Email
                </label>
                <input
                  id="signup-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tripadvisor-green focus:border-transparent"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium" htmlFor="signup-password">
                  Password
                </label>
                <input
                  id="signup-password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tripadvisor-green focus:border-transparent"
                  required
                />
                <p className="text-xs text-gray-500">
                  Password must be at least 8 characters long and include a number
                </p>
              </div>
              
              <RefinedButton type="submit" fullWidth>
                Create Account
              </RefinedButton>
            </form>
            
            <div className="mt-4">
              <div className="relative flex items-center py-2">
                <div className="grow border-t border-gray-300"></div>
                <span className="mx-2 flex-shrink text-sm text-gray-500">or sign up with</span>
                <div className="grow border-t border-gray-300"></div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-4">
                <button className="flex items-center justify-center gap-2 p-2 border border-gray-300 rounded-md hover:bg-gray-50">
                  <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="w-5 h-5" />
                  <span>Google</span>
                </button>
                <button className="flex items-center justify-center gap-2 p-2 border border-gray-300 rounded-md hover:bg-gray-50">
                  <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/facebook.svg" alt="Facebook" className="w-5 h-5" />
                  <span>Facebook</span>
                </button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
