import "./index.css";

const Chart = () => {
  const numbersArray = Array.from({ length: 32 }, (_, index) => index + 1);
  return (
    <>
    <div className="chart-container">
      <h4 className="price-container">Premium-Rs. 470.00</h4>
      <div className="row-container">
        <p className="letter">A</p>
        {numbersArray.map((eachSeat, index) => (
          <button
            type="button"
            className={`seat ${index >= 14 && index < 18 ? "hidden" : (index >= 23 && index <= 31) ? 'social' : ''}`}
          >
            {index < 18 ? index + 1 : index - 3}
          </button>
        ))}
      </div>
      <div className="row-container">
        <p className="letter">B</p>
        {numbersArray.map((eachSeat, index) => (
          <button
            type="button"
            className={`seat ${
              (index >= 8 && index < 10) || (index >= 22 && index < 24)
                ? "hidden"
                : (index >= 23 && index <= 31) ? 'social' : ''
            }`}
          >
            {index >= 0 && index <= 7
              ? index + 1
              : index >= 10 && index < 22
              ? index - 1
              : index - 3}
          </button>
        ))}
      </div>
      <div className="row-container">
        <p className="letter">C</p>
        {numbersArray.map((eachSeat, index) => (
          <button
            type="button"
            className={`seat ${
              (index >= 8 && index < 10) || (index >= 22 && index < 24)
                ? "hidden"
                : (index >= 23 && index <= 31) ? 'social' : ''
            }`}
          >
            {index >= 0 && index <= 7
              ? index + 1
              : index >= 10 && index < 22
              ? index - 1
              : index - 3}
          </button>
        ))}
      </div>
      <div className="row-container">
        <p className="letter">D</p>
        {numbersArray.map((eachSeat, index) => (
          <button
            type="button"
            className={`seat ${
              (index >= 8 && index < 10) || (index >= 22 && index < 24)
                ? "hidden"
                : (index >= 23 && index <= 31) ? 'social' : ''
            }`}
          >
            {index >= 0 && index <= 7
              ? index + 1
              : index >= 10 && index < 22
              ? index - 1
              : index - 3}
          </button>
        ))}
      </div>
      <h4 className="price-container">Executive-Rs. 450.00</h4>
      <div className="row-container">
        <p className="letter">E</p>
        {numbersArray.map((eachSeat, index) => (
          <button
            type="button"
            className={`seat ${
              (index >= 8 && index < 10) || (index >= 22 && index < 24)
                ? "hidden"
                : (index >= 23 && index <= 31) ? 'social' : ''
            }`}
          >
            {index >= 0 && index <= 7
              ? index + 1
              : index >= 10 && index < 22
              ? index - 1
              : index - 3}
          </button>
        ))}
      </div>
      <div className="row-container">
        <p className="letter">F</p>
        {numbersArray.map((eachSeat, index) => (
          <button
            type="button"
            className={`seat ${index >= 8 && index < 24 ? "hidden" : (index >= 23 && index <= 31) ? 'social' : ''}`}
          >
            {index >= 0 && index <= 7
              ? index + 1
              : index >= 24
              ? index - 3
              : ""}
          </button>
        ))}
      </div>
      <div className="row-container">
        <p className="letter">G</p>
        {numbersArray.map((eachSeat, index) => (
          <button
            type="button"
            className={`seat ${index >= 8 && index < 24 ? "hidden" : (index >= 23 && index <= 31) ? 'social' : ''}`}
          >
            {index >= 0 && index <= 7
              ? index + 1
              : index >= 24
              ? index - 3
              : ""}
          </button>
        ))}
      </div>
      <div className="row-container">
        <p className="letter">H</p>
        {numbersArray.map((eachSeat, index) => (
          <button
            type="button"
            className={`seat ${index >= 8 && index < 24 ? "hidden" : (index >= 23 && index <= 31) ? 'social' : ''}`}
          >
            {index >= 0 && index <= 7
              ? index + 1
              : index >= 24
              ? index - 3
              : ""}
          </button>
        ))}
      </div>
      <h4 className="price-container">Normal-Rs. 430.00</h4>
      <div className="row-container">
        <p className="letter">I</p>
        {numbersArray.map((eachSeat, index) => (
          <button
            type="button"
            className={`seat ${
              (index >= 8 && index < 10) || (index >= 22 && index < 24)
                ? "hidden"
                : (index >= 23 && index <= 31) ? 'social' : ''
            }`}
          >
            {index >= 0 && index <= 7
              ? index + 1
              : index >= 10 && index < 22
              ? index - 1
              : index - 3}
          </button>
        ))}
    </div>
      <div className="row-container">
        <p className="letter">J</p>
        {numbersArray.map((eachSeat, index) => (
          <button
            type="button"
            className={`seat ${
              (index >= 8 && index < 10) || (index >= 22 && index < 24)
                ? "hidden"
                : (index >= 23 && index <= 31) ? 'social' : ''
            }`}
          >
            {index >= 0 && index <= 7
              ? index + 1
              : index >= 10 && index < 22
              ? index - 1
              : index - 3}
          </button>
        ))}
    </div>
      <div className="row-container">
        <p className="letter">K</p>
        {numbersArray.map((eachSeat, index) => (
          <button
            type="button"
            className={`seat ${
              (index >= 8 && index < 10) || (index >= 22 && index < 24)
                ? "hidden"
                : (index >= 23 && index <= 31) ? 'social' : ''
            }`}
          >
            {index >= 0 && index <= 7
              ? index + 1
              : index >= 10 && index < 22
              ? index - 1
              : index - 3}
          </button>
        ))}
    </div>
      <div className="row-container">
        <p className="letter">L</p>
        {numbersArray.map((eachSeat, index) => (
          <button
            type="button"
            className={`seat ${
              (index >= 8 && index < 10) || (index >= 22 && index < 24)
                ? "hidden"
                : (index >= 23 && index <= 31) ? 'social' : ''
            }`}
          >
            {index >= 0 && index <= 7
              ? index + 1
              : index >= 10 && index < 22
              ? index - 1
              : index - 3}
          </button>
        ))}
    </div>
    </div>
    <div className="options-container">
        <div className="option">
            <div className="box available"></div>
            <p className="text">Available</p>
        </div>
        <div className="option">
            <div className="box selected"></div>
            <p className="text">Selected</p>
        </div>
        <div className="option">
            <div className="box sold"></div>
            <p className="text">Sold</p>
        </div>
        <div className="option">
            <div className="box"></div>
            <p className="text">Social Distancing Seats</p>
        </div>
    </div>
   </>
  );
};

export default Chart;
