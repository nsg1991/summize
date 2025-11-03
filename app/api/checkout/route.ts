import { NextResponse } from 'next/server'
import Stripe from 'stripe'

export async function POST() {
  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: '2024-06-20' })
    const price = process.env.STRIPE_PRICE_ID
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'

    if (!price) return NextResponse.json({ error: 'Missing STRIPE_PRICE_ID' }, { status: 400 })

    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      line_items: [{ price, quantity: 1 }],
      success_url: `${baseUrl}/dashboard?status=success`,
      cancel_url: `${baseUrl}/pricing?status=cancelled`,
      // You can add client_reference_id or metadata later to map users
    })

    return NextResponse.json({ url: session.url })
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || 'Stripe error' }, { status: 500 })
  }
}
