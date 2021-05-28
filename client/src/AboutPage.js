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
            TODO
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
            TODO
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
            TODO
            </p>
        </Accordion.Content>
        </Accordion>
    )
    }
}
    
export default AboutPage;