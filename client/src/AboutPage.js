import React from 'react';
import { Accordion, Icon } from 'semantic-ui-react';

class AboutPage extends React.Component {
    state = { activeIndex: -1 }

    handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
    }

    render() {
    const { activeIndex } = this.state

    return (
        <Accordion fluid styled>
        <Accordion.Title
            active={activeIndex === 0}
            index={0}
            onClick={this.handleClick}
        >
            <Icon name='dropdown' />
            What is WasmFiddle?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
            <p>
            WasmFiddle is an interactive web application built for fast prototyping of C,
            C++, and Rust in the browser. It runs by virtue of a client-side text editor
            and output window and server-side compilers that take any
            of the three languages and convert them to Wasm. Once
            the user hits the “Run” button, the Wasm code is sent to
            the server and the output of the code appears in a text box
            for the user to see.
            </p>
        </Accordion.Content>

        <Accordion.Title
            active={activeIndex === 1}
            index={1}
            onClick={this.handleClick}
        >
            <Icon name='dropdown' />
            How does WasmFiddle work?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
            <p>
            WasmFiddle leverages the power of <a href="https://emscripten.org/">Emscripten</a>, which converts the 
            languages used in WasmFiddle to WebAssembly. Upon installation of the Emscription SDK, the command line tool `emcc`
            becomes available. Using this, C and C++ can be easily compiled into Wasm. Learn more about how to get started with
            Emscripten <a href="https://emscripten.org/docs/getting_started/Tutorial.html">here</a>.
            </p>
        </Accordion.Content>

        <Accordion.Title
            active={activeIndex === 2}
            index={2}
            onClick={this.handleClick}
        >
            <Icon name='dropdown' />
            Who built WasmFiddle?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 2}>
            <p>
            WasmFiddle was built as a capstone project for OSU's CS 467 by a team of three students. See our project poster <a href="https://drive.google.com/file/d/1lccKWDAxm83RpUDdKYitCdluykksARve/view?usp=sharing">here</a>!
            </p>
        </Accordion.Content>
        </Accordion>
    )
    }
}

export default AboutPage; 