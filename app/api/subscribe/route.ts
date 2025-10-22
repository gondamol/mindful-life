import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';
import { getActionPlanEmail } from '@/lib/emailTemplates';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const resend = process.env.RESEND_API_KEY 
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, name, subscriptionType, source, metadata } = body;

    // Validate email
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Valid email is required' },
        { status: 400 }
      );
    }

    // Check if email already exists
    const { data: existing } = await supabase
      .from('email_subscriptions')
      .select('id, subscribed')
      .eq('email', email)
      .single();

    if (existing) {
      // If already subscribed, update metadata
      if (existing.subscribed) {
        return NextResponse.json({
          message: 'You are already subscribed!',
          alreadySubscribed: true
        });
      } else {
        // Resubscribe
        const { error } = await supabase
          .from('email_subscriptions')
          .update({
            subscribed: true,
            unsubscribed_at: null,
            metadata: metadata || {}
          })
          .eq('email', email);

        if (error) throw error;

        return NextResponse.json({
          message: 'Welcome back! You have been resubscribed.',
          resubscribed: true
        });
      }
    }

    // Insert new subscription
    const { data, error } = await supabase
      .from('email_subscriptions')
      .insert({
        email,
        name: name || null,
        subscription_type: subscriptionType || 'all',
        source: source || 'unknown',
        metadata: metadata || {},
        subscribed: true
      })
      .select()
      .single();

    if (error) throw error;

    // Send action plan email if Resend is configured
    let emailSent = false;
    if (resend && metadata && subscriptionType === 'action_plan') {
      try {
        const emailContent = getActionPlanEmail({
          name: name || undefined,
          age: metadata.age || 25,
          screenTimeMonths: metadata.screenTimeMonths || 0,
          screenTimePercentage: metadata.screenTimePercentage || 0,
          actualFreeTimeMonths: metadata.actualFreeTimeMonths || 0
        });

        await resend.emails.send({
          from: 'Mindful Life <onboarding@resend.dev>', // Use your verified domain
          to: email,
          subject: emailContent.subject,
          html: emailContent.html,
          text: emailContent.text
        });

        emailSent = true;
        console.log('✅ Action plan email sent to:', email);
      } catch (emailError) {
        console.error('❌ Failed to send email:', emailError);
        // Don't fail the whole request if email fails
      }
    }

    return NextResponse.json({
      message: emailSent 
        ? 'Successfully subscribed! Check your email for your action plan.'
        : 'Successfully subscribed! We\'ll send your action plan soon.',
      success: true,
      emailSent,
      data
    });

  } catch (error: any) {
    console.error('Subscription error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to subscribe' },
      { status: 500 }
    );
  }
}

// Unsubscribe endpoint
export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const email = searchParams.get('email');
    const token = searchParams.get('token');

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // TODO: Verify token if using email-based unsubscribe links

    const { error } = await supabase
      .from('email_subscriptions')
      .update({
        subscribed: false,
        unsubscribed_at: new Date().toISOString()
      })
      .eq('email', email);

    if (error) throw error;

    return NextResponse.json({
      message: 'Successfully unsubscribed',
      success: true
    });

  } catch (error: any) {
    console.error('Unsubscribe error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to unsubscribe' },
      { status: 500 }
    );
  }
}
