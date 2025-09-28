import { GoogleGenerativeAI } from '@google/generative-ai';

// Khởi tạo Google AI với API key
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_API_KEY!);

export async function generateResponse(message: string, conversationHistory: string[] = []) {
  try {
    // Sử dụng model Gemini 2.5 Flash (model mới nhất và ổn định)
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    // Tạo context từ lịch sử hội thoại
    const context = conversationHistory.length > 0 
      ? `Lịch sử hội thoại:\n${conversationHistory.join('\n')}\n\nTin nhắn mới: ${message}`
      : message;

    // Tạo prompt hệ thống
    const systemPrompt = `Bạn là trợ lý AI của Bảo tàng Tư tưởng Hồ Chí Minh, chuyên về chủ đề "Đoàn kết Quốc tế". Bạn có kiến thức sâu rộng về:

1. Tư tưởng Hồ Chí Minh về đoàn kết quốc tế
2. Lịch sử phong trào cách mạng Việt Nam
3. Các mối quan hệ quốc tế của Việt Nam
4. Ba lực lượng đoàn kết: phong trào Cộng sản, phong trào giải phóng dân tộc, phong trào hòa bình dân chủ
5. Bốn mặt trận đoàn kết: đại đoàn kết dân tộc, Việt-Miên-Lào, nhân dân Á-Phi, nhân dân thế giới

Hãy trả lời câu hỏi một cách:
- Chính xác và có căn cứ lịch sử
- Thân thiện và dễ hiểu
- Liên kết với triển lãm của bảo tàng khi có thể
- Nếu không biết, hãy thành thật và gợi ý người dùng tìm hiểu thêm

${context}`;

    // Gửi yêu cầu tới Gemini
    const result = await model.generateContent(systemPrompt);
    const response = await result.response;
    
    return {
      success: true,
      message: response.text(),
    };
  } catch (error) {
    console.error('Lỗi khi gọi Gemini API:', error);
    return {
      success: false,
      message: 'Xin lỗi, đã có lỗi xảy ra. Vui lòng thử lại sau.',
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
}