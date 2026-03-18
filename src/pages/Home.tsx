/* https://www.youtube.com/watch?v=ifOJ0R5UQOc. */

import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "../components/StarBackground";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden" >
     {/* Theme toggle */}
    <ThemeToggle />
     {/* Background */}
    <StarBackground />
      {/* Navbar */}

      {/* Main content */}

      {/* Footer */}
    </div>
  );
}