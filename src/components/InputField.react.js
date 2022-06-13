import React from 'react';

export default function InputField(props){
    return (<div>
        Input Label should show up beside this
        <label for='labelled input'>{props.label}</label>
        <input type='number' id='labelled input'/>
    </div>);
}
