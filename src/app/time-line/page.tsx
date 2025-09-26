"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Star, Sparkles } from "lucide-react";

// Dữ liệu timeline các mốc lịch sử - Hợp tác quốc tế của Việt Nam
// Sắp xếp theo thứ tự thời gian và chia thành 3 giai đoạn
const rawTimelineData = [
  // GIAI ĐOẠN 1: 1920-1945 - Xây dựng nền tảng
  {
    id: 1,
    year: "1920-1924",
    yearSort: 1920,
    title: "Tham gia Quốc tế Cộng sản",
    color: "red",
    phase: "Nền tảng",
    content:
      "Nguyễn Ái Quốc bỏ phiếu tán thành gia nhập Quốc tế Cộng sản III (1920), tham dự Đại hội V (1924) tại Liên Xô.",
    significance:
      "Kết nối với phong trào Cộng sản và Công nhân Quốc tế, xác định con đường cách mạng.",
    description:
      "Nguyễn Ái Quốc bỏ phiếu tán thành gia nhập Quốc tế Cộng sản III (1920), tham dự Đại hội V (1924) tại Liên Xô.",
  },
  {
    id: 2,
    year: "1921-1925",
    yearSort: 1921,
    title: "Thành lập Tổ chức liên minh",
    color: "green",
    phase: "Nền tảng",
    content:
      "Sáng lập Hội Liên hiệp Thuộc địa tại Pháp và tham gia thành lập Hội Liên hiệp các Dân tộc bị áp bức tại Trung Quốc.",
    significance:
      "Tranh thủ sự ủng hộ của các dân tộc bị áp bức, đặt nền móng cho Mặt trận nhân dân Á-Phi sau này.",
    description:
      "Sáng lập Hội Liên hiệp Thuộc địa tại Pháp và tham gia thành lập Hội Liên hiệp các Dân tộc bị áp bức tại Trung Quốc.",
  },
  {
    id: 3,
    year: "1941",
    yearSort: 1941,
    title: "Thành lập Việt Minh",
    color: "red",
    phase: "Nền tảng",
    content: "Thành lập Mặt trận Việt Nam Độc lập đồng minh.",
    significance:
      "Tự lực, tự cường, chuẩn bị giành độc lập, tạo cơ sở hợp tác với Đồng Minh chống Phát xít.",
    description: "Thành lập Mặt trận Việt Nam Độc lập đồng minh.",
  },

  // GIAI ĐOẠN 2: 1945-1975 - Đoàn kết Chiến đấu
  {
    id: 4,
    year: "1949",
    yearSort: 1949,
    title: "Hợp tác Toàn diện với Trung Quốc và Liên Xô",
    color: "red",
    phase: "Chiến đấu",
    content:
      "Sau khi nước Cộng hòa Nhân dân Trung Hoa thành lập (1949), Việt Nam thúc đẩy quan hệ chính trị, quân sự và kinh tế.",
    significance:
      "Tạo sức mạnh tổng hợp trong cuộc đấu tranh giải phóng dân tộc",
    description:
      "Thiết lập quan hệ hợp tác toàn diện với Trung Quốc và Liên Xô, nhận được viện trợ vũ khí, đào tạo cán bộ và hỗ trợ ngoại giao.",
  },
  {
    id: 5,
    year: "1951",
    yearSort: 1951,
    title: "Liên minh Việt-Miên-Lào",
    color: "green",
    phase: "Chiến đấu",
    content:
      "Hợp tác quân sự, chính trị, và hỗ trợ lẫn nhau trong cuộc kháng chiến chung tại Đông Dương.",
    significance:
      "Tạo thế chiến lược vững chắc, đảm bảo chiến thắng Điện Biên Phủ và kháng chiến chống Mỹ.",
    description:
      "Đại hội liên minh Việt - Miên - Lào tại chiến khu Việt bắc tháng 3/1951. Hợp tác quân sự, chính trị trong kháng chiến.",
  },
  {
    id: 6,
    year: "1955",
    yearSort: 1955,
    title: "Tham gia Phong trào Á-Phi",
    color: "blue",
    phase: "Chiến đấu",
    content:
      "Tham dự Hội nghị Bandung (Indonesia), củng cố đoàn kết với các nước mới giành độc lập.",
    significance:
      "Nâng cao vị thế quốc tế, tranh thủ sự ủng hộ của thế giới thứ Ba.",
    description:
      "Việt Nam tham dự Hội nghị Á-Phi tại Bandung, Indonesia (1955), thúc đẩy đoàn kết các quốc gia vừa giành độc lập.",
  },
  {
    id: 7,
    year: "Thập niên 1960",
    yearSort: 1960,
    title: "Mặt trận Nhân dân Thế giới",
    color: "white",
    phase: "Chiến đấu",
    content:
      "Vận động và nhận sự ủng hộ từ nhân dân, trí thức và phong trào hòa bình tại Pháp, Thụy Điển, Cuba và cả tại Mỹ.",
    significance:
      "Tạo áp lực ngoại giao, cô lập đối phương, nhận sự ủng hộ vật chất từ tổ chức quốc tế.",
    description:
      "Hình thành mặt trận nhân dân thế giới đoàn kết với Việt Nam chống đế quốc xâm lược, bao gồm cả nhân dân yêu chuộng hòa bình.",
  },
  {
    id: 8,
    year: "1973",
    yearSort: 1973,
    title: "Ký Hiệp định Paris",
    color: "gold",
    phase: "Chiến đấu",
    content:
      "Ký kết Hiệp định Paris chấm dứt chiến tranh và lập lại hòa bình ở Việt Nam.",
    significance:
      "Thể hiện thắng lợi của sự kết hợp sức mạnh dân tộc và sức mạnh thời đại.",
    description:
      "Ký kết Hiệp định Paris chấm dứt chiến tranh và lập lại hòa bình ở Việt Nam.",
  },

  // GIAI ĐOẠN 3: 1975-Nay - Hội nhập Quốc tế
  {
    id: 9,
    year: "1977",
    yearSort: 1977,
    title: "Gia nhập Liên Hợp Quốc",
    color: "white",
    phase: "Hội nhập",
    content:
      "Trở thành thành viên chính thức LHQ, tham gia các cơ chế hợp tác toàn cầu.",
    significance:
      "Khẳng định vị thế quốc tế, tham gia giải quyết các vấn đề toàn cầu.",
    description:
      "Trở thành thành viên chính thức LHQ, tham gia các cơ chế hợp tác toàn cầu.",
  },
  {
    id: 10,
    year: "1995",
    yearSort: 1995,
    title: "Bình thường hóa quan hệ Việt-Mỹ & Gia nhập ASEAN",
    color: "blue",
    phase: "Hội nhập",
    content:
      "Kết thúc quá trình hàn gắn sau chiến tranh với Mỹ và gia nhập ASEAN, bắt đầu hội nhập khu vực.",
    significance:
      "Chuyển từ đối đầu sang hợp tác, tham gia xây dựng Cộng đồng ASEAN.",
    description:
      "Kết thúc quá trình hàn gắn sau chiến tranh với Mỹ và gia nhập ASEAN, bắt đầu hội nhập khu vực.",
  },
  {
    id: 11,
    year: "1998-2007",
    yearSort: 1998,
    title: "Gia nhập APEC, ASEM, WTO",
    color: "silver",
    phase: "Hội nhập",
    content:
      "Tham gia APEC, ASEM và Tổ chức Thương mại Thế giới (WTO - 2007). Hội nhập kinh tế quốc tế sâu rộng.",
    significance:
      "Tham gia định hình các sân chơi kinh tế khu vực và toàn cầu.",
    description:
      "Tham gia APEC, ASEM và Tổ chức Thương mại Thế giới (WTO - 2007). Hội nhập kinh tế quốc tế sâu rộng.",
  },
  {
    id: 12,
    year: "2007-Nay",
    yearSort: 2007,
    title: "Quan hệ Đối tác Chiến lược",
    color: "gold",
    phase: "Hội nhập",
    content:
      "Thiết lập quan hệ đối tác với các cường quốc: Nhật, Hàn, Nga, Ấn Độ, EU, Mỹ, Trung Quốc. Hợp tác đa lĩnh vực.",
    significance:
      "Đa phương hóa, đa dạng hóa quan hệ quốc tế, nâng cao vị thế Việt Nam.",
    description:
      "Thiết lập quan hệ đối tác với các cường quốc: Nhật, Hàn, Nga, Ấn Độ, EU, Mỹ, Trung Quốc. Hợp tác đa lĩnh vực.",
  },
  {
    id: 13,
    year: "2014-2020",
    yearSort: 2014,
    title: "Đóng góp Hòa bình Quốc tế",
    color: "white",
    phase: "Hội nhập",
    content:
      "Tham gia Lực lượng Gìn giữ Hòa bình LHQ, Chủ tịch ASEAN 2020, Ủy viên không thường trực HĐBA LHQ.",
    significance:
      "Thể hiện trách nhiệm với hòa bình, an ninh quốc tế và vai trò tích cực trong cộng đồng quốc tế.",
    description:
      "Tham gia Lực lượng Gìn giữ Hòa bình LHQ, Chủ tịch ASEAN 2020, Ủy viên không thường trực HĐBA LHQ.",
  },
];

// Hàm tính toán vị trí ngôi sao theo layout 3 giai đoạn
const calculateStarPositions = () => {
  // Sắp xếp theo thứ tự thời gian
  const sortedData = [...rawTimelineData].sort(
    (a, b) => a.yearSort - b.yearSort
  );

  // Chia thành 3 giai đoạn
  const phases = {
    "Nền tảng": {
      minX: 5,
      maxX: 32,
      color: "from-red-900/30 to-orange-900/30",
    },
    "Chiến đấu": {
      minX: 35,
      maxX: 67,
      color: "from-green-900/30 to-blue-900/30",
    },
    "Hội nhập": {
      minX: 70,
      maxX: 95,
      color: "from-blue-900/30 to-purple-900/30",
    },
  };

  // Nhóm theo giai đoạn
  const groupedByPhase = sortedData.reduce((acc, item) => {
    if (!acc[item.phase]) acc[item.phase] = [];
    acc[item.phase].push(item);
    return acc;
  }, {} as Record<string, typeof sortedData>);

  // Tính toán vị trí cho từng ngôi sao
  return sortedData.map((item) => {
    const phaseData = phases[item.phase as keyof typeof phases];
    const phaseItems = groupedByPhase[item.phase];
    const itemIndexInPhase = phaseItems.findIndex((p) => p.id === item.id);

    // Tính X theo thứ tự trong giai đoạn (từ trái qua phải)
    const xRange = phaseData.maxX - phaseData.minX;
    const xStep = xRange / (phaseItems.length + 1);
    const x = phaseData.minX + (itemIndexInPhase + 1) * xStep;

    // Y ngẫu nhiên trong khoảng 20-80%
    const y = 20 + Math.random() * 60;

    return {
      ...item,
      position: { x, y },
    };
  });
};

// Tạo timeline data với vị trí đã tính toán
const timelineData = calculateStarPositions();

// Component ngôi sao timeline tương tác
const TimelineStar = ({
  data,
  isVisible,
}: {
  data: (typeof timelineData)[0];
  isVisible: boolean;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({
    position: "bottom-full",
    transform: "-translate-x-1/2",
    arrowPosition: "bottom",
  });

  // Định nghĩa màu sắc cho từng loại
  const getStarColor = (color: string) => {
    switch (color) {
      case "red":
        return "text-red-400";
      case "green":
        return "text-green-400";
      case "blue":
        return "text-blue-400";
      case "white":
        return "text-white";
      case "gold":
        return "text-yellow-400";
      case "silver":
        return "text-gray-300";
      default:
        return "text-yellow-400";
    }
  };

  // Trả về màu thuần cho fill
  const getStarFillColor = (color: string) => {
    switch (color) {
      case "red":
        return "fill-red-400";
      case "green":
        return "fill-green-400";
      case "blue":
        return "fill-blue-400";
      case "white":
        return "fill-white";
      case "gold":
        return "fill-yellow-400";
      case "silver":
        return "fill-gray-300";
      default:
        return "fill-yellow-400";
    }
  };

  return (
    <motion.div
      className="absolute cursor-pointer z-20"
      style={{
        left: `${data.position.x}%`,
        top: `${data.position.y}%`,
      }}
      initial={{
        opacity: 0,
        scale: 0,
        rotate: 0,
      }}
      animate={
        isVisible
          ? {
              opacity: 1,
              scale: 1,
              rotate: [0, 360],
            }
          : {
              opacity: 0,
              scale: 0,
            }
      }
      transition={{
        duration: 0.8,
        delay: data.id * 0.5,
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      onHoverStart={() => {
        setIsHovered(true);
        // Tính toán vị trí tooltip thông minh
        const calculateTooltipPosition = () => {
          const starX = data.position.x;
          const starY = data.position.y;

          let position = "bottom-full";
          let transform = "-translate-x-1/2";
          let arrowPosition = "bottom";

          // Ưu tiên hiển thị tooltip phía trên nếu có đủ không gian
          if (starY > 40) {
            position = "bottom-full";
            arrowPosition = "bottom";
          } else {
            // Nếu gần cạnh trên, hiển thị phía dưới
            position = "top-full";
            arrowPosition = "top";
          }

          // Điều chỉnh căn lề ngang để tránh vượt khỏi màn hình
          if (starX < 20) {
            // Quá gần cạnh trái -> căn lề trái
            transform = "translate-x-0";
          } else if (starX > 80) {
            // Quá gần cạnh phải -> căn lề phải
            transform = "-translate-x-full";
          } else {
            // Vị trí bình thường -> căn giữa
            transform = "-translate-x-1/2";
          }

          setTooltipPosition({ position, transform, arrowPosition });
        };

        calculateTooltipPosition();
      }}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        className="relative"
        animate={
          isHovered
            ? {
                scale: 1.8,
                rotate: [0, 15, -15, 0],
              }
            : {
                scale: 1.2,
                rotate: 0,
              }
        }
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="drop-shadow-2xl filter"
          animate={{
            filter: isHovered
              ? [
                  "drop-shadow(0 0 10px rgba(255, 255, 0, 0.8))",
                  "drop-shadow(0 0 20px rgba(255, 255, 0, 1))",
                  "drop-shadow(0 0 10px rgba(255, 255, 0, 0.8))",
                ]
              : "drop-shadow(0 0 5px rgba(255, 255, 0, 0.5))",
          }}
          transition={{ duration: 1, repeat: isHovered ? Infinity : 0 }}
        >
          <Star
            size={48}
            className={`${getStarColor(
              data.color || "gold"
            )} ${getStarFillColor(data.color || "gold")}`}
            strokeWidth={2}
          />
        </motion.div>

        {/* Tooltip khi hover */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              className={`absolute ${
                tooltipPosition.position
              } left-1/2 transform ${tooltipPosition.transform} ${
                tooltipPosition.arrowPosition === "top" ? "mt-4" : "mb-4"
              } bg-black/95 text-white p-4 md:p-6 rounded-xl text-sm z-30 border border-yellow-400/50 shadow-2xl max-w-xs md:max-w-sm w-72 md:w-80`}
              initial={{
                opacity: 0,
                y: tooltipPosition.arrowPosition === "top" ? -10 : 10,
                scale: 0.8,
                filter: "blur(4px)",
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                filter: "blur(0px)",
              }}
              exit={{
                opacity: 0,
                y: tooltipPosition.arrowPosition === "top" ? -10 : 10,
                scale: 0.8,
                filter: "blur(4px)",
              }}
              transition={{
                duration: 0.2,
                ease: "easeOut",
              }}
            >
              <div className="font-bold text-yellow-300 text-lg mb-2">
                {data.year}
              </div>
              <div className="text-white font-semibold mb-3">{data.title}</div>
              <div className="text-gray-300 text-xs leading-relaxed mb-3">
                {data.description}
              </div>
              {data.significance && (
                <div className="text-yellow-200 text-xs leading-relaxed border-t border-yellow-400/30 pt-3">
                  <span className="font-medium">Ý nghĩa:</span>{" "}
                  {data.significance}
                </div>
              )}
              <div className="text-center mt-3 pt-2 border-t border-gray-600">
                <span
                  className={`text-xs font-semibold ${
                    data.phase === "Nền tảng"
                      ? "text-red-300"
                      : data.phase === "Chiến đấu"
                      ? "text-green-300"
                      : "text-blue-300"
                  }`}
                >
                  {data.phase === "Nền tảng"
                    ? "🏗️"
                    : data.phase === "Chiến đấu"
                    ? "⚔️"
                    : "🌐"}{" "}
                  {data.phase}
                </span>
              </div>
              {/* Mũi tên */}
              <div
                className={`absolute ${
                  tooltipPosition.arrowPosition === "top"
                    ? "bottom-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-black/95"
                    : "top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/95"
                }`}
              ></div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

// Component để tạo ngôi sao nền
const BackgroundStar = ({
  delay,
  duration,
  initialX,
  initialY,
}: {
  delay: number;
  duration: number;
  initialX: number;
  initialY: number;
}) => (
  <motion.div
    className="absolute text-yellow-200/30"
    style={{
      left: `${initialX}%`,
      top: `${initialY}%`,
    }}
    initial={{
      opacity: 0.2,
      scale: 0.5,
      rotate: 0,
    }}
    animate={{
      opacity: [0.2, 0.6, 0.2],
      scale: [0.5, 1, 0.5],
      rotate: [0, 180, 360],
    }}
    transition={{
      duration: duration,
      delay: delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    <Sparkles size={16} className="text-yellow-200/30 fill-yellow-200/20" />
  </motion.div>
);

// Component chấm sáng nhỏ
const Dot = ({
  delay,
  x,
  y,
  size,
}: {
  delay: number;
  x: number;
  y: number;
  size: number;
}) => (
  <motion.div
    className="absolute bg-white rounded-full"
    style={{
      left: `${x}%`,
      top: `${y}%`,
      width: `${size}px`,
      height: `${size}px`,
    }}
    initial={{ opacity: 0.2 }}
    animate={{
      opacity: [0.2, 0.8, 0.2],
    }}
    transition={{
      duration: 2 + Math.random() * 3,
      delay: delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
);

export default function TimelinePage() {
  const [backgroundStars, setBackgroundStars] = useState<
    Array<{
      id: number;
      x: number;
      y: number;
      delay: number;
      duration: number;
    }>
  >([]);

  const [dots, setDots] = useState<
    Array<{
      id: number;
      x: number;
      y: number;
      delay: number;
      size: number;
    }>
  >([]);

  const [showTimeline, setShowTimeline] = useState(false);

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Đặt flag để biết đang ở client side
    setIsClient(true);

    // Tạo ngôi sao nền chỉ khi ở client side
    const newStars = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 4 + Math.random() * 6,
    }));

    // Tạo chấm sáng nhỏ chỉ khi ở client side
    const newDots = Array.from({ length: 120 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 3,
      size: 1 + Math.random() * 3,
    }));

    setBackgroundStars(newStars);
    setDots(newDots);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Gradient - Bầu trời đêm */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900 via-blue-800 to-indigo-900">
        {/* Lớp gradient thêm để tạo độ sâu */}
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/30 via-transparent to-blue-800/20"></div>

        {/* Hiệu ứng ánh sáng mờ */}
        <div className="absolute inset-0 bg-gradient-radial from-blue-700/20 via-transparent to-transparent"></div>
      </div>

      {/* Ngôi sao nền - chỉ render khi ở client side */}
      {isClient &&
        backgroundStars.map((star) => (
          <BackgroundStar
            key={star.id}
            delay={star.delay}
            duration={star.duration}
            initialX={star.x}
            initialY={star.y}
          />
        ))}

      {/* Chấm sáng nhỏ - chỉ render khi ở client side */}
      {isClient &&
        dots.map((dot) => (
          <Dot
            key={dot.id}
            delay={dot.delay}
            x={dot.x}
            y={dot.y}
            size={dot.size}
          />
        ))}

      {/* Content chính */}
      <div className="relative z-10 min-h-screen">
        {/* Header */}
        <motion.div
          className="text-center pt-12 pb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6 text-yellow-300"
            animate={{
              textShadow: [
                "0 0 10px rgba(255, 255, 0, 0.5)",
                "0 0 20px rgba(255, 255, 0, 0.8)",
                "0 0 30px rgba(255, 255, 0, 1)",
                "0 0 20px rgba(255, 255, 0, 0.8)",
                "0 0 10px rgba(255, 255, 0, 0.5)",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            🌟 DÒNG THỜI GIAN ĐOÀN KẾT QUỐC TẾ
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Hành trình quang vinh của tư tưởng Hồ Chí Minh về đoàn kết quốc tế
            qua các mốc lịch sử
          </motion.p>

          <motion.div
            className="space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <motion.button
              className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-white font-bold py-4 px-10 rounded-full text-xl shadow-xl transform transition-all duration-300 hover:scale-105 border-2 border-yellow-300"
              whileHover={{
                scale: 1.1,
                boxShadow: "0 0 35px rgba(255, 165, 0, 0.9)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowTimeline(true)}
            >
              🚀 Khám phá ngay
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Timeline hiển thị */}
        <AnimatePresence>
          {showTimeline && (
            <motion.div
              className="absolute inset-0 z-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Nhãn các giai đoạn */}
              <motion.div
                className="absolute top-16 left-1/6 transform -translate-x-1/2 text-center z-10"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
              >
                <div className="bg-red-900/80 text-white px-4 py-2 rounded-lg border border-red-400/50">
                  <h3 className="text-lg font-bold">🏗️ Nền Tảng</h3>
                  <p className="text-sm text-red-100">1920-1945</p>
                </div>
              </motion.div>

              <motion.div
                className="absolute top-16 left-1/2 transform -translate-x-1/2 text-center z-10"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3, duration: 0.8 }}
              >
                <div className="bg-green-900/80 text-white px-4 py-2 rounded-lg border border-green-400/50">
                  <h3 className="text-lg font-bold">⚔️ Chiến Đấu</h3>
                  <p className="text-sm text-green-100">1945-1975</p>
                </div>
              </motion.div>

              <motion.div
                className="absolute top-16 right-1/6 transform translate-x-1/2 text-center z-10"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6, duration: 0.8 }}
              >
                <div className="bg-blue-900/80 text-white px-4 py-2 rounded-lg border border-blue-400/50">
                  <h3 className="text-lg font-bold">🌐 Hội Nhập</h3>
                  <p className="text-sm text-blue-100">1975-Nay</p>
                </div>
              </motion.div>

              {/* Đường phân cách các giai đoạn */}
              <motion.div
                className="absolute top-0 bottom-0 left-1/3 w-0.5 bg-gradient-to-b from-transparent via-yellow-400/50 to-transparent z-5"
                initial={{ opacity: 0, scaleY: 0 }}
                animate={{ opacity: 1, scaleY: 1 }}
                transition={{ delay: 2, duration: 1 }}
              />

              <motion.div
                className="absolute top-0 bottom-0 left-2/3 w-0.5 bg-gradient-to-b from-transparent via-yellow-400/50 to-transparent z-5"
                initial={{ opacity: 0, scaleY: 0 }}
                animate={{ opacity: 1, scaleY: 1 }}
                transition={{ delay: 2.3, duration: 1 }}
              />

              {/* Timeline Stars */}
              {timelineData.map((event) => (
                <TimelineStar key={event.id} data={event} isVisible={true} />
              ))}

              {/* Legend - Chú thích màu sắc */}
              <motion.div
                className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-30 bg-black/90 text-white p-4 rounded-lg border border-yellow-400/50"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.5, duration: 0.8 }}
              >
                <div className="flex flex-wrap gap-4 text-xs">
                  <div className="flex items-center gap-2">
                    <Star size={16} className="text-red-400 fill-red-400" />
                    <span>Cách mạng & Chính trị</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star size={16} className="text-green-400 fill-green-400" />
                    <span>Liên minh & Đoàn kết</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star size={16} className="text-blue-400 fill-blue-400" />
                    <span>Hội nhập Quốc tế</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star size={16} className="text-white fill-white" />
                    <span>Hòa bình & Nhân đạo</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star
                      size={16}
                      className="text-yellow-400 fill-yellow-400"
                    />
                    <span>Thành tựu Vĩ đại</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star size={16} className="text-gray-300 fill-gray-300" />
                    <span>Kinh tế Quốc tế</span>
                  </div>
                </div>
              </motion.div>

              {/* Back button */}
              <motion.button
                className="fixed top-6 left-6 z-30 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full shadow-lg"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowTimeline(false)}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                ← Quay lại
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Hiệu ứng chữ phía dưới */}
        {!showTimeline && (
          <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2 }}
          >
            <p className="text-blue-200 text-sm md:text-base text-center">
              🌟 Nhấn &quot;Khám phá ngay&quot; để bắt đầu hành trình qua dòng
              thời gian! ✨
            </p>
          </motion.div>
        )}
      </div>

      {/* Hiệu ứng tuyết rơi nhẹ - chỉ render khi ở client side */}
      {isClient && (
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: ["-10vh", "110vh"],
                x: [0, Math.random() * 100 - 50],
                opacity: [0, 0.6, 0],
              }}
              transition={{
                duration: 10 + Math.random() * 10,
                delay: Math.random() * 5,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
