import React from 'react';
import RestaurantCard from './RestaurantCard';

function App() {
  const restaurants = [
    { id: 1, name: "Milk house - ลาดพร้าว120", image: "/images/shop1.webp", rating: 4.5, category: "เบเกอรี่" },
    { id: 2, name: "หมูปลาร้านายต้น - ศาลเจ้าพ่อเสือ", image: "/images/shop2.webp", rating: 4.0, category: "ทานเล่น/ขนมขบเคี้ยว", openingHours: "20 นาที" },
    { id: 3, name: "Tryme thai restaurants - สามเสน 4", image: "/images/shop3.webp", rating: 4.2, category: "เบรคฟาสต์/บรั๊นช์", openingHours: "20 นาที" },
    { id: 4, name: "ช่วนเล่อ ชาบูหมาล่าเผ็ดร้อน - เยาวราช", image: "/images/shop4.webp", rating: 4.2, category: "ชาบู/สุกี้", openingHours: "25 นาที" },
    { id: 5, name: "GoodDay - ถนนเจริญเมือง13", image: "/images/shop5.webp", rating: 4.2, category: "ข้าวหน้า", openingHours: "20 นาที" },
    { id: 6, name: "Restaurant 3", image: "/images/shop6.webp", rating: 4.2, category: "อาหารจานด่วน", openingHours: "" },
    { id: 7, name: "รสชาติคอหมูย่าง - ถนนมหรรณพ", image: "/images/shop7.webp", rating: 4.2, category: "ข้าวหน้า", openingHours: "" },
    { id: 8, name: "ยีนนี่ลูกชิ้นทอด YeennyFriedMeatball", image: "/images/shop8.webp", rating: 4.2, category: "อาหารจานด่วน", openingHours: "" },
    { id: 9, name: "ซาลาเปาแม่เง็ก - เสาชิงช้า", image: "/images/shop9.webp", rating: 4.2, category: "เบเกอรี่", openingHours: "20 นาที" },
    { id: 10, name: "รสชาติกะเพรา - เสาชิงช้า", image: "/images/shop10.webp", rating: 4.2, category: "ฟาสต์ฟู้ด", openingHours: "" },
    // เพิ่มร้านอาหารตามต้องการ
  ];

  return (
    <div className="container mx-auto my-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {restaurants.map((restaurant) => (
        <RestaurantCard key={restaurant.id} restaurant={restaurant} />
      ))}
    </div>
  );
}

export default App;
