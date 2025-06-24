'use client';

import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { products } from "./constant";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";


export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Header />
      <Separator />

      <section className="bg-gray-100 py-12 px-4 sm:px-6 md:px-20">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6">Sản phẩm mới</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="relative w-full h-[220px] sm:h-[260px] md:h-[300px]">
                <Image
                  src={product.image}
                  alt={product.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-base sm:text-lg font-semibold mb-1">{product.name}</h3>
                <p className="text-sm text-gray-600">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Separator />

      <section id="policy" className="py-10 px-4 sm:px-6 md:px-20">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">Chính sách mua hàng</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm sm:text-base">
          <li>Đổi trả trong vòng 7 ngày với sản phẩm chưa sử dụng.</li>
          <li>Hỗ trợ giao hàng toàn quốc.</li>
          <li>Cam kết chất lượng và hoàn tiền nếu sản phẩm lỗi do nhà sản xuất.</li>
        </ul>
      </section>

      <Separator />

      <Footer />
    </div>
  );
}
