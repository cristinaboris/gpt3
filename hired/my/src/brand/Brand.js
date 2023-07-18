import React from 'react';
import {  google,
    shopify,
    slack,
    dropbox,
    atlassian} from './import'
    import './brand.css'

const Brand = () => {
    return (
        <div className='gpt3__brand section__padding '>
            <div className="">
                <img src={google} alt="" />
            </div>
            <div className="">
                <img src={shopify} alt="" />
            </div>
            <div className="">
                <img src={dropbox} alt="" />
            </div>
            <div className="">
                <img src={slack} alt="" />
            </div>
            <div className="">
                <img src={atlassian} alt="" />
            </div>
           
        </div>
    );
};

export default Brand;