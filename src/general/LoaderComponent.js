import React from 'react';
import { LoaderStyle } from './LoaderStyle';
import Loader from "react-loader-spinner";

const LoaderComponent = () => {
    return (
        <LoaderStyle>
            <Loader type="Bars" color="#00BFFF" height={80} width={80} />
        </LoaderStyle>
    );
};

export default LoaderComponent;