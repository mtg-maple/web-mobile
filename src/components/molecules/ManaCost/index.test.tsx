import React, { FC } from 'react';
import { ManaCostContainer, ManaCostPresenterProps } from '../ManaCost';

describe('ManaCostContainer', () => {
    const presenter: FC<ManaCostPresenterProps> = (props) => {
        return (<div {...props}></div>);
    };

    it(`'{2}{W}{B}' should be '2,W,B'`, () => {
        const component = ManaCostContainer(presenter, { value: '{2}{W}{B}' });
        expect(component?.props.symbols.join(',')).toBe('2,W,B');
    });
});