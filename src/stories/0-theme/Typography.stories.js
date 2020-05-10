import React from 'react';
import { action } from '@storybook/addon-actions';
import { CButton, CCard, CCardHeader, CCardBody, CRow, CCol } from '@coreui/react'
import { withCenter } from '../Center'
import { withKnobs, select, boolean } from "@storybook/addon-knobs";

export default {
    title: 'Theme/Typography',
};

export const Headings = () => <div>
    <h1>h1. Bootstrap heading</h1>
    <h2>h2. Bootstrap heading</h2>
    <h3>h3. Bootstrap heading</h3>
    <h4>h4. Bootstrap heading</h4>
    <h5>h5. Bootstrap heading</h5>
    <h6>h6. Bootstrap heading</h6>
</div>

Headings.story = {
    parameters: {
        notes: 'Documentation and examples for Bootstrap typography, including global settings, headings, body text, lists, and more.',
    },
    decorators: [withCenter, withKnobs]
};