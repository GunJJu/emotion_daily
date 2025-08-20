import React from 'react'
import { useNavigate } from 'react-router-dom'
import './DiaryItem.css'
import Button from './Button'
import { getEmoticonImg } from '../util/getEmoticonImg'

const DiaryItem = ({ id, emotionId, createdDate, content }) => {
    const nav = useNavigate()

    return (
        <div className='DiaryItem'>
            <div className={`img-section bg-${emotionId}`}
                onClick={() => nav(`/diary/${id}`)}>
                <img src={getEmoticonImg(emotionId)} alt="icon" />
            </div>
            <div className="info-section"
                onClick={() => nav(`/diary/${id}`)}>
                <div className="created-date">{new Date(createdDate).toLocaleDateString()}</div>
                <div className="content">{content}</div>
            </div>
            <div className="button-section">
                <Button text={"수정하기"} onClick={() => nav(`/edit/${id}`)} />
            </div>
        </div>
    )
}

export default DiaryItem