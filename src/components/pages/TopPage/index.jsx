import React from 'react';
import {Link} from 'react-router-dom';

const TopPage = () => (
    <>
        <h1>This is top Page</h1>
        <Link to="/player/100">Player Page</Link>
        <Link to="/hogehoge">NotFound</Link>
    </>
);

export default TopPage;