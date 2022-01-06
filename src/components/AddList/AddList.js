import React, { useState } from "react";
import List from "../List/List";
import closeSvg from '../../assets/img/close.svg'
import './AddList.scss'
import Badge from "../Badge/Badge";

const AddList = ({ colors, onAdd }) => {
  const [visibleModal, setVisibleModal] = useState(false)
  const [selectedColor, selectColor] = useState(colors[0].id)
  const [inputValue, setInputValue] = useState('')

  const onClose = () => {
    setVisibleModal(false)
    setInputValue('')
    selectColor(colors[0].id)
  }
  const addList = () => {
    if (!inputValue) {
      alert('Введите значение')
      return
    }
    const color = colors.filter(c => c.id === selectedColor)[0].hex
    onAdd({ "id": Math.random(), "name": inputValue, color })
    onClose()
  }


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
          onClick={onClose}
          className="modal__close"
          src={closeSvg}
          alt="btn close" />
        <input
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          className="field"
          type="text"
          placeholder="Название папки"
        />
        <div className="modal__colors">
          {
            colors.map(item => (
              <Badge
                onClick={() => { selectColor(item.id) }}
                key={item.id}
                color={item.hex}
                className={selectedColor === item.id && 'active'}
              />
            ))
          }
        </div>
        <button onClick={addList} className="btn">Добавить</button>
      </div>}
    </>
  )
}

export default AddList