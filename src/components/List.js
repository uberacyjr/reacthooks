import React from 'react';

function List(props){
    return (
        <React.Fragment>
            {props.count}
            <button type="button" onClick={() => props.estado( props.count + 1)}>GO</button>
        </React.Fragment>
    );
}
export default List;