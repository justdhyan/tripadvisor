
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

export function Footer() {
  const footerLinks = {
    "About Tripadvisor": [
      "About Us",
      "Press",
      "Resources and Policies",
      "Careers",
      "Trust & Safety",
      "Contact Us",
    ],
    "Explore": [
      "Write a Review",
      "Add a Place",
      "Join",
      "Travellers' Choice",
      "GreenLeaders",
      "Help Centre",
    ],
    "Do Business With Us": [
      "Owners",
      "Business Advantage",
      "Sponsored Placements",
      "Access our Content API",
      "Advertise with Us",
    ],
    "Tripadvisor Sites": [
      "Book tours and attraction tickets",
      "Book the best restaurants",
      "Cruise Critic",
      "Book the best hotels",
      "Vacation Rentals",
    ],
  };

  return (
    <footer className="bg-muted py-12 mt-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-bold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      to="#"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mt-12 pt-8 border-t border-border">
          <div className="flex items-center mb-4 md:mb-0">
            <svg
              className="h-8 w-auto text-tripadvisor dark:text-tripadvisor-light"
              viewBox="0 0 44 32"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M28.4 8.25C21.535 8.25 16 13.42 16 19.825C16 26.23 21.535 31.4 28.4 31.4C35.265 31.4 40.8 26.23 40.8 19.825C40.8 13.42 35.265 8.25 28.4 8.25ZM28.4 26.65C24.26 26.65 20.945 23.61 20.945 19.825C20.945 16.04 24.26 13 28.4 13C32.54 13 35.855 16.04 35.855 19.825C35.855 23.61 32.54 26.65 28.4 26.65Z" />
              <path d="M11.2 8.25C4.33502 8.25 -1.2207e-05 13.42 -1.2207e-05 19.825C-1.2207e-05 26.23 4.33502 31.4 11.2 31.4C18.065 31.4 22.4 26.23 22.4 19.825C22.4 13.42 18.065 8.25 11.2 8.25ZM11.2 26.65C7.06002 26.65 3.74502 23.61 3.74502 19.825C3.74502 16.04 7.06002 13 11.2 13C15.34 13 18.655 16.04 18.655 19.825C18.655 23.61 15.34 26.65 11.2 26.65Z" />
              <path d="M19.8 2.075C19.8 3.22043 18.8454 4.15 17.675 4.15C16.5046 4.15 15.55 3.22043 15.55 2.075C15.55 0.929568 16.5046 0 17.675 0C18.8454 0 19.8 0.929568 19.8 2.075Z" />
              <path d="M28.4 16.325C26.1064 16.325 24.25 17.9553 24.25 20C24.25 22.0447 26.1064 23.675 28.4 23.675C30.6936 23.675 32.55 22.0447 32.55 20C32.55 17.9553 30.6936 16.325 28.4 16.325Z" />
              <path d="M11.2 16.325C8.90639 16.325 7.05 17.9553 7.05 20C7.05 22.0447 8.90639 23.675 11.2 23.675C13.4936 23.675 15.35 22.0447 15.35 20C15.35 17.9553 13.4936 16.325 11.2 16.325Z" />
              <path d="M20 5.25C20 5.25 17.95 8.25 11.2 8.25C4.45 8.25 0 13.75 0 19.75C0 19.75 5.6 5.25 20 5.25Z" />
              <path d="M20 5.25C20 5.25 22.05 8.25 28.8 8.25C35.55 8.25 40 13.75 40 19.75C40 19.75 34.4 5.25 20 5.25Z" />
            </svg>
          </div>

          <div className="flex space-x-4">
            <a href="#" className="text-muted-foreground hover:text-foreground">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground">
              <Youtube className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 text-center text-xs text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Tripadvisor LLC All rights reserved.
          </p>
          <div className="flex justify-center flex-wrap gap-x-4 gap-y-2 mt-2">
            <a href="#" className="hover:underline">
              Terms of Use
            </a>
            <a href="#" className="hover:underline">
              Privacy and Cookies Statement
            </a>
            <a href="#" className="hover:underline">
              Cookie consent
            </a>
            <a href="#" className="hover:underline">
              Site Map
            </a>
            <a href="#" className="hover:underline">
              How the site works
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
