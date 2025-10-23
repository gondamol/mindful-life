"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Share2, 
  Twitter, 
  Facebook, 
  MessageCircle, 
  Linkedin,
  Send,
  Download,
  Copy,
  Check
} from "lucide-react";
import {
  shareToPlatform,
  shareNative,
  canShare,
  generateShareText,
  copyToClipboard,
  CalculationResults,
} from "@/lib/sharing";

interface ShareButtonsProps {
  results: CalculationResults;
  variant?: "full" | "compact";
}

export function ShareButtons({ results, variant = "full" }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  const [showAllPlatforms, setShowAllPlatforms] = useState(false);
  
  const siteUrl = typeof window !== 'undefined' ? window.location.origin : 'https://mindfullife.app';
  const shareText = generateShareText(results);

  const handleNativeShare = async () => {
    const success = await shareNative({
      title: 'My Screen Time Wake-Up Call',
      text: shareText,
      url: siteUrl,
    });

    if (!success) {
      setShowAllPlatforms(true);
    }
  };

  const handleCopy = async () => {
    const success = await copyToClipboard(`${shareText}\n\n${siteUrl}`);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const platforms = [
    {
      name: 'Twitter',
      icon: Twitter,
      color: 'from-blue-400 to-blue-600',
      action: () => shareToPlatform('twitter', results, siteUrl),
    },
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      color: 'from-green-400 to-green-600',
      action: () => shareToPlatform('whatsapp', results, siteUrl),
    },
    {
      name: 'Facebook',
      icon: Facebook,
      color: 'from-blue-500 to-blue-700',
      action: () => shareToPlatform('facebook', results, siteUrl),
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      color: 'from-blue-600 to-blue-800',
      action: () => shareToPlatform('linkedin', results, siteUrl),
    },
    {
      name: 'Telegram',
      icon: Send,
      color: 'from-cyan-400 to-blue-500',
      action: () => shareToPlatform('telegram', results, siteUrl),
    },
  ];

  if (variant === "compact") {
    return (
      <div className="flex items-center gap-2">
        {canShare() ? (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleNativeShare}
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-medium text-sm"
          >
            <Share2 className="w-4 h-4" />
            Share
          </motion.button>
        ) : (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowAllPlatforms(!showAllPlatforms)}
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-medium text-sm"
          >
            <Share2 className="w-4 h-4" />
            Share
          </motion.button>
        )}
        
        {showAllPlatforms && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex gap-2"
          >
            {platforms.slice(0, 3).map((platform) => (
              <motion.button
                key={platform.name}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={platform.action}
                className={`p-2 bg-gradient-to-r ${platform.color} rounded-lg`}
                title={platform.name}
              >
                <platform.icon className="w-4 h-4" />
              </motion.button>
            ))}
          </motion.div>
        )}
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gradient-to-br from-gray-900 to-black border-2 border-blue-500/30 rounded-2xl p-6"
    >
      <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
        <Share2 className="w-6 h-6 text-blue-500" />
        Share Your Results
      </h3>
      <p className="text-gray-400 mb-6">
        Inspire your friends and family to take back their time
      </p>

      {/* Native share button (mobile) */}
      {canShare() && (
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleNativeShare}
          className="w-full mb-4 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-semibold flex items-center justify-center gap-2"
        >
          <Share2 className="w-5 h-5" />
          Share Now
        </motion.button>
      )}

      {/* Platform buttons */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4">
        {platforms.map((platform, index) => (
          <motion.button
            key={platform.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={platform.action}
            className={`
              py-3 px-4 rounded-xl font-medium
              bg-gradient-to-r ${platform.color}
              flex items-center justify-center gap-2
              shadow-lg hover:shadow-xl transition-shadow
            `}
          >
            <platform.icon className="w-5 h-5" />
            <span className="hidden sm:inline">{platform.name}</span>
          </motion.button>
        ))}
      </div>

      {/* Copy link button */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={handleCopy}
        className={`
          w-full py-3 rounded-xl font-medium
          flex items-center justify-center gap-2
          transition-colors
          ${
            copied
              ? 'bg-green-600 hover:bg-green-700'
              : 'bg-gray-800 hover:bg-gray-700 border border-gray-700'
          }
        `}
      >
        {copied ? (
          <>
            <Check className="w-5 h-5" />
            Copied!
          </>
        ) : (
          <>
            <Copy className="w-5 h-5" />
            Copy Link
          </>
        )}
      </motion.button>

      {/* Share preview */}
      <div className="mt-6 p-4 bg-gray-900/50 border border-gray-800 rounded-lg">
        <p className="text-sm text-gray-400 mb-2">Preview:</p>
        <p className="text-sm text-gray-300 whitespace-pre-line">
          {shareText}
        </p>
      </div>
    </motion.div>
  );
}

interface QuickShareButtonProps {
  results: CalculationResults;
  onShare?: () => void;
}

export function QuickShareButton({ results, onShare }: QuickShareButtonProps) {
  const [isSharing, setIsSharing] = useState(false);
  
  const siteUrl = typeof window !== 'undefined' ? window.location.origin : 'https://mindfullife.app';
  const shareText = generateShareText(results);

  const handleShare = async () => {
    setIsSharing(true);
    
    if (canShare()) {
      await shareNative({
        title: 'My Screen Time Wake-Up Call',
        text: shareText,
        url: siteUrl,
      });
    }
    
    onShare?.();
    setIsSharing(false);
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleShare}
      disabled={isSharing}
      className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl font-semibold shadow-lg"
    >
      <Share2 className="w-5 h-5" />
      {isSharing ? 'Sharing...' : 'Share My Results'}
    </motion.button>
  );
}
