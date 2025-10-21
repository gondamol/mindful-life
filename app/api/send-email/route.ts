import { NextRequest, NextResponse } from 'next/server';

interface EmailData {
  email: string;
  age: number;
  screenTimeMonths: number;
  screenTimePercentage: number;
  actualFreeTimeMonths: number;
}

export async function POST(request: NextRequest) {
  try {
    const data: EmailData = await request.json();
    
    // Validate input
    if (!data.email || !data.email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email is required' },
        { status: 400 }
      );
    }

    // Check for Resend API key
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error('RESEND_API_KEY not configured');
      // For development, log success but don't actually send
      console.log('Email would be sent to:', data.email);
      console.log('Data:', data);
      return NextResponse.json({ 
        success: true, 
        message: 'Email backend not configured. In production, email would be sent.' 
      });
    }

    // Send email using Resend
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: process.env.FROM_EMAIL || 'noreply@mindfullife.com',
        to: data.email,
        subject: 'Your Screen Time Analysis & Action Plan',
        html: generateEmailHTML(data),
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error('Resend API error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    const result = await response.json();
    console.log('Email sent successfully:', result);

    return NextResponse.json({ 
      success: true,
      message: 'Email sent successfully' 
    });

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

function generateEmailHTML(data: EmailData): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your Screen Time Analysis</title>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 8px; }
    .content { background: #f9f9f9; padding: 30px; margin: 20px 0; border-radius: 8px; }
    .stats { background: white; padding: 20px; margin: 20px 0; border-left: 4px solid #667eea; }
    .strategy { background: white; padding: 15px; margin: 15px 0; border-radius: 4px; }
    .strategy h3 { color: #667eea; margin-top: 0; }
    .footer { text-align: center; color: #666; font-size: 14px; margin-top: 30px; }
    .button { display: inline-block; background: #667eea; color: white; padding: 12px 30px; text-decoration: none; border-radius: 4px; margin: 10px 0; }
  </style>
</head>
<body>
  <div class="header">
    <h1>Your Screen Time Analysis</h1>
    <p>Reclaim your life with ancient wisdom and modern science</p>
  </div>

  <div class="content">
    <h2>Your Results</h2>
    <div class="stats">
      <h3>📱 Screen Time Impact</h3>
      <ul>
        <li><strong>${data.screenTimeMonths} months</strong> of your life will be spent on screens</li>
        <li>That's <strong>${data.screenTimePercentage}%</strong> of your free time</li>
        <li>Leaving you with only <strong>${data.actualFreeTimeMonths} months</strong> of actual free time</li>
      </ul>
    </div>

    <h2>🎯 Your Action Plan</h2>
    <p>Here are the 4 proven strategies to reduce your screen time by 50%:</p>

    <div class="strategy">
      <h3>1. Set Non-Negotiable Rules</h3>
      <p>No vague commitments. Set clear, specific rules you can actually follow:</p>
      <ul>
        <li>No phones in the bedroom, under any circumstances</li>
        <li>Make dinner screen-free, whether alone or with others</li>
        <li>Turn phone off after 8pm every day</li>
      </ul>
    </div>

    <div class="strategy">
      <h3>2. Delete Most-Used Apps</h3>
      <p>Remove addictive apps from your phone. You can still use them on laptop if needed:</p>
      <ul>
        <li>Check which apps you use most</li>
        <li>Delete them from your phone</li>
        <li>Make them laptop-only if you need them</li>
      </ul>
    </div>

    <div class="strategy">
      <h3>3. Turn Off Notifications</h3>
      <p>Ask yourself: "Would I want someone to knock on my door to tell me this?"</p>
      <ul>
        <li>If the answer is no, turn it off</li>
        <li>Keep only critical notifications (calls, emergencies)</li>
        <li>Check messages on your schedule, not theirs</li>
      </ul>
    </div>

    <div class="strategy">
      <h3>4. Enable Grayscale Mode</h3>
      <p>Make your phone less entertaining by removing colors:</p>
      <ul>
        <li>Search 'Grayscale' in phone settings</li>
        <li>Or check accessibility settings</li>
        <li>It makes screens less addictive</li>
      </ul>
    </div>

    <h2>💪 What You Could Achieve</h2>
    <p>If you reduce your screen time by 50%, you could:</p>
    <ul>
      <li>📚 Read 20-30 books per year</li>
      <li>🗣️ Learn a new language to fluency</li>
      <li>💪 Complete a fitness transformation</li>
      <li>🎨 Master a creative skill</li>
      <li>❤️ Deepen your relationships</li>
    </ul>
  </div>

  <div style="text-align: center; margin: 30px 0;">
    <a href="https://yourmindfullife.com" class="button">Visit Mindful Life</a>
  </div>

  <div class="footer">
    <p><em>"You could leave life right now. Let that determine what you do and say and think."</em></p>
    <p>— Marcus Aurelius, Meditations</p>
    <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
    <p>Built with ❤️ for digital wellness</p>
    <p style="font-size: 12px; color: #999;">
      You're receiving this because you completed the screen time assessment at Mindful Life.
    </p>
  </div>
</body>
</html>
  `.trim();
}
