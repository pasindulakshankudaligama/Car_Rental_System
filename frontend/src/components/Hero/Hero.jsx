import React, {Component} from 'react';

class Hero extends Component {
    render() {
        return (
            <div className={'h-screen bg-black flex flex-col justify-center item-center'}>
                <div className={'bg-carImg w-screen h-4/5 bg-contain bg-origin-border bg-right bg-no-repeat bg-black  '}>

                </div>
            </div>
        );
    }
}

export default Hero;