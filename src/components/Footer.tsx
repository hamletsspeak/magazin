import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#18181b] border-t-2 border-[#ff003c] shadow-[0_0_24px_#ff003c] flex flex-col items-center justify-center px-6 py-4 mt-8 rounded-t-2xl">
      <span className="font-gamer text-[#ff003c] text-lg drop-shadow-[0_0_8px_#ff003c]">© 2025 MAGAZIN. Все права защищены.</span>
      <span className="text-xs text-gray-400 mt-2 font-gamer">Сделано для геймеров</span>
    </footer>
  );
}
