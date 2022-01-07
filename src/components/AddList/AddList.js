import React, { useState, useEffect } from "react";
import List from "../List/List";
import closeSvg from '../../assets/img/close.svg'
import './AddList.scss'
import Badge from "../Badge/Badge";
import axios from "axios";

const AddList = ({ colors, onAdd }) => {
  const [visibleModal, setVisibleModal] = useState(false)
  const [selectedColor, selectColor] = useState(3)
  const [isLoading, setIsLoading] = useState(false)
  const [inputValue, setInputValue] = useState('')


  useEffect(() => {
    if (Array.isArray(colors)) {
      selectColor(colors[0].id)
    }
  }, [colors])

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
    setIsLoading(true)
    // const color = colors.filter(c => c.id === selectedColor)[0].hex
    axios.post('http://localhost:3001/lists', { name: inputValue, colorId: selectedColor }).then(({ data }) => {
      const color = colors.filter(c => c.id === selectedColor)[0].hex
      const listObj = { ...data, color: { name: color } }
      onAdd(listObj)
      onClose()
    }).finally(() => {
      setIsLoading(false)
    })
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
        <button onClick={addList} className="btn">
          {isLoading ? 'Добавление...' : 'Добавить'}
        </button>
      </div>}
    </>
  )
}

export default AddList