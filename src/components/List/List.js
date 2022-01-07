import React from "react"
import './List.scss'
import removeBtn from '../../assets/img/remove.svg'
import Badge from "../Badge/Badge"
import axios from "axios"


const List = ({ items, isRemovable, onClick, onRemove, onClickItem, activeItem }) => {

  const removeList = (item) => {
    if (window.confirm('Вы хотите удалить список?')) {
      axios.delete('http://localhost:3001/lists/' + item.id).then(() => {
        onRemove(item.id);
      });
    }
  }

  return (
    <ul
      onClick={onClick}
      className='list'>
      {items.map((item, i) => (
        <li key={i}
          // className={`${item.active ? "active" : ''}  ${item.className ? 'add-list' : ''}`}
          className={`${activeItem && activeItem.id === item.id ? "active" : ''}  ${item.className ? 'add-list' : ''}`}

          onClick={onClickItem ? () => onClickItem(item) : null}
        >
          <i >{item.icon ? item.icon :
            <Badge color={item.color.hex} />
          }</i>
          <span>{item.name}{item.tasks && ` (${item.tasks.length})`}</span>

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