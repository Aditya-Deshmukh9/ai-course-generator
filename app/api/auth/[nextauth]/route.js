import { NextResponse } from 'next/server';

export function GET() {
  return NextResponse.json({
    msg: 'success',
  });
}

export { handler };
