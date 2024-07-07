import React from 'react';

function RestaurantCard({ restaurant, deleteRestaurant }) {
  const { id, name, image, rating, category, openingHours } = restaurant;

  const stars = [];
  const maxRating = 5;
  for (let i = 1; i <= maxRating; i++) {
    if (i <= rating) {
      stars.push(<span key={i} className="text-yellow-500">&#9733;</span>);
    } else {
      stars.push(<span key={i} className="text-gray-400">&#9733;</span>);
    }
  }

  const handleDelete = () => {
    deleteRestaurant(id);
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden relative">
      <img src={image} alt={name} className="w-full h-32 sm:h-48 object-cover"/>
      <div className="p-4">
        <h3 className="font-bold text-lg">{name}</h3>
        <div className="flex items-center mt-1">
          <div className="flex">
            {stars}
          </div>
          <p className="text-gray-400 ml-2">{rating}</p>
        </div>
        <p className="text-gray-600">{category}</p>
        <p className="text-gray-600">{openingHours}</p>
        
        <button onClick={handleDelete} className="absolute bottom-4 right-4 bg-red-500 text-white px-3 py-1 rounded-lg">
          ลบ
        </button>
      </div>
    </div>
  );
}

export default RestaurantCard;
