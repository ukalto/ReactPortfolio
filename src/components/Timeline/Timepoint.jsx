import React, {useEffect, useState} from 'react';

const Timepoint = ({timepoint, index}) => {
    const {date_from, date_to, position, company, present} = timepoint;
    const isEvenIndex = index % 2 === 1;

    const formatDate = (date) => {
        const options = {year: 'numeric', month: 'long'};
        return new Date(date).toLocaleDateString(undefined, options);
    };

    const handleResize = () => {
        if (window.outerWidth <= 650) {
            return !isEvenIndex
                ? {marginRight: '0', display: 'flex', flexDirection: 'row-reverse'}
                : {marginLeft: '0', display: 'flex', flexDirection: 'row'};
        } else if (window.innerWidth <= 840) {
            return !isEvenIndex ? {marginRight: 'calc(60% - 20px)'} : {marginLeft: 'calc(60% - 20px)'};
        } else {
            return !isEvenIndex ? {marginRight: 'calc(40% - 20px)'} : {marginLeft: 'calc(40% - 20px)'};
        }
    };

    const [resizeStyle, setResizeStyle] = useState(
        handleResize()
    );

    useEffect(() => {
        const handleWindowResize = () => {
            const resizeStyle = handleResize();
            setResizeStyle(resizeStyle);
        };

        window.addEventListener('resize', handleWindowResize);

        // Clean up the event listener when the component is unmounted
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    return (
        <div className={`timepoint ${present ? 'present' : ''}`} style={resizeStyle}>
            {!isEvenIndex ? (
                <div className="content">
                    <div className="date">
                        <a>{!present ? `${formatDate(date_from)} - ${formatDate(date_to)}` : `${formatDate(date_from)} - Present`}</a>
                    </div>
                    {position !== '' ? <div className="position">{position}</div> : null}
                    <div className="company">{company}</div>
                </div>
            ) : null}
            <span className="dot"/>
            {isEvenIndex ? (
                <div className="content">
                    <div className="date">
                        <a>{!present ? `${formatDate(date_from)} - ${formatDate(date_to)}` : `${formatDate(date_from)} - Present`}</a>
                    </div>
                    {position !== '' ? <div className="position">{position}</div> : null}
                    <div className="company">{company}</div>
                </div>
            ) : null}
        </div>
    );
};

export default Timepoint;
