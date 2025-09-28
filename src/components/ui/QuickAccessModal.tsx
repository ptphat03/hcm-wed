"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ExternalLink,
  BookOpen,
  Users,
  Target,
  Lightbulb,
} from "lucide-react";

interface QuickAccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: "core-thoughts" | "strategic-goals" | "multilateral" | "global-vision";
}

const modalContents = {
  "core-thoughts": {
    title: "Tư tưởng Cốt lõi",
    icon: Lightbulb,
    content: (
      <div className="space-y-8">
        <div className="prose prose-invert max-w-none">
          <p className="text-lg text-gray-300 mb-6">
            Tư tưởng Hồ Chí Minh về đoàn kết quốc tế là một hệ thống lý luận
            hoàn chỉnh, mang tính chiến lược, không chỉ giúp cách mạng Việt Nam
            giành thắng lợi mà còn góp phần định hình đường lối đối ngoại của
            Việt Nam trong thời kỳ hội nhập hiện nay.
          </p>

          <h3 className="text-2xl font-bold text-yellow-400 mb-4">
            I. Tư tưởng Cốt lõi: Các Nguyên tắc Chỉ đạo Vững chắc
          </h3>

          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-xl border border-gray-700 mb-6">
            <h4 className="text-xl font-semibold text-green-400 mb-3">
              1. Nguyên tắc Độc lập, Tự chủ và Tự lực cánh sinh
            </h4>
            <p className="text-gray-300 mb-4">
              Hồ Chí Minh khẳng định nội lực là nhân tố quyết định mọi thắng
              lợi. Đoàn kết quốc tế là để tranh thủ sự giúp đỡ, nhưng nội lực
              phải là nền tảng để ngoại lực phát huy tác dụng.
            </p>

            <div className="space-y-4">
              <div className="bg-gray-800/30 p-4 rounded-lg">
                <h5 className="font-semibold text-blue-400 mb-2">
                  Dựa vào sức mình là chính:
                </h5>
                <p className="text-gray-300 text-sm">
                  &ldquo;Muốn người ta giúp cho, thì trước mình phải tự giúp lấy
                  mình đã&rdquo;. Một dân tộc không tự lực cánh sinh mà chỉ ngồi
                  chờ giúp đỡ thì &ldquo;không xứng đáng được độc lập&rdquo;.
                </p>
              </div>

              <div className="bg-gray-800/30 p-4 rounded-lg">
                <h5 className="font-semibold text-blue-400 mb-2">
                  Đường lối độc lập:
                </h5>
                <p className="text-gray-300 text-sm">
                  Độc lập nghĩa là Việt Nam &ldquo;điều khiển lấy mọi công việc
                  của chúng tôi, không có sự can thiệp ở ngoài vào&rdquo;. Đây
                  là nguyên tắc bất biến để bảo vệ lợi ích quốc gia – dân tộc.
                </p>
              </div>

              <div className="bg-gray-800/30 p-4 rounded-lg">
                <h5 className="font-semibold text-blue-400 mb-2">
                  Thực lực là chiêng, ngoại giao là tiếng:
                </h5>
                <p className="text-gray-300 text-sm">
                  &ldquo;Thực lực là cái chiêng, ngoại giao là cái tiếng, chiêng
                  có to tiếng mới lớn&rdquo;.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-xl border border-gray-700">
            <h4 className="text-xl font-semibold text-green-400 mb-3">
              2. Nguyên tắc Thống nhất Mục tiêu và &ldquo;Có Lý, Có Tình&rdquo;
            </h4>
            <p className="text-gray-300 mb-4">
              Đoàn kết quốc tế phải dựa trên cơ sở thống nhất mục tiêu chung là
              đấu tranh chống chủ nghĩa đế quốc vì hòa bình, độc lập dân tộc,
              dân chủ và tiến bộ xã hội.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-800/30 p-4 rounded-lg">
                <h5 className="font-semibold text-blue-400 mb-2">
                  Có lý (Tính nguyên tắc):
                </h5>
                <p className="text-gray-300 text-sm">
                  Sự đoàn kết phải dựa trên những chân lý phổ biến của nhân
                  loại. Lập luận dựa trên nguyên tắc về tính đồng nhất của lý
                  tưởng.
                </p>
              </div>

              <div className="bg-gray-800/30 p-4 rounded-lg">
                <h5 className="font-semibold text-blue-400 mb-2">
                  Có tình (Tính nhân văn):
                </h5>
                <p className="text-gray-300 text-sm">
                  Đòi hỏi sự tôn trọng lẫn nhau, đối xử với bạn bè quốc tế trên
                  tinh thần hữu nghị và nhân văn.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  "strategic-goals": {
    title: "Mục tiêu Chiến lược",
    icon: Target,
    content: (
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-yellow-400 mb-4">
          II. Định hướng và Mục tiêu Lâu dài trong Quan hệ Quốc tế
        </h3>

        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-xl border border-gray-700">
          <h4 className="text-xl font-semibold text-green-400 mb-3">
            1. Kết hợp Sức mạnh Dân tộc với Sức mạnh Thời đại
          </h4>
          <p className="text-gray-300">
            Mục tiêu xuyên suốt là tập hợp lực lượng bên ngoài, tranh thủ sự ủng
            hộ và giúp đỡ của bạn bè quốc tế, kết hợp sức mạnh nội tại (yếu tố
            quyết định) với sức mạnh của các trào lưu cách mạng thời đại để tạo
            nên sức mạnh tổng hợp cho cách mạng Việt Nam.
          </p>
        </div>

        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-xl border border-gray-700">
          <h4 className="text-xl font-semibold text-green-400 mb-3">
            2. Trách nhiệm Quốc tế và Mục tiêu Lâu dài
          </h4>
          <p className="text-gray-300 mb-4">
            Hồ Chí Minh chỉ ra rằng đoàn kết quốc tế không chỉ vì thắng lợi của
            riêng Việt Nam mà còn vì sự nghiệp chung của nhân loại tiến bộ.
          </p>

          <div className="space-y-4">
            <div className="bg-gray-800/30 p-4 rounded-lg">
              <h5 className="font-semibold text-blue-400 mb-2">
                Gắn liền CNXH:
              </h5>
              <p className="text-gray-300 text-sm">
                Đối với phong trào Cộng sản và công nhân quốc tế, Người giương
                cao ngọn cờ
                <strong className="text-yellow-400">
                  {" "}
                  Độc lập dân tộc gắn liền với Chủ nghĩa xã hội
                </strong>
                .
              </p>
            </div>

            <div className="bg-gray-800/30 p-4 rounded-lg">
              <h5 className="font-semibold text-blue-400 mb-2">
                Hòa bình Chân chính:
              </h5>
              <p className="text-gray-300 text-sm">
                Luôn đấu tranh cho hòa bình, nhưng đó phải là &ldquo;một nền hòa
                bình chân chính xây trên công bình và lý tưởng dân chủ&rdquo;.
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  multilateral: {
    title: "Hợp tác Đa phương",
    icon: Users,
    content: (
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-yellow-400 mb-4">
          III. Các Hình thức Hợp tác với Nhiều Quốc gia và Tổ chức
        </h3>

        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-xl border border-gray-700">
          <h4 className="text-xl font-semibold text-green-400 mb-3">
            1. Đoàn kết Khu vực và Láng giềng
          </h4>

          <div className="space-y-4">
            <div className="bg-gray-800/30 p-4 rounded-lg">
              <h5 className="font-semibold text-blue-400 mb-2">
                Việt Nam – Lào – Campuchia:
              </h5>
              <p className="text-gray-300 text-sm">
                Quan hệ chiến lược &ldquo;như môi với răng&rdquo;. Cử cán bộ
                Việt Minh sang huấn luyện Pathet Lào và Khmer Issarak, tạo sức
                mạnh tổng hợp để cùng chống kẻ thù chung.
              </p>
            </div>

            <div className="bg-gray-800/30 p-4 rounded-lg">
              <h5 className="font-semibold text-blue-400 mb-2">
                Với Trung Quốc:
              </h5>
              <p className="text-gray-300 text-sm">
                Củng cố quan hệ hữu nghị, coi đây là đồng minh chiến lược để
                nhận viện trợ vũ khí, đào tạo cán bộ và hỗ trợ ngoại giao.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-xl border border-gray-700">
          <h4 className="text-xl font-semibold text-green-400 mb-3">
            2. Đoàn kết Á – Phi và Nhân dân Thế giới
          </h4>

          <div className="space-y-4">
            <div className="bg-gray-800/30 p-4 rounded-lg">
              <h5 className="font-semibold text-blue-400 mb-2">
                Mặt trận Á – Phi:
              </h5>
              <p className="text-gray-300 text-sm">
                Tham gia sáng lập Hội Liên hiệp các dân tộc bị áp bức. Tích cực
                tham dự Hội nghị Á-Phi tại
                <strong className="text-yellow-400"> Bandung năm 1955</strong>,
                góp phần cổ vũ phong trào giải phóng dân tộc.
              </p>
            </div>

            <div className="bg-gray-800/30 p-4 rounded-lg">
              <h5 className="font-semibold text-blue-400 mb-2">
                Mặt trận Nhân dân Thế giới:
              </h5>
              <p className="text-gray-300 text-sm">
                Tranh thủ sự ủng hộ của các nước xã hội chủ nghĩa và nhân dân
                tiến bộ khắp năm châu, hình thành Mặt trận nhân dân thế giới
                đoàn kết với Việt Nam.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-xl border border-gray-700">
          <h4 className="text-xl font-semibold text-green-400 mb-3">
            3. Phương châm Đối ngoại Hiện đại
          </h4>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-800/30 p-4 rounded-lg">
              <h5 className="font-semibold text-blue-400 mb-2">
                Đa dạng hóa, đa phương hóa:
              </h5>
              <p className="text-gray-300 text-sm">
                Đường lối đối ngoại độc lập, tự chủ, hòa bình, hữu nghị, hợp tác
                và phát triển.
              </p>
            </div>

            <div className="bg-gray-800/30 p-4 rounded-lg">
              <h5 className="font-semibold text-blue-400 mb-2">
                &ldquo;Cây tre Việt Nam&rdquo;:
              </h5>
              <p className="text-gray-300 text-sm">
                Gốc vững, thân chắc, cành uyển chuyển - kiên định về nguyên tắc,
                linh hoạt về sách lược.
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  "global-vision": {
    title: "Tầm nhìn Toàn cầu",
    icon: BookOpen,
    content: (
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-yellow-400 mb-4">
          IV. Góc nhìn Toàn diện về Vấn đề Quốc tế và Khu vực
        </h3>

        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-xl border border-gray-700">
          <h4 className="text-xl font-semibold text-green-400 mb-3">
            1. Nhận thức về Thời đại và Toàn cầu hóa
          </h4>
          <p className="text-gray-300">
            Người nhận thức rằng vận mệnh của mỗi dân tộc không thể tách rời vận
            mệnh chung của cả loài người. Trong bối cảnh toàn cầu hóa và chủ
            nghĩa đa phương là xu thế chủ đạo, Việt Nam phải kết hợp sức mạnh
            dân tộc với sức mạnh thời đại để hội nhập quốc tế toàn diện, sâu
            rộng.
          </p>
        </div>

        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-xl border border-gray-700">
          <h4 className="text-xl font-semibold text-green-400 mb-3">
            2. Tinh thần Hợp tác và Hữu nghị
          </h4>
          <p className="text-gray-300 mb-4">
            Hồ Chí Minh chủ trương mở rộng hợp tác với tất cả các nước, không
            phân biệt hệ thống chính trị hay xã hội, trên cơ sở chân thành, bình
            đẳng và cùng có lợi.
          </p>

          <div className="space-y-4">
            <div className="bg-gray-800/30 p-4 rounded-lg">
              <h5 className="font-semibold text-blue-400 mb-2">
                Phương châm &ldquo;Thêm bạn bớt thù&rdquo;:
              </h5>
              <p className="text-gray-300 text-sm">
                &ldquo;Làm bạn với tất cả mọi nước dân chủ và không gây thù oán
                với một ai&rdquo;.
              </p>
            </div>

            <div className="bg-gray-800/30 p-4 rounded-lg">
              <h5 className="font-semibold text-blue-400 mb-2">
                Đối thoại thay vì đối đầu:
              </h5>
              <p className="text-gray-300 text-sm">
                Kiên trì con đường thương lượng, đối thoại để giải quyết xung
                đột, thể hiện sự mềm dẻo, nhân nhượng có nguyên tắc trong ngoại
                giao.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-xl border border-gray-700">
          <h4 className="text-xl font-semibold text-green-400 mb-3">
            3. Đấu tranh chống sai lầm
          </h4>
          <p className="text-gray-300">
            Để củng cố khối đoàn kết, Hồ Chí Minh yêu cầu các lực lượng cách
            mạng phải kiên trì đấu tranh chống lại các khuynh hướng sai lầm như{" "}
            <strong className="text-red-400">Chủ nghĩa vị kỷ dân tộc</strong> và
            <strong className="text-red-400"> Chủ nghĩa sô-vanh</strong>, những
            khuynh hướng làm suy yếu sức mạnh đoàn kết và thống nhất các lực
            lượng cách mạng thế giới.
          </p>
        </div>

        <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 p-6 rounded-xl border border-blue-700/50">
          <h4 className="text-lg font-semibold text-blue-400 mb-3 flex items-center">
            <ExternalLink className="w-5 h-5 mr-2" />
            Nguồn tham khảo
          </h4>
          <div className="space-y-2 text-sm">
            <p className="text-gray-300">
              1.{" "}
              <a
                href="https://www.tapchicongsan.org.vn"
                className="text-blue-400 hover:underline"
              >
                Tạp chí Cộng sản - Tư tưởng Hồ Chí Minh về độc lập, tự chủ trong
                đối ngoại
              </a>
            </p>
            <p className="text-gray-300">
              2.{" "}
              <a
                href="https://loigiaihay.com"
                className="text-blue-400 hover:underline"
              >
                Nguyên tắc đoàn kết quốc tế
              </a>
            </p>
            <p className="text-gray-300">
              3.{" "}
              <a
                href="https://tcnn.vn"
                className="text-blue-400 hover:underline"
              >
                Tư duy hài hòa uyển chuyển &quot;có lý có tình&quot; của Chủ
                tịch Hồ Chí Minh
              </a>
            </p>
          </div>
        </div>
      </div>
    ),
  },
};

export const QuickAccessModal: React.FC<QuickAccessModalProps> = ({
  isOpen,
  onClose,
  type,
}) => {
  const content = modalContents[type];
  const Icon = content.icon;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="relative w-full max-w-6xl max-h-[90vh] bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-700 shadow-2xl overflow-hidden"
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-700 bg-gradient-to-r from-yellow-900/20 to-red-900/20">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-red-500 rounded-xl flex items-center justify-center">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">
                    {content.title}
                  </h2>
                  <p className="text-gray-400">
                    Tư tưởng Hồ Chí Minh về đoàn kết quốc tế
                  </p>
                </div>
              </div>

              <motion.button
                onClick={onClose}
                className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="w-6 h-6" />
              </motion.button>
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
              {content.content}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
