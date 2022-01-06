import React from "react";
import './List.scss'
import removeBtn from '../../assets/img/remove.svg'
import Badge from "../Badge/Badge";


const List = ({ items, isRemovable, onClick, onRemove }) => {

  const removeList = (item) => {
    if (window.confirm('Вы хотите удалить список?')) {
      onRemove(item)
    }
  }

  return (
    <ul
      onClick={onClick}
      className='list'>
      {items.map((item, i) => (
        <li key={i} className={`${item.active ? "active" : ''}  ${item.className ? 'add-list' : ''}`}>
          <i >{item.icon ? item.icon :
            <Badge color={item.color} />
          }</i>
          <span>{item.name}</span>

          {isRemovable && <img
            src={removeBtn}
            alt="remove btn"
            className='remove'
            onClick={() => removeList(item)}
          />}
        </li>
      ))
      }
    </ul >
  )
}

export default List