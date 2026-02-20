'use server';

import { createClient } from '@/lib/supabase/server';

export async function joinWaitlist(prevState: unknown, formData: FormData) {
  const email = formData.get('email') as string;

  if (!email || !email.includes('@')) {
    return { error: 'Please enter a valid email address.' };
  }

  const supabase = await createClient();

  const { error } = await supabase
    .from('waitlist')
    .insert({ email });

  if (error) {
    if (error.code === '23505') {
      return { error: 'You are already on the waitlist!' };
    }
    console.error('Waitlist error:', error);
    return { error: 'Something went wrong. Please try again later.' };
  }

  return { success: 'You have been added to the waitlist! Stay tuned.' };
}
