import React from 'react'
import style from '../styles/components/Loader.module.scss'


export const LoaderComponent = (props) => {
    return (
        <React.Fragment>
            <div className={style.myLoader}>
                <div className={style.csLoader}>
                    <div className={style.csLoaderInner}>
                        <label>●</label>
                        <label>●</label>
                        <label>●</label>
                        <label>●</label>
                        <label>●</label>
                        <label>●</label>
                        <label>●</label>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}