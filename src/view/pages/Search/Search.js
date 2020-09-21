import React, { useState } from 'react';
import {Grid,Divider ,TextField}from '@material-ui/core';
import { useHistory } from 'react-router-dom'
import AlbumCart from '../../element/AlbumCart'
import Layout from '../../element/Layout'
import { getDaynamicPostData } from '../../../services/services'
import "./Search.scss"
import config from '../../../constants/config'
const IMG_URL = config.IMG_URL
export default function Search() {
    const [searchResult, setSearchResult] = useState([])
    const history = useHistory();
    const searchHandler = (evt) => {
        const { value } = evt.target
        if (value.length > 3) {
            getData(value)
        }else{
            setSearchResult([])
        }
    }
    const getData = async (key) => {
        const response = await getDaynamicPostData('allVideoSearch', { search_key: key })
        setSearchResult(response?.records?.length && response?.records)
    }
    const convertIntoFormat = (itm) => {
        const newdata = {
            title: itm.details,
            id: itm.album_id,
            img: `${IMG_URL}/${itm?.image}`,
        }
        return newdata
    }
    return (
        <Layout >
            <div className="login-form-search-wrapper">
                <div className="form-field-search">
                    <form >
                        <div className="form-field-search-wrapper">
                            <TextField
                                name="search"
                                label="Search for Movies, Shows etc."
                                margin="normal"
                                variant="outlined"
                                fullWidth
                                color="secondary"
                                onChange={searchHandler}
                            />
                        </div>

                    </form>
                </div>
                <Divider style={{marginTop:20}}/>
                <div className="album-list-wrapper">
                    <Grid container spacing={3}>
                        {
                            searchResult && searchResult.map((item, key) =>
                                <Grid key={key} item lg={3} md={4} sm={6} xs={12} >
                                    <AlbumCart albumDetails={convertIntoFormat(item)} />
                                </Grid>
                            )

                        }
                    </Grid>
                </div>

            </div>



        </Layout>

    );
}