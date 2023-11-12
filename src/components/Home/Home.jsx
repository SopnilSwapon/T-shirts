// import React from 'react';

import { useLoaderData } from "react-router-dom";

const Home = () => {
    const tShirts = useLoaderData();
    return (
        <div>
            This is Home page{tShirts.length}
        </div>
    );
};

export default Home;