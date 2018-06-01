import React from 'react';

const Header = (props) => (
    <div>
        <h1>{props.tittle}</h1>
        {props.subtittle && <h2>{props.subtittle}</h2>}
    </div>
);

Header.defaultProps = {
    tittle: 'Indecision'
};

export default Header;