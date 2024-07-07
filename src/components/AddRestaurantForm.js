import React, { useState } from 'react';

function AddRestaurantForm({ addRestaurant }) {
  const [formData, setFormData] = useState({
    name: '',
    image: '',
    rating: '',
    category: '',
    openingHours: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addRestaurant(formData);
    setFormData({
      name: '',
      image: '',
      rating: '',
      category: '',
      openingHours: '',
    });
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden relative">
      <form onSubmit={handleSubmit} className="p-4">
        <h2 className="text-lg font-bold mb-4">เพิ่มร้านอาหารใหม่</h2>
        <label htmlFor="name" className="block mb-2">
          ชื่อ:
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border rounded-md p-2 w-full mt-1"
            required
          />
        </label>
        {/* เพิ่มฟิลด์อื่น ๆ ตามที่ต้องการ */}

        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4">
          เพิ่มร้านอาหาร
        </button>
      </form>
    </div>
  );
}

export default AddRestaurantForm;