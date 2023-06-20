import { NextResponse } from 'next/server';

export async function GET(request) {
    const { searchParams } = new URL(request.url)
    const delay = searchParams.get('delay') || 3000;
    await new Promise(resolve => setTimeout(resolve, delay));
    return NextResponse.json({ message: 'Slow API response' });
}
