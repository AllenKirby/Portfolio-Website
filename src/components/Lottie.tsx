import { useLottie } from 'lottie-react'
import type React from 'react';

const style = {
    width: 350,
    height: 350
}

type LottieProp = {
    lottieProp: object;
}

const Lottie: React.FC<LottieProp> = ({ lottieProp }) => {
    const options = {
        animationData: lottieProp,
        autoplay: true,
        loop: true
    }
    const { View } = useLottie(options, style);

    return View
}

export default Lottie