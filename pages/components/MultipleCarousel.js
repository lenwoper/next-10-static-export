import React ,{useState} from 'react'
import ItemsCarousel from 'react-items-carousel';
// import ProductsCard from './ProductCard'
const MultipleCarousel = () => {
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 0;


    var displaySize;

    // make sure your function is being called in client side only
    if (typeof window !== 'undefined') {
        if (window.innerWidth <= 556) {
            displaySize = 2;
        }
        else {
            displaySize = 4;
        }
    }



    // console.log('thatnis displaynwidth of your url',displaySize);

    return (
        <div style={{ padding: `0 ${chevronWidth}px` }}>
            <ItemsCarousel

                requestToChangeActive={setActiveItemIndex}
                activeItemIndex={activeItemIndex}
                numberOfCards={displaySize?displaySize:4}
                gutter={20}

                leftChevron={<button style={{ padding: '5px', opacity: '0.8', borderRadius: '2px', border: 'none', bgcolor: '#000000' }}>&#10094;</button>}
                rightChevron={<button style={{ padding: '5px', opacity: '0.8', borderRadius: '2px', border: 'none', bgcolor: '#000000' }}>&#10095;</button>}
                outsideChevron
                chevronWidth={chevronWidth}
            >
         
             <div    className="mulitpleCarousel" style={{ background: '#EEE' }} > first card </div>
                <div className="mulitpleCarousel" style={{ background: '#EEE' }}> Second card </div>
                <div className="mulitpleCarousel" style={{ background: '#EEE' }}>Third card</div>
                <div className="mulitpleCarousel" style={{ background: '#FEE' }}>Fourth card</div>
                <div className="mulitpleCarousel" style={{ background: '#EfE' }}>Fourth card</div>
                <div className="mulitpleCarousel" style={{ background: '#EE0' }}>Fourth card</div>
                <div className="mulitpleCarousel" style={{ background: '#E00E' }}>Fourth card</div>
                <div className="mulitpleCarousel" style={{ background: '#EEE' }}>Fourth card</div>
         
            </ItemsCarousel>
        </div>
    );


};


export default MultipleCarousel;