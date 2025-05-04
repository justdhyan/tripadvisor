
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Youtube, ChevronDown } from "lucide-react";

export function TripAdvisorFooter() {
  const footerLinks = {
    "About Tripadvisor": [
      "About Us",
      "Press",
      "Resources and Policies",
      "Careers",
      "Trust & Safety",
      "Contact Us",
      "Accessibility",
      "Bug Bounty Program",
    ],
    "Explore": [
      "Write a review",
      "Add a Place",
      "Join",
      "Traveler's Choice",
      "Help Center",
      "Travel Stories",
    ],
    "Do Business With Us": [
      "Owners",
      "Business Advantage",
      "Sponsored Placements",
      "Access Our Content API",
      "Advertise With Us",
      "Become an Affiliate",
      "Get The App",
      "Iphone App",
      "Android App",
    ],
    "Tripadvisor Sites": [
      "Book the best restaurants with the TheFork",
      "Book tour and attraction tickets onViator",
      "Read cruises reviews on Cruises Critics",
      "Get airline seating charts on Seat Guru",
      "Search for holidays rentals on Holiday Lettings",
    ],
  };

  return (
    <footer className="bg-white dark:bg-card border-t border-border">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-base font-bold mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      to="#"
                      className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
            <div className="flex items-center mb-4 lg:mb-0">
              <div className="w-12 h-12 bg-tripadvisor-yellow rounded-full flex items-center justify-center">
                <svg
                  className="h-8 w-8 text-black"
                  viewBox="0 0 44 32"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M28.4 8.25C21.535 8.25 16 13.42 16 19.825C16 26.23 21.535 31.4 28.4 31.4C35.265 31.4 40.8 26.23 40.8 19.825C40.8 13.42 35.265 8.25 28.4 8.25ZM28.4 26.65C24.26 26.65 20.945 23.61 20.945 19.825C20.945 16.04 24.26 13 28.4 13C32.54 13 35.855 16.04 35.855 19.825C35.855 23.61 32.54 26.65 28.4 26.65Z" />
                  <path d="M11.2 8.25C4.33502 8.25 -1.2207e-05 13.42 -1.2207e-05 19.825C-1.2207e-05 26.23 4.33502 31.4 11.2 31.4C18.065 31.4 22.4 26.23 22.4 19.825C22.4 13.42 18.065 8.25 11.2 8.25ZM11.2 26.65C7.06002 26.65 3.74502 23.61 3.74502 19.825C3.74502 16.04 7.06002 13 11.2 13C15.34 13 18.655 16.04 18.655 19.825C18.655 23.61 15.34 26.65 11.2 26.65Z" />
                  <path d="M19.8 2.075C19.8 3.22043 18.8454 4.15 17.675 4.15C16.5046 4.15 15.55 3.22043 15.55 2.075C15.55 0.929568 16.5046 0 17.675 0C18.8454 0 19.8 0.929568 19.8 2.075Z" />
                </svg>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <Link to="#" className="text-sm hover:underline">Terms of Use</Link>
              <Link to="#" className="text-sm hover:underline">Privacy and Cookies Statement</Link>
              <Link to="#" className="text-sm hover:underline">Cookie consent</Link>
              <Link to="#" className="text-sm hover:underline">Site Map</Link>
              <Link to="#" className="text-sm hover:underline">How the site works</Link>
              <Link to="#" className="text-sm hover:underline">Contact Us</Link>
            </div>
            
            <div className="flex mt-4 lg:mt-0 gap-4">
              <div className="border border-gray-300 rounded px-3 py-1.5 flex items-center">
                <span className="text-sm mr-1">$ USD</span>
                <ChevronDown className="h-4 w-4" />
              </div>
              <div className="border border-gray-300 rounded px-3 py-1.5 flex items-center">
                <span className="text-sm mr-1">United States</span>
                <ChevronDown className="h-4 w-4" />
              </div>
            </div>
          </div>
          
          <div className="mt-6 text-xs text-gray-500 dark:text-gray-400">
            <p className="mb-2">
              This is the version of our website addressed to speakers of English in India. If you are a resident of another country or region, please select the appropriate version of Tripadvisor for your country or region in the drop-down menu. 
              <button className="text-blue-600 dark:text-blue-400 ml-1">show more</button>
            </p>
            
            <div className="flex items-center justify-between mt-4">
              <p>© {new Date().getFullYear()} Tripadvisor LLC All rights reserved.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
