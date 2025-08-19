import React from 'react'
import './DiaryItem.css'
import Button from './Button'
import { getEmoticonImg } from '../util/getEmoticonImg'

const DiaryItem = ({ id, emotionId, createdDate, content }) => {

    return (
        <div className='DiaryItem'>
            <div className={`img-section bg-${emotionId}`}>
                <img src={getEmoticonImg(emotionId)} alt="icon" />
            </div>
            <div className="info-section">
                <div className="created-date">{new Date(createdDate).toLocaleDateString()}</div>
                <div className="content">{content}</div>
            </div>
            <div className="button-section">
                <Button text={"수정하기"} />
            </div>
        </div>
    )
}

export default DiaryItem