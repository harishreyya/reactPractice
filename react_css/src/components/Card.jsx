
export const Card = () => {
    return (
      <div className="card">
        <img
          className="card-image"
          src="https://images.pexels.com/photos/1037995/pexels-photo-1037995.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
        <div className="card-content">
          <p className="card-title">Random Title</p>
          <p className="card-price">₹ 23</p>
        </div>
      </div>
    );
  };
