import React, {useContext} from 'react'
import { counterContext } from '../context/Context'

const component1 = () => {
const Value= useContext(counterContext)
    return (
        <div>
            {Value.count}
        </div>
    )
}

export default component1
