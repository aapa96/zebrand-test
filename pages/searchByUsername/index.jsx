import React, { useContext } from 'react'
import Head from 'next/head'
import { useState } from 'react'
import { Button } from '@mui/material'
import { getUsersByUsername } from '../../api'
import { ProfileCard } from './components/profileCard'
import { LoaderContext } from '../../context/loader'

export default SearchByUsername = (props) => {
    const loaderC = useContext(LoaderContext);
    const [data, setData] = useState();
    const [repos, setRepos] = useState([]);
    const [form, setForm] = useState({ search: '' });

    const handlerSearch = async (event) => {
        event.preventDefault();
        loaderC.showLoader();
        try {
            let user = await (await fetch(getUsersByUsername(form.search), {})).json();
            let _repos = await (await fetch(user.repos_url, {})).json();
            setData(user)
            setRepos(_repos)
        } catch (error) {
            loaderC.hideLoader()
        } finally {
            loaderC.hideLoader()
        }
    }
    const clearData = () => {
        setData();
        setRepos([])
        setForm({ search: '' })
    }
    return (
        <React.Fragment>
            <Head>
                <title>ZeBrands - Search by username</title>
                <meta name="description" content="ZeBrands Test By Alex Paredes" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <section className='searchContainer'>
                <form onSubmit={handlerSearch} className='searchForm'>
                    <h1>Search by username</h1>
                    <input type="search"
                        placeholder='Enter username'
                        onChange={(text) => {
                            setForm({ ...form, search: text.currentTarget.value })
                        }} name="" id="" />
                    <Button variant="contained" color="success" type='submit'>
                        Success
                    </Button>
                </form>
                {
                    (data) && <React.Fragment>
                        <ProfileCard data={data} repos={repos} clearData={clearData} />
                    </React.Fragment>
                }
                {
                    (!data) && <img style={{ maxWidth: 650, width: '100%' }} src='https://cdn.dribbble.com/users/888330/screenshots/2653750/empty_data_set.png' />
                }
            </section>
        </React.Fragment>
    )
}