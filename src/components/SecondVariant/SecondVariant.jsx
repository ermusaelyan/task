import React from 'react';
import classes from "./SecondVariant.module.scss";

const SecondVariant = () => {
    return (
        <div className={classes.circle}>
            <div className={classes.square}></div>
            <div className={classes.square}></div>
        </div>
    );
};

export default SecondVariant;