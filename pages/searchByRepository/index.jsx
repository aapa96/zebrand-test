import React, { useContext } from 'react'
import Head from 'next/head'
import { useState } from 'react'
import { Button, Modal, Typography } from '@mui/material'
import { getReposByUsername, getUsersByUsername } from '../../api'
import RepositoryCard from '../../components/repoCard';
import { LoaderContext } from '../../context/loader'
import { UIContect } from '../../context/ui'


const SearchByRepository = (props) => {
    const loaderC = useContext(LoaderContext);
    const uiC = useContext(UIContect);
    const [data, setData] = useState();
    const [form, setForm] = useState({ reponame: '', username: '', showModal: false });

    const handlerSearch = async (event) => {
        event.preventDefault();
        loaderC.showLoader()
        try {
            console.log(form);
            if (!form.reponame || !form.username) {
                loaderC.hideLoader()
                uiC.showModal({ show: true, title: 'Try again', message: 'Complete all fields' });
                return;
            }
            let res = await (await fetch(getReposByUsername(form.username), {})).json();
            console.log("🚀 ~ file: index.jsx ~ line 22 ~ handlerSearch ~ res", res)
            if (res.length == 0) {
                loaderC.hideLoader()
                uiC.showModal({ show: true, title: 'Not found', message: 'Try again' });
                return;
            }
            let repos = res.filter((v) => {
                return v.name === form.reponame
            })
            if (repos.length == 0) {
                loaderC.hideLoader()
                uiC.showModal({ show: true, title: 'Not found', message: 'Try again' });
                return;
            }
            setData(repos[0])
        } catch (error) {
            loaderC.hideLoader()
        } finally {
            loaderC.hideLoader()
        }
    }

    return (
        <React.Fragment>
            <Head>
                <title>ZeBrands - Search by repository</title>
                <meta name="description" content="ZeBrands Test By Alex Paredes" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <section className='searchContainer'>
                <form onSubmit={handlerSearch} className='searchForm' >
                    <h1>Search by repository</h1>
                    <p>Type the name of the user and the repository you want to </p>
                    <div className="inputs" style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-between' }}>
                        <input type="search"
                            placeholder='Enter repository'
                            onChange={(text) => {
                                setForm({ ...form, reponame: text.currentTarget.value })
                            }} name="" id="" style={{ marginInline: 4 }} />
                        <input type="search"
                            placeholder='Enter username'
                            onChange={(text) => {
                                setForm({ ...form, username: text.currentTarget.value, showModal: false })
                            }} name="" id="" style={{ marginInline: 4 }} />
                    </div>

                    <Button variant="contained" color="success" type='submit'>
                        Success
                    </Button>
                </form>
                {
                    (data) && (<RepositoryCard data={data} />)
                }
            </section>
        </React.Fragment >
    )
}

export default SearchByRepository;