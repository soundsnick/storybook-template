import {FC} from "react";
import * as React from "react";
import {ThemeSwitch} from "./component";
import {Container} from "../../atoms/Container";
import {MockBackground} from "../../atoms/MockBackground";

export default {
    title: "Header/ThemeSwitch"
}

export const ThemeSwitchBasic: FC = () => (
    <>
        <Container mini>
            <MockBackground className="mb-3" background="#0e162b">
                <ThemeSwitch />
            </MockBackground>
            <MockBackground className="mb-3">
                <ThemeSwitch />
            </MockBackground>
            <MockBackground background="#673AB7">
                <ThemeSwitch />
            </MockBackground>
        </Container>
    </>
);