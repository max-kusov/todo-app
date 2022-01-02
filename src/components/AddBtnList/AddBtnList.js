import React, { useState } from "react";
import List from "../List/List";
import closeSvg from '../../assets/img/close.svg'
import './AddBtnList.scss'

const AddBtnList = () => {
  const [visibleModal, setVisibleModal] = useState(false)


  return (
    <>
      <List
        onClick={() => {
          setVisibleModal(!visibleModal)
        }}
        items={[
          {
            icon: <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 1V15" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M1 8H15" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>,
            name: 'Добавить список',
            className: 'add-list'
          }
        ]} />
      {visibleModal && <div className="modal">
        <img
          onClick={() => {
            setVisibleModal(false)
          }}
          className="modal__close"
          src={closeSvg}
          alt="btn close" />
        <input
          className="field"
          type="text"
          placeholder="Название папки"
        />
        <ul>
          <li></li>
        </ul>
        <button className="btn">Добавить</button>
      </div>}
    </>
  )
}

export default AddBtnList