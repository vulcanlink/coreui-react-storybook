import React from 'react';
import { action } from '@storybook/addon-actions';
import { CButton, CCard, CCardHeader, CCardBody, CRow, CCol, CContainer, CBadge, CListGroup, CListGroupItem } from '@coreui/react'
import { withCenter } from '../Center'
import { withKnobs, select, boolean } from "@storybook/addon-knobs";
import { listData } from '../data'

export default {
    title: 'Base/ListGroup',
};

const colorOptions = ['', 'primary', 'secondary', 'success', 'warning', 'danger', 'info', 'light', 'dark']
const colorDefault = '';
const groupId = 'GROUP-ID1';

export const Default = () => {
    const color = select('color', colorOptions, colorDefault, groupId);
    const disabled = boolean('disabled', false, groupId);
    const action = boolean('action', false, groupId);

    return (<CCard>
        <CCardHeader>ListGroup</CCardHeader>
        <CCardBody>
            <CListGroup>
                {listData.map(t => <CListGroupItem action={action} disabled={disabled} color={color}>{t}</CListGroupItem>)}
            </CListGroup>
        </CCardBody>
    </CCard>)
}
