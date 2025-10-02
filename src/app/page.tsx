
'use client';
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Геймерская мышь",
    description: "RGB-подсветка, 12000 DPI, эргономика.",
    price: 3990,
    image: "/placeholder-mouse.jpg", // Заменить на реальные фото
  },
  {
    id: 2,
    name: "Клавиатура",
    description: "Механика, неоновые эффекты, anti-ghosting.",
    price: 5990,
    image: "/placeholder-keyboard.jpg",
  },
  {
    id: 3,
    name: "Гарнитура",
    description: "7.1 звук, микрофон, красная подсветка.",
    price: 4990,
    image: "/placeholder-headset.jpg",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black px-4 py-8">
      {/* RGB Animated Title */}
      <h1
        className="text-5xl sm:text-7xl font-gamer font-bold text-transparent bg-clip-text animate-rgb mb-12 text-center drop-shadow-[0_0_24px_#ff003c]"
        style={{
          backgroundImage:
            "linear-gradient(90deg, #ff003c, #00fff7, #fffb00, #ff003c)",
        }}
      >
        MAGAZIN
      </h1>

      {/* Products Grid */}
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-[#18181b] rounded-2xl p-6 flex flex-col items-center shadow-lg transition-all duration-300 border-2 border-transparent hover:border-[#ff003c] hover:shadow-[0_0_32px_#ff003c] group"
          >
            <div className="w-40 h-40 mb-4 flex items-center justify-center overflow-hidden rounded-xl bg-black">
              <Image
                src={product.image}
                alt={product.name}
                width={160}
                height={160}
                className="object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h2 className="font-gamer text-xl text-[#ff003c] mb-2 text-center drop-shadow-[0_0_8px_#ff003c]">{product.name}</h2>
            <p className="text-gray-300 text-sm mb-4 text-center">{product.description}</p>
            <div className="flex items-center justify-between w-full">
              <span className="font-bold text-lg text-[#ff003c]">{product.price}₽</span>
              <button
                className="ml-auto px-6 py-2 rounded-xl font-gamer bg-[#ff003c] text-black text-base font-bold shadow-[0_0_16px_#ff003c] transition-all duration-300 hover:bg-[#ff003c] hover:text-white hover:shadow-[0_0_32px_#ff003c] focus:outline-none"
              >
                Купить
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Анимация RGB для заголовка */}
      <style jsx global>{`
        .font-gamer {
          font-family: 'Orbitron', Arial, Helvetica, sans-serif;
        }
        @keyframes rgb {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 100% 50%;
          }
        }
        .animate-rgb {
          background-size: 200% 200%;
          animation: rgb 3s linear infinite alternate;
        }
      `}</style>
    </div>
  );
}

