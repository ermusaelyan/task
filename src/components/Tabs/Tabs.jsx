import React, {useMemo, useState} from 'react';
import classes from "./Tabs.module.scss";
import classNames from "classnames";
import FirstVariant from "../FirstVariant/FirstVariant";
import SecondVariant from "../SecondVariant/SecondVariant";

const components = {
    v1: FirstVariant,
    v2: SecondVariant
}

const Tabs = () => {
    const [version, setVersion] = useState('v1');
    const componentList =  useMemo(() => Object.keys(components), []);

    const Component = components[version];

    return (
        <div className={classes.tabs}>
            <ul className={classes.tabsList}>
                {componentList.map(item => (
                    <li
                        key={item}
                        className={classNames(classes.tab, {
                            [classes.active]: item === version
                        })}>
                        <button onClick={() => setVersion(item)} className={classes.tabButton}>{item}</button>
                    </li>
                ))}
            </ul>
            <Component />
        </div>
    );
};

export default Tabs;