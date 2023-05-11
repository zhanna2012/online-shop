import React from 'react';
import styles from'./SearchBar.module.scss'
import Input from "../Input/Input";
import Button from "../Button/Button";


function SearchBar(props) {
    return (
        <div className = {styles.search__bar}>
            <Input placeholderText = {props.placeholderText}
                   onChange = {props.onChange}
                   labelText={props.labelText}/>
            <Button buttonText = {props.buttonText}
                    onClick = {props.onClick}/>
        </div>
    );
}
export default SearchBar;
