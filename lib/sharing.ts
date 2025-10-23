// Social sharing utilities

export interface ShareData {
  title: string;
  text: string;
  url: string;
}

export interface CalculationResults {
  age: number;
  dailyHours: number;
  dailyMinutes: number;
  monthsLost: number;
  percentageOfFreeTime: number;
  monthsWithReduction: number;
}

// Check if Web Share API is available
export function canShare(): boolean {
  return typeof navigator !== 'undefined' && !!navigator.share;
}

// Native share using Web Share API
export async function shareNative(data: ShareData): Promise<boolean> {
  if (!canShare()) {
    return false;
  }

  try {
    await navigator.share(data);
    return true;
  } catch (error) {
    // User cancelled or error occurred
    console.error('Share failed:', error);
    return false;
  }
}

// Generate shareable text from calculation results
export function generateShareText(results: CalculationResults): string {
  const { monthsLost, percentageOfFreeTime, monthsWithReduction } = results;
  const yearsSaved = ((monthsLost - monthsWithReduction) / 12).toFixed(1);

  return `🧘 I just discovered I'll spend ${monthsLost} months (${percentageOfFreeTime}% of my free time) on screens! 

By cutting screen time in half, I could reclaim ${yearsSaved} YEARS of my life! 😱

Calculate yours at Mindful Life 👇`;
}

// Generate Twitter/X share URL
export function getTwitterShareUrl(text: string, url: string): string {
  const params = new URLSearchParams({
    text: text,
    url: url,
    hashtags: 'DigitalWellness,ScreenTime,MindfulLiving',
  });
  return `https://twitter.com/intent/tweet?${params.toString()}`;
}

// Generate Facebook share URL
export function getFacebookShareUrl(url: string): string {
  const params = new URLSearchParams({
    u: url,
  });
  return `https://www.facebook.com/sharer/sharer.php?${params.toString()}`;
}

// Generate WhatsApp share URL
export function getWhatsAppShareUrl(text: string, url: string): string {
  const fullText = `${text}\n\n${url}`;
  const params = new URLSearchParams({
    text: fullText,
  });
  return `https://wa.me/?${params.toString()}`;
}

// Generate LinkedIn share URL
export function getLinkedInShareUrl(url: string): string {
  const params = new URLSearchParams({
    url: url,
  });
  return `https://www.linkedin.com/sharing/share-offsite/?${params.toString()}`;
}

// Generate Telegram share URL
export function getTelegramShareUrl(text: string, url: string): string {
  const params = new URLSearchParams({
    url: url,
    text: text,
  });
  return `https://t.me/share/url?${params.toString()}`;
}

// Copy to clipboard
export async function copyToClipboard(text: string): Promise<boolean> {
  if (typeof navigator === 'undefined') return false;

  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(text);
      return true;
    } else {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      
      try {
        document.execCommand('copy');
        textArea.remove();
        return true;
      } catch (err) {
        textArea.remove();
        return false;
      }
    }
  } catch (error) {
    console.error('Copy failed:', error);
    return false;
  }
}

// Generate shareable image data URL (for canvas-based sharing)
export function generateShareImage(
  results: CalculationResults,
  canvas: HTMLCanvasElement
): string {
  const ctx = canvas.getContext('2d');
  if (!ctx) return '';

  // Set canvas size
  canvas.width = 1200;
  canvas.height = 630; // Standard social media image size

  // Background gradient
  const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  gradient.addColorStop(0, '#1e1b4b');
  gradient.addColorStop(1, '#7c3aed');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Title
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 48px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('⏰ My Screen Time Reality Check', canvas.width / 2, 100);

  // Main stat - months lost
  ctx.font = 'bold 120px Arial';
  ctx.fillStyle = '#fbbf24';
  ctx.fillText(`${results.monthsLost}`, canvas.width / 2, 280);
  
  ctx.font = '36px Arial';
  ctx.fillStyle = '#d1d5db';
  ctx.fillText('MONTHS on screens', canvas.width / 2, 340);

  // Percentage
  ctx.font = 'bold 56px Arial';
  ctx.fillStyle = '#ef4444';
  ctx.fillText(`${results.percentageOfFreeTime}% of my free time`, canvas.width / 2, 430);

  // With reduction
  ctx.font = '32px Arial';
  ctx.fillStyle = '#34d399';
  ctx.fillText(
    `✨ By reducing 50%: only ${results.monthsWithReduction} months`,
    canvas.width / 2,
    520
  );

  // CTA
  ctx.font = 'bold 28px Arial';
  ctx.fillStyle = '#ffffff';
  ctx.fillText('Calculate yours at Mindful Life', canvas.width / 2, 590);

  return canvas.toDataURL('image/png');
}

// Download image
export function downloadImage(dataUrl: string, filename: string): void {
  const link = document.createElement('a');
  link.download = filename;
  link.href = dataUrl;
  link.click();
}

// Share to specific platform
export function shareToPlatform(
  platform: 'twitter' | 'facebook' | 'whatsapp' | 'linkedin' | 'telegram',
  results: CalculationResults,
  siteUrl: string
): void {
  const text = generateShareText(results);
  let url = '';

  switch (platform) {
    case 'twitter':
      url = getTwitterShareUrl(text, siteUrl);
      break;
    case 'facebook':
      url = getFacebookShareUrl(siteUrl);
      break;
    case 'whatsapp':
      url = getWhatsAppShareUrl(text, siteUrl);
      break;
    case 'linkedin':
      url = getLinkedInShareUrl(siteUrl);
      break;
    case 'telegram':
      url = getTelegramShareUrl(text, siteUrl);
      break;
  }

  if (url) {
    window.open(url, '_blank', 'width=600,height=400');
  }
}

// Install prompt for PWA
export function canInstallPWA(): boolean {
  return typeof window !== 'undefined' && 'BeforeInstallPromptEvent' in window;
}

let deferredPrompt: any = null;

export function setupInstallPrompt(): void {
  if (typeof window === 'undefined') return;

  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
  });
}

export async function promptInstall(): Promise<boolean> {
  if (!deferredPrompt) {
    return false;
  }

  deferredPrompt.prompt();
  const { outcome } = await deferredPrompt.userChoice;
  deferredPrompt = null;

  return outcome === 'accepted';
}

// Check if app is installed
export function isAppInstalled(): boolean {
  if (typeof window === 'undefined') return false;
  
  return (
    window.matchMedia('(display-mode: standalone)').matches ||
    (window.navigator as any).standalone === true
  );
}
