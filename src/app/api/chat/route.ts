import { NextRequest, NextResponse } from 'next/server';
import { generateResponse } from '@/lib/gemini';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { message, conversationHistory } = body;

    if (!message) {
      return NextResponse.json(
        { error: 'Tin nhắn không được để trống' },
        { status: 400 }
      );
    }

    // Gọi Gemini API
    const result = await generateResponse(message, conversationHistory);

    if (!result.success) {
      return NextResponse.json(
        { error: result.message },
        { status: 500 }
      );
    }

    return NextResponse.json({
      message: result.message,
      timestamp: new Date().toISOString(),
    });

  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Lỗi server nội bộ' },
      { status: 500 }
    );
  }
}