function Card() {
    return (
      <div className="card w-64 bg-base-100 shadow-xl border">
        <figure>
          <img
            src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
            className="w-full h-32 object-cover"
          />
        </figure>
        <div className="card-body p-4">
          <h2 className="card-title text-lg font-semibold mb-2">Shoes!</h2>
          <p className="text-sm text-gray-600">
            If a dog chews shoes whose shoes does he choose?
          </p>
          <div className="card-actions mt-4">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    );
  }
  
  export default Card;
  