"use client";

import { useState, useRef, useEffect } from "react";

export default function Home() {
  const [items, setItems] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isSpinning, setIsSpinning] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [rotation, setRotation] = useState(0);
  const rouletteRef = useRef<HTMLDivElement>(null);

  const colors = [
    "#FF6B6B",
    "#4ECDC4",
    "#45B7D1",
    "#96CEB4",
    "#FFEAA7",
    "#DDA0DD",
    "#98D8C8",
    "#F7DC6F",
    "#BB8FCE",
    "#85C1E9",
  ];

  const addItem = () => {
    if (inputValue.trim() && !isSpinning) {
      setItems([...items, inputValue.trim()]);
      setInputValue("");
    }
  };

  const removeItem = (index: number) => {
    if (!isSpinning) {
      setItems(items.filter((_, i) => i !== index));
    }
  };

  const spinRoulette = () => {
    if (items.length === 0 || isSpinning) return;

    setIsSpinning(true);
    setSelectedItem(null);

    // Random spin duration between 3-5 seconds
    const spinDuration = Math.random() * 2000 + 3000;

    // Calculate random final rotation
    const randomIndex = Math.floor(Math.random() * items.length);
    const anglePerSegment = 360 / items.length;
    const baseRotation = rotation;
    const finalRotation =
      baseRotation +
      360 * 5 +
      (360 - (randomIndex * anglePerSegment + anglePerSegment / 2));

    setRotation(finalRotation);

    setTimeout(() => {
      setIsSpinning(false);
      const winner = items[randomIndex];
      setSelectedItem(winner);

      // Remove the selected item after showing the result
      setTimeout(() => {
        setItems(items.filter((_, i) => i !== randomIndex));
        setSelectedItem(null);
      }, 2000);
    }, spinDuration);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      addItem();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 to-pink-500 p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center mb-6 sm:mb-8">
          🎯 Roulette Wheel
        </h1>

        <div className="bg-white rounded-lg p-4 sm:p-6 mb-6 sm:mb-8 shadow-lg">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-4">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Masukkan item untuk roulette..."
              className="flex-1 px-3 sm:px-4 py-2 text-gray-700 font-bold border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm sm:text-base"
              disabled={isSpinning}
            />
            <button
              onClick={addItem}
              disabled={!inputValue.trim() || isSpinning}
              className="px-4 sm:px-6 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors text-sm sm:text-base font-medium"
            >
              Tambah
            </button>
          </div>

          <div className="flex flex-wrap gap-2">
            {items.map((item, index) => (
              <div
                key={index}
                className="flex items-center bg-gray-100 px-2 sm:px-3 py-1 rounded-full font-bold text-gray-600 text-xs sm:text-sm"
              >
                <span className="max-w-[100px] sm:max-w-none truncate">
                  {item}
                </span>
                <button
                  onClick={() => removeItem(index)}
                  disabled={isSpinning}
                  className="ml-1 sm:ml-2 text-red-500 hover:text-red-700 disabled:text-gray-400 text-sm sm:text-base"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Roulette Section */}
        <div className="bg-white rounded-lg p-4 sm:p-6 lg:p-8 shadow-lg">
          <div className="flex flex-col items-center">
            {items.length > 0 ? (
              <>
                {/* Roulette Wheel */}
                <div className="relative mb-6 sm:mb-8">
                  {/* Pointer */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2 z-10">
                    <div className="w-0 h-0 border-l-3 border-r-3 border-b-6 sm:border-l-4 sm:border-r-4 sm:border-b-8 border-transparent border-b-red-500"></div>
                  </div>

                  {/* Wheel */}
                  <div
                    ref={rouletteRef}
                    className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 relative transition-transform duration-[3000ms] ease-out"
                    style={{
                      transform: `rotate(${rotation}deg)`,
                      transitionDuration: isSpinning ? "4000ms" : "0ms",
                    }}
                  >
                    <svg
                      width="100%"
                      height="100%"
                      viewBox="0 0 320 320"
                      className="rounded-full border-4 sm:border-6 lg:border-8 border-gray-800"
                    >
                      {items.map((item, index) => {
                        const anglePerSegment = 360 / items.length;
                        const startAngle =
                          (anglePerSegment * index - 90) * (Math.PI / 180);
                        const endAngle =
                          (anglePerSegment * (index + 1) - 90) *
                          (Math.PI / 180);
                        const largeArcFlag = anglePerSegment > 180 ? 1 : 0;

                        const centerX = 160;
                        const centerY = 160;
                        const radius = 156; // Increased to fill the entire area

                        const x1 = centerX + radius * Math.cos(startAngle);
                        const y1 = centerY + radius * Math.sin(startAngle);
                        const x2 = centerX + radius * Math.cos(endAngle);
                        const y2 = centerY + radius * Math.sin(endAngle);

                        const pathData = [
                          `M ${centerX} ${centerY}`,
                          `L ${x1} ${y1}`,
                          `A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2}`,
                          "Z",
                        ].join(" ");

                        const textAngle =
                          anglePerSegment * index + anglePerSegment / 2 - 90;
                        const textRadius = radius * 0.7;
                        const textX =
                          centerX +
                          textRadius * Math.cos(textAngle * (Math.PI / 180));
                        const textY =
                          centerY +
                          textRadius * Math.sin(textAngle * (Math.PI / 180));

                        // Responsive font size based on screen size and number of items
                        const getFontSize = () => {
                          const baseSize =
                            items.length > 8 ? 12 : items.length > 4 ? 14 : 16;
                          return baseSize;
                        };

                        // Responsive text length based on screen size
                        const getMaxTextLength = () => {
                          return items.length > 8
                            ? 8
                            : items.length > 4
                            ? 10
                            : 12;
                        };

                        return (
                          <g key={index}>
                            <path
                              d={pathData}
                              fill={colors[index % colors.length]}
                              stroke="#fff"
                              strokeWidth="1"
                            />
                            <text
                              x={textX}
                              y={textY}
                              fill="white"
                              fontSize={getFontSize()}
                              fontWeight="bold"
                              textAnchor="middle"
                              dominantBaseline="central"
                              transform={`rotate(${
                                textAngle > 90 && textAngle < 270
                                  ? textAngle + 180
                                  : textAngle
                              }, ${textX}, ${textY})`}
                              style={{
                                maxWidth: "60px",
                                wordBreak: "break-word",
                                textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                              }}
                            >
                              {item.length > getMaxTextLength()
                                ? item.substring(0, getMaxTextLength()) + "..."
                                : item}
                            </text>
                          </g>
                        );
                      })}
                    </svg>
                  </div>
                </div>

                <button
                  onClick={spinRoulette}
                  disabled={isSpinning || items.length === 0}
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-green-500 text-white text-lg sm:text-xl font-bold rounded-full hover:bg-green-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors shadow-lg"
                >
                  {isSpinning ? "🌪️ Berputar..." : "🎯 PUTAR!"}
                </button>
              </>
            ) : (
              <div className="text-center py-12 sm:py-16">
                <p className="text-gray-500 text-base sm:text-lg">
                  Tambahkan item terlebih dahulu!
                </p>
              </div>
            )}
          </div>
        </div>

        {selectedItem && (
          <div className="fixed inset-0 bg-black/60 bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg p-6 sm:p-8 max-w-sm sm:max-w-md w-full mx-4 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-purple-600 mb-4">
                🎉 Pemenang!
              </h2>
              <p className="text-lg sm:text-xl mb-4">Item yang terpilih:</p>
              <div className="bg-yellow-100 border-2 border-yellow-300 rounded-lg p-3 sm:p-4 mb-4">
                <span className="text-xl sm:text-2xl font-bold text-yellow-800 break-words">
                  {selectedItem}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-gray-600">
                Nama ini akan dihapus dari roulette...
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
