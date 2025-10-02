"use client";
import React, { useState } from "react";

export default function AdminPage() {
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: добавить логику сохранения товара
    alert("Товар добавлен (заглушка)");
    setForm({ name: "", description: "", price: "", image: "" });
  };

  return (
    <div className="max-w-xl mx-auto w-full py-8 px-4">
      <h1 className="text-3xl font-gamer text-[#ff003c] mb-8 text-center drop-shadow-[0_0_16px_#ff003c]">Добавить товар</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <input name="name" value={form.name} onChange={handleChange} required placeholder="Название" className="px-4 py-2 rounded-xl bg-[#18181b] text-white font-gamer border-2 border-[#ff003c] focus:outline-none" />
        <textarea name="description" value={form.description} onChange={handleChange} required placeholder="Описание" className="px-4 py-2 rounded-xl bg-[#18181b] text-white font-gamer border-2 border-[#ff003c] focus:outline-none" />
        <input name="price" value={form.price} onChange={handleChange} required placeholder="Цена" type="number" className="px-4 py-2 rounded-xl bg-[#18181b] text-white font-gamer border-2 border-[#ff003c] focus:outline-none" />
        <input name="image" value={form.image} onChange={handleChange} required placeholder="URL фото" className="px-4 py-2 rounded-xl bg-[#18181b] text-white font-gamer border-2 border-[#ff003c] focus:outline-none" />
        <button type="submit" className="px-8 py-3 rounded-xl font-gamer bg-[#ff003c] text-black text-lg font-bold shadow-[0_0_16px_#ff003c] transition-all duration-300 hover:bg-[#ff003c] hover:text-white hover:shadow-[0_0_32px_#ff003c]">Добавить</button>
      </form>
    </div>
  );
}
