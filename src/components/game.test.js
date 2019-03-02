import React from 'react';
import { shallow } from 'enzyme';

import Game from './game';
import Header from './header';
import GuessSection from './guess-section';
import StatusSection from './status-section';
import InfoSection from './info-section';

describe('<Game />', () => {
    it('Should render without crashing', () => {
        shallow(<Game />);
    });
});