import React from "react";
import { Card } from "@/components/ui/card";
import Image from "next/image";

interface VoucherProps {
  voucherCode: string;
  amount: number;
  startDate: string;
  expiryDate: string;
  merchantName: string;
}

const Voucher: React.FC<VoucherProps> = ({
  voucherCode = "000000000000",
  amount = 50000,
  startDate = "2024.12.31",
  expiryDate = "2025.01.31",
  merchantName = "Эрхийн бичиг",
}) => {
  // Create barcode pattern (Code 39 format simplified)
  const generateBarcode = (code: string) => {
    const pattern = [];
    for (let i = 0; i < code.length; i++) {
      // Create alternating thick and thin bars
      const char = code.charAt(i);
      pattern.push(1, 2, 3);
    }
    return pattern;
  };

  const barcodePattern = generateBarcode(voucherCode);

  return (
    <div className="container w-full h-full pt-40 justify-center flex">
      <Card className="max-w-[800px] p-6 bg-white rounded-lg shadow-lg bg-slate-200">
        {/* Header */}
        <div className="flex justify-between items-center mb-2">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">{merchantName}</h2>
            <div className="text-sm">Голомт банк</div>
          </div>
          <div className="text-3xl font-bold text-red-600">
            {amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}₮
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-dashed border-gray-300" />

        {/* Barcode Section */}
        <div className="flex justify-between my-2">
          <div className="flex">
            <div className="text-xs text-gray-500 mr-2 text-slate-700">
              <p className="font-bold">
                ЭНЭХҮҮ ЭРХИЙН БИЧИГ НЬ УЛААНБААТАР ХОТЫН БҮХ САЛБАРААС ХУДАЛДАН
                АВАЛТ ХИЙХЭД ҮЙЛЧИЛНЭ.
              </p>
              <div className="border-t border-gray-300 my-1" />
              <a>
                <li style={{ listStyle: "none" }}>
                  1. Таны худалдан авалт хийсэн бараа бүтээгдэхүүний үнийн дүн
                  "ЭРХИЙН БИЧИГ"-ийн үнийн дүнгээс илүү гарсан тохиолдолд та
                  зөрүү төлбөрийг төлөх шаардлагатайг анхаарна уу.
                </li>
                <li style={{ listStyle: "none" }}>
                  2. Таны худалдан авалт хийсэн бараа бүтээгдэхүүний үнийн дүн
                  "ЭРХИЙН БИЧИГ"-ийн үнийн дүнд хүрээгүй тохиолдолд хариулт
                  мөнгө олгохгүй.
                </li>
                <li style={{ listStyle: "none" }}>
                  3. Энэхүү эрхийн бичгээр нэг удаа худалдан авалт хийх
                  боломжтой.
                </li>
                <li style={{ listStyle: "none" }}>
                  4. Эрхийн бичиг дээр заасан хугацаа хэтэрсэн тохиолдолд
                  хүчингүйд тооцно.
                </li>
                <li style={{ listStyle: "none" }}>
                  5. Энэхүү эрхийн бичигт НӨАТ-ын баримт олгогдохгүй болно.
                </li>
              </a>
            </div>
          </div>
          <div>
            <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
              src={"/orgilLogo.svg"}
              alt="icon"
              width={150}
              height={150}
            />
            <div className="flex">
              <Image
                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                src={"/gift-svgrepo-com.svg"}
                alt="icon"
                width={150}
                height={150}
              />
            </div>
            <div className="flex h-10 items-center gap-0.5">
              {barcodePattern.map((width, index) => (
                <div
                  key={index}
                  className={`h-full bg-gray-900`}
                  style={{ width: `${width}px` }}
                />
              ))}
            </div>
            <div className="mt-0 font-mono text-sm flex justify-center">
              {voucherCode}
            </div>
            <div className="text-[12px] mt-1">Захирал: Ж.Нарантуяа</div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-0">
          <div className="flex justify-between text-sm text-gray-600 font-bold">
            <span>Хүчинтэй хугацаа</span>
            <div>
              <span>{startDate}</span> - <span>{expiryDate}</span>
            </div>
          </div>
        </div>

        {/* Terms */}
        {/* <div className="mt-4 text-xs text-gray-500">
          <p>
            ЭНЭХҮҮ ЭРХИЙН БИЧИГ НЬ УЛААНБААТАР ХОТЫН БҮХ САЛБАРААС ХУДАЛДАН
            АВАЛТ ХИЙХЭД ҮЙЛЧИЛНЭ.
          </p>
        </div> */}
      </Card>
    </div>
  );
};

export default Voucher;
