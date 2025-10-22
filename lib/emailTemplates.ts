// Email templates for automated emails

interface ActionPlanEmailData {
  name?: string;
  age: number;
  screenTimeMonths: number;
  screenTimePercentage: number;
  actualFreeTimeMonths: number;
}

export function getActionPlanEmail(data: ActionPlanEmailData) {
  const { name, age, screenTimeMonths, screenTimePercentage, actualFreeTimeMonths } = data;
  const greeting = name ? `Hi ${name}` : 'Hi there';

  return {
    subject: `Your Digital Wellness Action Plan - ${screenTimePercentage}% of Your Free Time`,
    html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your Action Plan</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #000000; color: #ffffff;">
  <div style="max-width: 600px; margin: 0 auto; padding: 40px 20px;">
    
    <!-- Header -->
    <div style="text-align: center; margin-bottom: 40px;">
      <h1 style="font-size: 32px; font-weight: bold; margin: 0 0 16px 0; color: #ffffff;">
        Mindful Life 🧘‍♂️
      </h1>
      <p style="font-size: 18px; color: #9ca3af; margin: 0;">
        Your Digital Wellness Action Plan
      </p>
    </div>

    <!-- Greeting -->
    <div style="background: linear-gradient(135deg, #1e40af 0%, #7c3aed 100%); padding: 32px; border-radius: 12px; margin-bottom: 32px;">
      <h2 style="font-size: 24px; margin: 0 0 16px 0; color: #ffffff;">
        ${greeting}! 👋
      </h2>
      <p style="font-size: 16px; line-height: 1.6; margin: 0; color: #e5e7eb;">
        Thanks for using our screen time calculator. Based on your inputs, here's what we discovered about your digital life:
      </p>
    </div>

    <!-- Stats -->
    <div style="background: #111827; padding: 24px; border-radius: 12px; margin-bottom: 32px; border: 1px solid #1f2937;">
      <h3 style="font-size: 20px; margin: 0 0 20px 0; color: #60a5fa;">
        📊 Your Screen Time Analysis
      </h3>
      <div style="margin-bottom: 16px;">
        <div style="color: #9ca3af; font-size: 14px; margin-bottom: 4px;">Age</div>
        <div style="font-size: 24px; font-weight: bold; color: #ffffff;">${age} years old</div>
      </div>
      <div style="margin-bottom: 16px;">
        <div style="color: #9ca3af; font-size: 14px; margin-bottom: 4px;">Time Spent on Screens</div>
        <div style="font-size: 24px; font-weight: bold; color: #ef4444;">${screenTimeMonths} months of your life</div>
      </div>
      <div style="margin-bottom: 16px;">
        <div style="color: #9ca3af; font-size: 14px; margin-bottom: 4px;">Percentage of Free Time</div>
        <div style="font-size: 24px; font-weight: bold; color: #f59e0b;">${screenTimePercentage}% on screens</div>
      </div>
      <div>
        <div style="color: #9ca3af; font-size: 14px; margin-bottom: 4px;">Actual Free Time Left</div>
        <div style="font-size: 24px; font-weight: bold; color: #10b981;">${actualFreeTimeMonths} months</div>
      </div>
    </div>

    <!-- Action Plan -->
    <div style="margin-bottom: 32px;">
      <h3 style="font-size: 24px; margin: 0 0 24px 0; text-align: center; color: #ffffff;">
        🎯 Your 4-Step Action Plan
      </h3>

      <!-- Strategy 1 -->
      <div style="background: #111827; padding: 24px; border-radius: 12px; margin-bottom: 20px; border-left: 4px solid #3b82f6;">
        <h4 style="font-size: 20px; margin: 0 0 12px 0; color: #60a5fa;">
          1. Set Non-Negotiable Rules
        </h4>
        <p style="font-size: 16px; line-height: 1.6; color: #d1d5db; margin: 0 0 16px 0;">
          No vague commitments. Set clear, specific rules you can actually follow.
        </p>
        <ul style="margin: 0; padding-left: 20px; color: #d1d5db;">
          <li style="margin-bottom: 8px;">No phones in the bedroom, under any circumstances</li>
          <li style="margin-bottom: 8px;">Make dinner screen-free, whether alone or with others</li>
          <li style="margin-bottom: 8px;">Turn phone off after 8pm every day</li>
        </ul>
      </div>

      <!-- Strategy 2 -->
      <div style="background: #111827; padding: 24px; border-radius: 12px; margin-bottom: 20px; border-left: 4px solid #ef4444;">
        <h4 style="font-size: 20px; margin: 0 0 12px 0; color: #f87171;">
          2. Delete Most-Used Apps
        </h4>
        <p style="font-size: 16px; line-height: 1.6; color: #d1d5db; margin: 0 0 16px 0;">
          Remove addictive apps from your phone. You can still use them on laptop if needed.
        </p>
        <ul style="margin: 0; padding-left: 20px; color: #d1d5db;">
          <li style="margin-bottom: 8px;">Check which apps you use most in your phone settings</li>
          <li style="margin-bottom: 8px;">Delete them from your phone completely</li>
          <li style="margin-bottom: 8px;">Make them laptop-only if you absolutely need them</li>
        </ul>
      </div>

      <!-- Strategy 3 -->
      <div style="background: #111827; padding: 24px; border-radius: 12px; margin-bottom: 20px; border-left: 4px solid #f59e0b;">
        <h4 style="font-size: 20px; margin: 0 0 12px 0; color: #fbbf24;">
          3. Turn Off All Notifications
        </h4>
        <p style="font-size: 16px; line-height: 1.6; color: #d1d5db; margin: 0 0 16px 0;">
          Ask yourself: "Would I want someone to knock on my door to tell me this?"
        </p>
        <ul style="margin: 0; padding-left: 20px; color: #d1d5db;">
          <li style="margin-bottom: 8px;">Turn off ALL app notifications (except calls/messages from contacts)</li>
          <li style="margin-bottom: 8px;">Remove red badges and notification dots</li>
          <li style="margin-bottom: 8px;">Check apps on YOUR schedule, not theirs</li>
        </ul>
      </div>

      <!-- Strategy 4 -->
      <div style="background: #111827; padding: 24px; border-radius: 12px; border-left: 4px solid #10b981;">
        <h4 style="font-size: 20px; margin: 0 0 12px 0; color: #34d399;">
          4. Make Screens Inconvenient
        </h4>
        <p style="font-size: 16px; line-height: 1.6; color: #d1d5db; margin: 0 0 16px 0;">
          The harder it is to mindlessly scroll, the less you'll do it.
        </p>
        <ul style="margin: 0; padding-left: 20px; color: #d1d5db;">
          <li style="margin-bottom: 8px;">Remove social media apps from home screen</li>
          <li style="margin-bottom: 8px;">Log out after each use (makes you think twice)</li>
          <li style="margin-bottom: 8px;">Use website blockers during work/focus time</li>
        </ul>
      </div>
    </div>

    <!-- CTA Section -->
    <div style="background: linear-gradient(135deg, #059669 0%, #10b981 100%); padding: 32px; border-radius: 12px; margin-bottom: 32px; text-align: center;">
      <h3 style="font-size: 22px; margin: 0 0 16px 0; color: #ffffff;">
        🎓 Want to Go Deeper?
      </h3>
      <p style="font-size: 16px; line-height: 1.6; margin: 0 0 24px 0; color: #d1fae5;">
        Join our <strong>Ubuntu Wisdom Academy</strong> and master ancient philosophy for modern living.
      </p>
      <a href="https://mindful-life.vercel.app/academy" style="display: inline-block; background: #ffffff; color: #059669; padding: 14px 32px; border-radius: 8px; text-decoration: none; font-weight: bold; font-size: 16px;">
        Explore Free Course →
      </a>
    </div>

    <!-- Resources -->
    <div style="background: #111827; padding: 24px; border-radius: 12px; margin-bottom: 32px; border: 1px solid #1f2937;">
      <h3 style="font-size: 20px; margin: 0 0 20px 0; color: #60a5fa;">
        📚 Free Resources
      </h3>
      <div style="margin-bottom: 16px;">
        <a href="https://mindful-life.vercel.app/blog" style="color: #60a5fa; text-decoration: none; font-size: 16px; display: block; margin-bottom: 8px;">
          📖 Read Our Blog - Digital Wellness & Stoic Philosophy
        </a>
      </div>
      <div style="margin-bottom: 16px;">
        <a href="https://mindful-life.vercel.app/academy/courses/digital-stoicism" style="color: #60a5fa; text-decoration: none; font-size: 16px; display: block; margin-bottom: 8px;">
          🎓 Free Course: Digital Stoicism 101
        </a>
      </div>
      <div>
        <a href="https://mindful-life.vercel.app/support" style="color: #60a5fa; text-decoration: none; font-size: 16px; display: block;">
          ☕ Support Our Mission
        </a>
      </div>
    </div>

    <!-- Quote -->
    <div style="background: #1e293b; padding: 24px; border-radius: 12px; margin-bottom: 32px; border-left: 4px solid #8b5cf6;">
      <p style="font-size: 18px; font-style: italic; line-height: 1.6; margin: 0 0 12px 0; color: #e0e7ff;">
        "You have power over your mind - not outside events. Realize this, and you will find strength."
      </p>
      <p style="font-size: 14px; color: #a78bfa; margin: 0;">
        - Marcus Aurelius, Meditations
      </p>
    </div>

    <!-- Footer -->
    <div style="text-align: center; padding-top: 24px; border-top: 1px solid #1f2937;">
      <p style="font-size: 14px; color: #6b7280; margin: 0 0 12px 0;">
        We'll check in with you in 2 weeks to see how you're doing!
      </p>
      <p style="font-size: 14px; color: #6b7280; margin: 0 0 12px 0;">
        Contact: nichodemuswerre@gmail.com | +254 725 737 867
      </p>
      <p style="font-size: 12px; color: #4b5563; margin: 0;">
        © 2025 Mindful Life • Ubuntu Wisdom Academy
      </p>
    </div>

  </div>
</body>
</html>
    `,
    text: `
${greeting}!

Thanks for using our screen time calculator. Here's your personalized action plan:

📊 YOUR SCREEN TIME ANALYSIS
-------------------------------
Age: ${age} years old
Time on Screens: ${screenTimeMonths} months of your life
Percentage: ${screenTimePercentage}% of your free time
Actual Free Time: ${actualFreeTimeMonths} months

🎯 YOUR 4-STEP ACTION PLAN
-------------------------------

1. SET NON-NEGOTIABLE RULES
No vague commitments. Set clear, specific rules:
• No phones in the bedroom
• Screen-free dinners
• Phone off after 8pm

2. DELETE MOST-USED APPS
Remove addictive apps from your phone:
• Check which apps you use most
• Delete them from phone
• Make them laptop-only if needed

3. TURN OFF ALL NOTIFICATIONS
Would you want someone knocking on your door for this?
• Turn off ALL app notifications
• Remove red badges
• Check apps on YOUR schedule

4. MAKE SCREENS INCONVENIENT
Add friction to break the habit:
• Remove apps from home screen
• Log out after each use
• Use website blockers

🎓 WANT TO GO DEEPER?
-------------------------------
Join Ubuntu Wisdom Academy: https://mindful-life.vercel.app/academy
Read Our Blog: https://mindful-life.vercel.app/blog
Support Us: https://mindful-life.vercel.app/support

"You have power over your mind - not outside events. 
Realize this, and you will find strength."
- Marcus Aurelius

We'll check in with you in 2 weeks!

Contact: nichodemuswerre@gmail.com | +254 725 737 867
© 2025 Mindful Life • Ubuntu Wisdom Academy
    `
  };
}
