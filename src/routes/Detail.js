import { Outlet } from "react-router-dom"
import '../App.css'
import React, { useState } from "react";
import Modal from "./Modal";

function Detail(){
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOrderClick = () => {
    setIsModalOpen(true);
  };


    return (
<div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src="https://raw.githubusercontent.com/sknikim/shop/refs/heads/main/img/nk2.jpg" width="80%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">New 나이키 핑크패턴</h4>
          <p>2025년 뉴모델</p>
          <p>108,000원</p>
          <button  onClick={handleOrderClick} className="btn btn-danger">주문하기</button>
           {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} />}
        </div>
      </div>
    </div>
    )
}

export default Detail