import React from 'react'

export default  function Scroll() {
  let mybutton = document.getElementById("btn-back-to-top");
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  const handlebacktotop = () => {

      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
  }

  let mystyle = {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    display: "none"
  };
  
    return (
      <button
        type="button"
        className="btn btn-danger btn-circle btn-floating btn-sm"
        style={mystyle}
        id="btn-back-to-top"
        onClick={handlebacktotop}
      >
        <i className="fas fa-arrow-up"></i>
      </button>
  )
}
