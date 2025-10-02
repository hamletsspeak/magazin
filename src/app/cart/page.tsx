
"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const cart = [
  {
    id: 1,
    name: "Геймерская мышь",
    price: 3990,
    image: "/placeholder-mouse.jpg",
    quantity: 1,
  },
];

export default function CartPage() {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="max-w-3xl mx-auto w-full py-8 px-4">
      <h1 className="text-3xl font-gamer text-[#ff003c] mb-8 text-center drop-shadow-[0_0_16px_#ff003c]">Корзина</h1>
      {cart.length === 0 ? (
        <div className="text-gray-400 text-center">Корзина пуста</div>
      ) : (
        <div className="flex flex-col gap-6">
          {cart.map((item) => (
            <div key={item.id} className="flex items-center gap-4 bg-[#18181b] rounded-xl p-4 shadow-lg border-2 border-transparent hover:border-[#ff003c]">
              <Image src={item.image} alt={item.name} width={64} height={64} className="rounded-lg" />
              <div className="flex-1">
                <div className="font-gamer text-lg text-[#ff003c]">{item.name}</div>
                <div className="text-gray-300">{item.price}₽ × {item.quantity}</div>
              </div>
              <button className="px-3 py-1 rounded bg-[#ff003c] text-black font-gamer shadow-[0_0_8px_#ff003c] hover:bg-[#ff003c] hover:text-white">Удалить</button>
            </div>
          ))}
        </div>
      )}
      <div className="mt-8 text-right font-gamer text-xl text-[#ff003c]">Итого: {total}₽</div>
      <Link href="/checkout" className="block mt-6 mx-auto w-fit px-8 py-3 rounded-xl font-gamer bg-[#ff003c] text-black text-lg font-bold shadow-[0_0_16px_#ff003c] transition-all duration-300 hover:bg-[#ff003c] hover:text-white hover:shadow-[0_0_32px_#ff003c]">Оформить заказ</Link>
    </div>
  );
}
