"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, X, Smartphone } from "lucide-react";
import { setupInstallPrompt, promptInstall, isAppInstalled } from "@/lib/sharing";

export function InstallPrompt() {
  const [showPrompt, setShowPrompt] = useState(false);
  const [canInstall, setCanInstall] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Check if already installed
    if (isAppInstalled()) {
      return;
    }

    // Check if user previously dismissed
    const wasDismissed = localStorage.getItem('install_prompt_dismissed');
    if (wasDismissed) {
      setDismissed(true);
      return;
    }

    // Setup install prompt listener
    setupInstallPrompt();

    // Show prompt after a delay (better UX)
    const timer = setTimeout(() => {
      if (!isAppInstalled()) {
        setShowPrompt(true);
        setCanInstall(true);
      }
    }, 30000); // Show after 30 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleInstall = async () => {
    const accepted = await promptInstall();
    
    if (accepted) {
      setShowPrompt(false);
      localStorage.setItem('app_installed', 'true');
    } else {
      // User declined
      handleDismiss();
    }
  };

  const handleDismiss = () => {
    setShowPrompt(false);
    setDismissed(true);
    localStorage.setItem('install_prompt_dismissed', Date.now().toString());
  };

  if (!showPrompt || dismissed || isAppInstalled()) {
    return null;
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md z-50"
      >
        <div className="bg-gradient-to-br from-blue-900 to-purple-900 border-2 border-blue-500 rounded-2xl p-6 shadow-2xl">
          <button
            onClick={handleDismiss}
            className="absolute top-3 right-3 text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
              <Smartphone className="w-6 h-6" />
            </div>

            <div className="flex-1">
              <h3 className="text-lg font-bold mb-1">
                Install Mindful Life
              </h3>
              <p className="text-sm text-blue-200 mb-4">
                Get quick access from your home screen. Works offline!
              </p>

              <div className="flex gap-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleInstall}
                  className="flex-1 py-2 px-4 bg-white text-blue-900 rounded-lg font-semibold flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Install App
                </motion.button>

                <button
                  onClick={handleDismiss}
                  className="px-4 py-2 text-sm text-blue-200 hover:text-white transition-colors"
                >
                  Not now
                </button>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="mt-4 pt-4 border-t border-blue-700/50 grid grid-cols-3 gap-3 text-xs text-blue-200">
            <div className="text-center">
              <div className="text-lg mb-1">⚡</div>
              <div>Fast</div>
            </div>
            <div className="text-center">
              <div className="text-lg mb-1">📱</div>
              <div>Offline</div>
            </div>
            <div className="text-center">
              <div className="text-lg mb-1">🔔</div>
              <div>Reminders</div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

// Simpler banner version
export function InstallBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem('install_banner_dismissed');
    if (!dismissed && !isAppInstalled()) {
      setShow(true);
    }
  }, []);

  const handleDismiss = () => {
    setShow(false);
    localStorage.setItem('install_banner_dismissed', Date.now().toString());
  };

  const handleInstall = async () => {
    const accepted = await promptInstall();
    if (accepted) {
      setShow(false);
    }
  };

  if (!show) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 text-center relative"
    >
      <button
        onClick={handleDismiss}
        className="absolute right-4 top-1/2 -translate-y-1/2"
      >
        <X className="w-5 h-5" />
      </button>

      <div className="flex items-center justify-center gap-3 max-w-4xl mx-auto">
        <Smartphone className="w-5 h-5" />
        <span className="text-sm font-medium">
          Install our app for a better experience
        </span>
        <button
          onClick={handleInstall}
          className="px-4 py-1 bg-white text-blue-600 rounded-full text-sm font-semibold hover:bg-gray-100 transition-colors"
        >
          Install
        </button>
      </div>
    </motion.div>
  );
}
