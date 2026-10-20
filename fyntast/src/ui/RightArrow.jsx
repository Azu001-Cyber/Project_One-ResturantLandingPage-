
import {ChevronRight} from 'lucide-react';

function RightArrow ({className, onShiftRightScroll}) {
    return (
        <div>
            <button className={className} onClick={onShiftRightScroll}>
                <ChevronRight className='size-8'/>
            </button>
        </div>
    )
} 

export default RightArrow;