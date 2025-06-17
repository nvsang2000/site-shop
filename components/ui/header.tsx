import Link from "next/link";
import { Button } from "@/components/ui/button";
export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md py-4 px-4 sm:px-6 md:px-10 flex flex-col md:flex-row justify-between items-center gap-2">
      <div className="text-xl font-bold text-pink-600">Oanh Nguyễn Shop</div>
      <nav className="flex flex-wrap justify-center md:justify-end gap-2 md:gap-4">
        <Link href="#about">
          <Button variant="ghost" className="text-sm sm:text-base">
            Giới thiệu
          </Button>
        </Link>
        <Link href="#contact">
          <Button variant="ghost" className="text-sm sm:text-base">
            Liên hệ
          </Button>
        </Link>
        <Link href="#policy">
          <Button variant="ghost" className="text-sm sm:text-base">
            Chính sách
          </Button>
        </Link>
      </nav>
    </header>
  );
}
