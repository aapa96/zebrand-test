import React from 'react'
import style from '../../../styles/RepositoryCard.module.scss'
export const RepositoryCard = ({ data }) => {
    if (!data) {
        return null
    }
    return (
        <React.Fragment>
            <div className={style.profileCardContainer}>
                <div className={style.avatar} onClick={() => { }}>
                    <img width={150} height={150} src={data.owner.avatar_url} />
                    <span style={{ fontWeight: 'bold' }}>{data.owner.login}</span>
                    <a href={data.html_url} target={'_blank'}>{'Go to Repository'}</a>
                </div>
            </div>
        </React.Fragment>
    )
}