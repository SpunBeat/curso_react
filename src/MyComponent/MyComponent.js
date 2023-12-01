import React from 'react';

const MyComponent = props => {
    const {logOut, loading} = props;
    return (
        <div>
            {loading ? <div className='loading'>Loading</div> : <div className='loaded'>Loaded</div> }
        </div>
    );
};

export default MyComponent;