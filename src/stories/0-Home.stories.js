import React from 'react';
import { linkTo } from '@storybook/addon-links';

export default {
    title: 'Home',
};

export const Home = () => <div>
    <button onClick={linkTo('Buttons/Buttons', 'Button Standard')}>Go to "Button Standard"</button>
</div>;

Home.story = {
};
