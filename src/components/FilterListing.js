import React from 'react';

const FilterListing = (props) => {

    console.log("FilterListing props ",props)
    return (
        <div>
            {
            props.data.length > 0 ? 
                props.data.map( filter => {
                    return (<div key={filter.type}>
                                <h2 >{filter.type}</h2>
                                
                    { /*filter.values.length > 0 ?  filter.values.map( f => <p>{f}</p>)*/
                                    /*filter.values.map( v => {
                                        console.log("v ",v);
                                        return (<p>{v}</p>)
                                    })*/ 
                            }
                            </div>)
                })
                : null 
            
            }
        </div>
    );
};

export default FilterListing;