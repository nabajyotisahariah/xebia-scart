import React from 'react';
import {connect} from 'react-redux'

function Wrapper(props) {
    console.log("Wrapper ",props)
    return (
        <div>
            Wrapper
        </div>
    );
}

const mapsStateToProps = (state) => {
    return state;
}

export default connect(mapsStateToProps, null)(Wrapper);