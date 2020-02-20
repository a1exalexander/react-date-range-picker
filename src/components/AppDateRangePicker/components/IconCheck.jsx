import React from 'react';
import PropTypes from 'prop-types';

const IconCheck = ({ className }) => (
  <svg className={className} viewBox="0 0 11 9" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="My-Creatives-(ADs)-Top-Select-Date-(Compare)" transform="translate(-1116.000000, -266.000000)" fill="#07C99A" fillRule="nonzero">
            <g id="Group-42" transform="translate(552.000000, 134.000000)">
                <g id="Group-41" transform="translate(561.000000, 122.000000)">
                    <g id="Group-39" transform="translate(0.000000, 6.000000)">
                        <g id="Group-38">
                            <g id="checked" transform="translate(3.000000, 4.000000)">
                                <path d="M0.126923077,4.65384615 C0.0423076923,4.56923077 0,4.44230769 0,4.35769231 C0,4.27307692 0.0423076923,4.14615385 0.126923077,4.06153846 L0.719230769,3.46923077 C0.888461538,3.3 1.14230769,3.3 1.31153846,3.46923077 L1.35384615,3.51153846 L3.68076923,6.00769231 C3.76538462,6.09230769 3.89230769,6.09230769 3.97692308,6.00769231 L9.64615385,0.126923077 L9.68846154,0.126923077 L9.68846154,0.126923077 C9.85769231,-0.0423076923 10.1115385,-0.0423076923 10.2807692,0.126923077 L10.8730769,0.719230769 C11.0423077,0.888461538 11.0423077,1.14230769 10.8730769,1.31153846 L10.8730769,1.31153846 L4.10384615,8.33461538 C4.01923077,8.41923077 3.93461538,8.46153846 3.80769231,8.46153846 C3.68076923,8.46153846 3.59615385,8.41923077 3.51153846,8.33461538 L0.211538462,4.78076923 L0.126923077,4.65384615 Z" id="Check"></path>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </g>
    </g>
</svg>
);

IconCheck.defautProps = {
  className: ''
}

IconCheck.propTypes = {
  className: PropTypes.string
}

export default IconCheck;