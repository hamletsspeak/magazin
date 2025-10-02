"use client";
import React, { useState } from "react";

export default function CheckoutPage() {
  const [payment, setPayment] = useState("");

  const handlePaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPayment(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Stripe интеграция
    alert("Оплата (заглушка)");
  };

  return (
    <div className="max-w-xl mx-auto w-full py-8 px-4">
      <h1 className="text-3xl font-gamer text-[#ff003c] mb-8 text-center drop-shadow-[0_0_16px_#ff003c]">Оформление заказа</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div>
          <label className="font-gamer text-[#ff003c] mb-2 block">Способ оплаты:</label>
          <div className="flex gap-4">
            <label className="flex items-center gap-2">
              <input type="radio" name="payment" value="card" checked={payment === "card"} onChange={handlePaymentChange} className="accent-[#ff003c]" />
              <span className="text-white font-gamer">Карта</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="payment" value="stripe" checked={payment === "stripe"} onChange={handlePaymentChange} className="accent-[#ff003c]" />
              <span className="text-white font-gamer">Stripe</span>
            </label>
          </div>
        </div>
        <button type="submit" className="px-8 py-3 rounded-xl font-gamer bg-[#ff003c] text-black text-lg font-bold shadow-[0_0_16px_#ff003c] transition-all duration-300 hover:bg-[#ff003c] hover:text-white hover:shadow-[0_0_32px_#ff003c]">Оплатить</button>
      </form>
    </div>
  );
}
