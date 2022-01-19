import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';

export default function ItemCount(initial) {
    const [count, setCount] = useState (initial)
    

    const moreCount = () => {

        setCount(count + 1)

    }

    const lessCount = () => {

        setCount(count - 1) 

    }

    const confirmCount = () => {

        console.log(`qty confirmed: ${count}` )
    }



return (
    <div>
    <div>
        <Button variant="outlined" onClick={lessCount}> - </Button>
        <Button variant="outlined"> {count} </Button>
        <Button variant="outlined" onClick={moreCount}> + </Button>
    </div>
        <Button variant="outlined" onClick={confirmCount}> confirmar </Button>
    </div>

)
}
