/** @jsx jsx */
import { jsx } from "@emotion/core";

import {FC} from "react";
import {Container} from "../Container";
import {MockBackground} from "./component";


export default {
    title: "Mock/MockBackground"
}

export const MockBackgroundBasic: FC = () => (
    <Container mini>
        <h1>This backgrounds used for testing content on different backgrounds.</h1>
        <MockBackground className="mb-2">
            <span css={{ color: "#fff" }}>Some text on dark theme</span>
        </MockBackground>
        <MockBackground className="mb-2" background="#1565c0" />
        <MockBackground className="mb-2" background="#ad1457" />
    </Container>
);