import React from 'react';
import PropTypes from 'prop-types';

const IconRight = ({ className }) => (
  <svg
    className={className}
    viewBox='0 0 6 11'
    version='1.1'
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
  >
    <g stroke='none' strokeWidth='1' fillRule='evenodd'>
      <g transform='translate(-803.000000, -154.000000)' fillRule='nonzero'>
        <g transform='translate(552.000000, 134.000000)'>
          <g transform='translate(15.000000, 16.000000)'>
            <path d='M241.837091,8.70795051 L237.292214,4.16315625 C237.187097,4.05795576 237.046774,4 236.897152,4 C236.74753,4 236.607207,4.05795576 236.502089,4.16315625 L236.167391,4.49777188 C235.9496,4.71581174 235.9496,5.07018878 236.167391,5.28789651 L239.983836,9.10434132 L236.163156,12.9250207 C236.058039,13.0302212 236,13.1704609 236,13.32 C236,13.4697052 236.058039,13.6099449 236.163156,13.7152284 L236.497855,14.049761 C236.603055,14.1549615 236.743295,14.2129172 236.892917,14.2129172 C237.042539,14.2129172 237.182862,14.1549615 237.28798,14.049761 L241.837091,9.50081517 C241.942458,9.39528255 242.000331,9.25437865 242,9.10459042 C242.000331,8.95422096 241.942458,8.81340009 241.837091,8.70795051 Z'></path>
          </g>
        </g>
      </g>
    </g>
  </svg>
);

IconRight.defautProps = {
  className: ''
};

IconRight.propTypes = {
  className: PropTypes.string
};

export default IconRight;
