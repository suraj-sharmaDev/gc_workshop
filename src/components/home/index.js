import react from 'react';
import './styles.css';

export const CircleContainer = ({title, subTitle}) => {
    return (
        <div className='circleContainer'>
            <span className='circleTitle'>{title}</span>
            <span className='circleSubTitle'>{subTitle}</span>
        </div>
    );
}