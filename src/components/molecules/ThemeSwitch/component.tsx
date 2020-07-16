import {FC, useState} from "react";
import { Props } from './props';
import classNames from "classnames";
import * as React from "react";
import styled from "@emotion/styled";

const ThemeSwitchBase: FC<Props> = ({ className, ...rest }: Props) => {
    const [theme, setTheme] = useState(localStorage.theme);

    const switchTheme = (): void => {
        if(localStorage.theme){
            localStorage.removeItem("theme");
            setTheme(null);
        }else{
            localStorage.setItem("theme", "light");
            setTheme("light");
        }
        const reloadPage = () => {
            location.reload();
        };
        setTimeout(reloadPage, 200);
    }

    const isActive = theme ? "active" : "";

    return (
        <div className={classNames(className, "theme-switcher-component")} {...rest}>
            <span className="theme-switcher__title">Тема</span>
            <div className={classNames('theme-switcher', isActive)} onClick={switchTheme}>
                <i className="theme-switcher__circle" />
            </div>
        </div>
    )
}

export const ThemeSwitch = styled(ThemeSwitchBase)`
    display: flex;
    align-items: center;
    padding: 10px;
    background: rgba(255,255,255,.04);
    border-radius: 100px;
    .theme-switcher{
        background: #091225;
        width: 50px;
        border-radius: 100px;
        margin-left: auto;
        cursor: pointer;
        transition: background 0.2s;
    }
    .theme-switcher__title{
        display: block;
        margin-left: 10px;
        margin-right: 20px;
        color: #fff;
        font-weight: 600;
        font-size: 17px;
        text-transform: uppercase;
    }
    .theme-switcher.active{
      background: #e8c133;
    }
    .theme-switcher.active .theme-switcher__circle{
        background: #fff;
        transform: translateX(100%);
    }
    .theme-switcher__circle{
        display: block;
        height: 25px;
        width: 25px;
        background: #386de2;
        border-radius: 100%;
        box-shadow: var(--block-shadow);
        transition: transform 0.2s, background 0.2s;
    }
`;