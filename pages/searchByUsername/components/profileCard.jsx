import React from 'react'
import style from '../../../styles/ProfileCard.module.scss'
import { Avatar, Badge, Tooltip } from '@mui/material'
import OpenInBrowser from '@mui/icons-material/OpenInBrowser';
import CloseIcon from '@mui/icons-material/Close';
export const ProfileCard = ({ data, repos, clearData }) => {

    const openUrl = (url) => {
        window.open(url, '_blank')
    }

    return (
        <div className={style.profileCardContainer}>
            <div className={style.closeIcon}>
                <Tooltip arrow title="Clear">
                    <CloseIcon onClick={clearData} color="primary" />
                </Tooltip>
            </div>
            <Tooltip arrow title="Open the profile in the browser">
                <div className={style.avatar} onClick={() => { openUrl(data.html_url) }}>
                    <img width={150} height={150} src={data.avatar_url} />
                    <React.Fragment>
                        <span style={{ fontWeight: 'bold' }}>{data.login}</span>
                        <span>Bio:{data.bio}</span>
                    </React.Fragment>
                </div>
            </Tooltip>
            {
                (data.type != 'Organization') &&
                <React.Fragment>
                    <div className={style.items}>
                        <div className={style.item}>
                            <div className={style.icon}>Company:</div>
                            <div className={style.value}>{data.company}</div>
                        </div>
                        <div className={style.item}>
                            <div className={style.icon}>Blog:</div>
                            <div className={style.value}>{data.blog}</div>
                        </div>
                        <div className={style.item}>
                            <div className={style.icon}>Location:</div>
                            <div className={style.value}>{data.location}</div>
                        </div>
                    </div>

                    <span className={style.repoTitle}>Repositories: {repos.length}</span>
                    {
                        repos.map((v, id) => {
                            return (
                                <div key={id} className={style.repoItem}>
                                    <div className={style.item}>
                                        <div className={style.value}>{v.name}</div>
                                        <div className={style.openIcon} onClick={() => { openUrl(v.html_url) }}>
                                            <Tooltip arrow title="Open the repository in the browser">
                                                <OpenInBrowser color="primary" />
                                            </Tooltip>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </React.Fragment>
            }
        </div>
    )
};