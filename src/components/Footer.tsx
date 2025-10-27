import { Linkedin, Instagram, Facebook, Twitter } from 'lucide-react';
import logo from '../assets/Logo.png';

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#0A1628] to-[#050B14] border-t border-[#4AA3FF]/10">
      <div className="container mx-auto px-4 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img src={logo} alt="KickOff Media" className="w-10 h-10 object-contain" />
              <span className="text-white text-lg md:text-xl">KickOff Media</span>
            </div>
            <p className="text-white/70 mb-4 text-sm md:text-base">
              Empowering brands with data-driven marketing strategies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white mb-4 text-base md:text-lg">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/70 hover:text-[#4AA3FF] transition-colors text-sm md:text-base">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-[#4AA3FF] transition-colors text-sm md:text-base">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-[#4AA3FF] transition-colors text-sm md:text-base">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-white mb-4 text-base md:text-lg">Follow Us</h4>
            <div className="flex space-x-3 md:space-x-4">
              <a
                href="https://www.linkedin.com/" target="_blank"
                className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#0F6EEA]/10 to-[#4AA3FF]/10 border border-[#4AA3FF]/20 hover:bg-gradient-to-br hover:from-[#0F6EEA] hover:to-[#4AA3FF] hover:border-transparent flex items-center justify-center transition-all"
              >
                <Linkedin className="text-white" size={20} />
              </a>
              <a
                href="https://www.instagram.com/" target="_blank"
                className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#0F6EEA]/10 to-[#4AA3FF]/10 border border-[#4AA3FF]/20 hover:bg-gradient-to-br hover:from-[#0F6EEA] hover:to-[#4AA3FF] hover:border-transparent flex items-center justify-center transition-all"
              >
                <Instagram className="text-white" size={20} />
              </a>
              <a
                href="https://www.facebook.com/" target="_blank"
                className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#0F6EEA]/10 to-[#4AA3FF]/10 border border-[#4AA3FF]/20 hover:bg-gradient-to-br hover:from-[#0F6EEA] hover:to-[#4AA3FF] hover:border-transparent flex items-center justify-center transition-all"
              >
                <Facebook className="text-white" size={20} />
              </a>
              <a
                href="https://x.com/" target="_blank"
                className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#0F6EEA]/10 to-[#4AA3FF]/10 border border-[#4AA3FF]/20 hover:bg-gradient-to-br hover:from-[#0F6EEA] hover:to-[#4AA3FF] hover:border-transparent flex items-center justify-center transition-all"
              >
                <Twitter className="text-white" size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#4AA3FF]/10 pt-6 md:pt-8 text-center">
          <p className="text-white/70 text-sm md:text-base">
            © 2025 KickOff Media. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}