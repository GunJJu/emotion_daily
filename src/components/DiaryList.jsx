import React from 'react'
import DiaryItem from './DiaryItem'
import Button from './Button'
import './DiaryList.css'
import { useNavigate } from 'react-router-dom'

const DiaryList = ({ data }) => {
    const nav = useNavigate()
    return (
        <div className='DiaryList'>
            <div className="menu-bar">
                <select name="" id="">
                    <option value="latest">최신순</option>
                    <option value="oldest">오래된순</option>
                </select>
                <Button text={"새 일기 쓰기"} type={"POSITIVE"} onClick={() => nav('/new')} />
            </div>
            <div className="list-wrapper">
                {data.map((item) => (
                    <DiaryItem key={item.id} {...item} />
                ))}
            </div>
        </div>
    )
}

export default DiaryList