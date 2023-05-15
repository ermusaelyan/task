import React from 'react';
import classes from './FirstVariant.module.scss';
import classNames from "classnames";

const FirstVariant = () => {
    return (
        <div className={classes.circle}>
            <div className={classes.circle1}>
                <div className={classNames(classes.square, classes.square1 )} />
                <div className={classNames(classes.square, classes.square2 )} />
            </div>
        </div>
    );
};

export default FirstVariant;