import React from 'react';
import { Code2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t theme-border theme-bg-navbar backdrop-blur-xl mt-auto theme-transition">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <Code2 className="w-5 h-5 text-purple-400" />
              <span className="text-sm font-semibold theme-text">UI-CodeGen</span>
            </div>
            <p className="text-xs theme-text-tertiary">Screenshot to Code</p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-2 text-sm">
            <div className="flex items-center gap-6 mb-1 text-sm theme-text-secondary">
              <a href="/privacy" className="hover:text-purple-400 transition-colors">Privacy Policy</a>
              <a href="/terms" className="hover:text-purple-400 transition-colors">Terms of Service</a>
            </div>
            <div className="flex items-center gap-2 text-xs theme-text-tertiary">
              <span>Contact Support:</span>
              <a
                href="mailto:uicodegensupport@gmail.com"
                className="text-purple-400 hover:text-purple-300 transition-colors font-medium"
              >
                uicodegensupport@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;