# Hướng dẫn sử dụng AI Chatbot với Google Gemini

## Cài đặt và Cấu hình

### 1. Lấy API Key từ Google AI Studio

1. Truy cập: https://makersuite.google.com/app/apikey
2. Đăng nhập bằng tài khoản Google
3. Tạo API key mới
4. Sao chép API key

### 2. Cấu hình Environment Variables

Mở file `.env.local` và thay thế `your_gemini_api_key_here` bằng API key thực tế:

```env
GOOGLE_AI_API_KEY=your_actual_api_key_here
```

### 3. Chạy ứng dụng

```bash
npm run dev
```

## Cách sử dụng

### Truy cập Chatbot

1. Mở trình duyệt và truy cập: http://localhost:3000
2. Nhấp vào "🤖 AI Chat" trong menu navigation
3. Hoặc truy cập trực tiếp: http://localhost:3000/chat

### Tính năng

- **Chat thời gian thực**: Trò chuyện với AI được hỗ trợ bởi Google Gemini
- **Lịch sử hội thoại**: AI nhớ ngữ cảnh của cuộc trò chuyện
- **Giao diện thân thiện**: Thiết kế hiện đại với animation mượt mà
- **Responsive**: Hoạt động tốt trên mọi thiết bị
- **Xóa chat**: Bắt đầu lại cuộc trò chuyện mới

### Các file quan trọng

- `src/lib/gemini.ts`: Logic gọi API Gemini
- `src/app/api/chat/route.ts`: API endpoint xử lý chat
- `src/app/chat/page.tsx`: Giao diện chatbot
- `.env.local`: Cấu hình API key

## Tùy chỉnh

### Thay đổi System Prompt

Trong file `src/lib/gemini.ts`, bạn có thể tùy chỉnh system prompt:

```typescript
const systemPrompt = `Bạn là một trợ lý AI chuyên về lịch sử Việt Nam và tư tưởng Hồ Chí Minh...`;
```

### Thay đổi Model

Bạn có thể sử dụng các model khác của Gemini:

```typescript
const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" }); // Để xử lý hình ảnh
```

## Lưu ý bảo mật

- Không commit file `.env.local` lên Git
- API key nên được bảo mật và không chia sẻ
- Nên giới hạn rate limit cho API calls trong production
