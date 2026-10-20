
import {ChevronLeft} from 'lucide-react';

const LeftArrow = ({className, onShiftLeftScroll}) => {
    return (
        <div>
            <button className={className} onClick={onShiftLeftScroll}>
                <ChevronLeft className='size-8'/>
            </button>
        </div>
    )
} 

export default LeftArrow;