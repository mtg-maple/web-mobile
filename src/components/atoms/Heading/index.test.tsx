import React, { FC } from 'react';
import { HeadingContainer, HeadingPresenterProps, HeadingLevel, HeadingTextColor } from '../Heading';

describe('HeadingContainer', () => {
    const presenter: FC<HeadingPresenterProps> = (props) => {
        return (<div {...props}></div>);
    };

    it('level 1 should be tag h1', () => {
        const component = HeadingContainer(presenter, {
            level: '1' as HeadingLevel,
            color: 'text' as HeadingTextColor,
        });
        expect(component?.props.tag).toBe('h1');
    });
});