import React from 'react';

const Task = (value) => {
    return (
        value.map((itemTeste) => <li>{itemTeste}</li>)
    )
}

export default Task;