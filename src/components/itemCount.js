import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';

export default function ItemCount() {
const [count, setCount] = useState (0)


return (
    <Button variant="outlined" onClick={() => setCount(count + 1)}> {count} </Button>
)
}