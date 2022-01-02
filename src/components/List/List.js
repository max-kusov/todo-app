import React from "react";
import './List.scss'
import removeBtn from '../../assets/img/remove.svg'


const List = ({ items, isRemovable, onClick }) => {
  return (
    <ul
      onClick={onClick}
      className='list'>
      {items.map((item, i) => (
        <li key={i} className={`${item.active ? "active" : ''}  ${item.className ? 'add-list' : ''}`}>
          <i >{item.icon ? item.icon :
            <i className="badge" style={{ background: `${item.color}` }} />
          }</i>
          <span>{item.name}</span>

          {isRemovable && <img src={removeBtn} alt="remove btn" className='remove' />}
        </li>
      ))
      }
    </ul >
  )
}

export default List