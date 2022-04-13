import React from "react";

const Header = () => {
  return (
    <header className="p-4 bg-dark text-white">
      <div className="container-fluid g-4">
        <div className="row">
          <div className="col-3">
            <img src="images/logo.svg" alt="logo" width={180} />
          </div>
        </div>
        {/* <div class="d-flex flex-wrap align-items-center justify-content-start px-2">
            <img src="images/logo.svg" alt="logo" width="180" />
        </div> */}
      </div>
    </header>
  );
};

export default Header;
