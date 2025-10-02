import React from "react";

export default function Header() {
  return (
    <header className="w-full bg-[#18181b] border-b-2 border-[#ff003c] shadow-[0_0_24px_#ff003c] flex items-center justify-between px-6 py-4 mb-8 rounded-b-2xl">
      <div className="flex items-center gap-4">
        <span className="text-2xl font-gamer text-[#ff003c] drop-shadow-[0_0_8px_#ff003c]">MAGAZIN</span>
        <span className="hidden sm:inline text-base text-gray-400 font-gamer">Геймерский магазин</span>
      </div>
      <nav className="flex gap-6">
        <a href="/" className="font-gamer text-[#ff003c] hover:text-white transition-colors">Главная</a>
        <a href="/cart" className="font-gamer text-[#ff003c] hover:text-white transition-colors">Корзина</a>
        <a href="/admin" className="font-gamer text-[#ff003c] hover:text-white transition-colors">Добавить товар</a>
      </nav>
    </header>
  );
}
