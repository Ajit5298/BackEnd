import React, { useState } from 'react';

const Sidebar = ({ handleFilter }) => {
  const [showBrand, setShowBrand] = useState(false);
  const [showCategory, setShowCategory] = useState(false);
  const [showColor, setShowColor] = useState(false);
  const [showSize, setShowSize] = useState(false);
  const [showPriceRange, setShowPriceRange] = useState(false);

  const handleBrandFilter = (brand) => {
    handleFilter('brand', brand);
  };

  const handleCategoryFilter = (category) => {
    handleFilter('category', category);
  };

  const handleColorFilter = (color) => {
    handleFilter('color', color);
  };

  const handleSizeFilter = (size) => {
    handleFilter('size', size);
  };

  const handlePriceRangeFilter = (priceRange) => {
    handleFilter('priceRange', priceRange);
  };

  const toggleArrow = (stateSetter) => {
    stateSetter((prevState) => !prevState);
  };

  return (
    <div className="sidebar">
      <div className="filter">
        <h3>Brand</h3>
        <div className="dropdown">
          <div className="dropdown-toggle" onClick={() => toggleArrow(setShowBrand)}>
            Select Brand {showBrand ? <span>&#9650;</span> : <span>&#9660;</span>}
          </div>
          {showBrand && (
            <div className="subcategories">
              <label>
                <input type="radio" value="Pragon"  />
                Pragon
              </label>
              <label>
                <input type="radio" value="VKC"  />
                VKC
              </label>
              <label>
                <input type="radio" value="Relaxo"  />
                Relaxo
              </label>
            </div>
          )}
        </div>
      </div>
      <div className="filter">
        <h3>Category</h3>
        <div className="dropdown">
          <div className="dropdown-toggle" onClick={() => toggleArrow(setShowCategory)}>
            Select Category {showCategory ? <span>&#9650;</span> : <span>&#9660;</span>}
          </div>
          {showCategory && (
            <div className="subcategories">
              <label>
                <input type="radio" value="Chappals"  />
                Chappal
              </label>
              <label>
                <input type="radio" value="Sandals" />
                Sandal
              </label>
              <label>
                <input type="radio" value="Shoes"  />
                Shoes
              </label>
              <label>
                <input type="radio" value="Slippers"  />
                Shoes
              </label>
              
            </div>
          )}
        </div>
      </div>
      <div className="filter">
        <h3>Color</h3>
        <div className="dropdown">
          <div className="dropdown-toggle" onClick={() => toggleArrow(setShowColor)}>
            Select Color {showColor ? <span>&#9650;</span> : <span>&#9660;</span>}
          </div>
          {showColor && (
            <div className="subcategories">
              <label>
                <input type="radio" value="Red"  />
                Red
              </label>
              <label>
                <input type="radio" value="Blue"  />
                Blue
              </label>
              <label>
                <input type="radio" value="Green"  />
                Green
              </label>
              <label>
                <input type="radio" value="Yellow"  />
                Yellow
              </label>
              <label>
                <input type="radio" value="Orange"  />
                Orange
              </label>
              <label>
                <input type="radio" value="Purple"  />
                Purple
              </label>
              <label>
                <input type="radio" value="Pink"  />
                Pink
              </label>
              <label>
                <input type="radio" value="Brown" />
                Brown
              </label>
              <label>
                <input type="radio" value="Black"  />
                Black
              </label>
              <label>
                <input type="radio" value="White"  />
                White
              </label>
              <label>
                <input type="radio" value="Gray" />
                Gray
              </label>
              <label>
                <input type="radio" value="Silver"  />
                Silver
              </label>
            </div>
          )}
        </div>
      </div>
      <div className="filter">
        <h3>Size</h3>
        <div className="dropdown">
          <div className="dropdown-toggle" onClick={() => toggleArrow(setShowSize)}>
            Select Size {showSize ? <span>&#9650;</span> : <span>&#9660;</span>}
          </div>
          {showSize && (
            <div className="subcategories">
             <label>
                <input type="radio" value="5"  />
                5
              </label>
              <label>
                <input type="radio" value="6"  />
                6
              </label>
              <label>
                <input type="radio" value="7"  />
                7
              </label>
              <label>
                <input type="radio" value="8"  />
                8
              </label>
              <label>
                <input type="radio" value="9"  />
                9
              </label>
              <label>
                <input type="radio" value="10"  />
                10
              </label>
              <label>
                <input type="radio" value="11"  />
                11
              </label>
              <label>
                <input type="radio" value="12"  />
                12
              </label>
            </div>
          )}
        </div>
      </div>
      <div className="filter">
        <h3>Price Range</h3>
        <div className="dropdown">
          <div className="dropdown-toggle" onClick={() => toggleArrow(setShowPriceRange)}>
            Select Price Range {showPriceRange ? <span>&#9650;</span> : <span>&#9660;</span>}
          </div>
          {showPriceRange && (
            <div className="subcategories">
              <label>
                <input type="radio" value="0 - 499"  />
                Under- Rs.499
              </label>
              <label>
                <input type="radio" value="500 - 999"  />
                Rs. 500 - 999
              </label>
              <label>
                <input type="radio" value="1000 - 1999"  />
                Rs. 1000 - 1999
              </label>
              <label>
                <input type="radio" value="2000 - 3000" />
                Rs. 2000 - 3000
              </label>
             
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
