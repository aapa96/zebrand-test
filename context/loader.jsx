import React, { createContext, useState } from 'react'
import { LoaderComponent } from '../components/loader'
export const LoaderContext = createContext()
export const LoaderProvider = (props) => {
    const [isLoading, setIsLoading] = useState(false);
    const showLoader = () => {
        setIsLoading(true);
    }
    const hideLoader = () => {
        setIsLoading(false)
    }
    return (
        <LoaderContext.Provider value={
            {
                isLoading,
                showLoader: showLoader,
                hideLoader: hideLoader
            }
        }>
            {
                (isLoading) && (
                    <div className="loader">
                        <div className="bgLoader"></div>
                        <div className="component">
                            <LoaderComponent />
                        </div>
                    </div>
                )
            }
            {props.children}
        </LoaderContext.Provider>
    )
}