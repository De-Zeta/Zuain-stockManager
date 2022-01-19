import { useState, useEffect } from 'react';
import ItemCount from './itemCount';
import Button from '@mui/material/Button';

export default function ItemListContainer({greeting}) { 
    const onAdd = () => {}

    return (
        <div>
            {greeting}!
            <ItemCount initial={1} stock={5} onAdd={onAdd} />
        </div>
    )
    }
