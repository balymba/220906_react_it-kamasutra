import React from 'react';
import {render} from 'react-dom';

class Landing extends React.Component {
    redred(){
        return(
            <p>Hello Main !</p>
        )
    }
}

render(<Landing/>, document.querySelector('#root'));