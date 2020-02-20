import React from 'react';
import PropTypes from 'prop-types';

const IconLeft = ({ className }) => (
  <svg className={className} viewBox="0 0 6 11" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
    <g stroke="none" strokeWidth="1" fillRule="evenodd">
      <g transform="translate(-567.000000, -154.000000)" fillRule="nonzero">
        <g transform="translate(552.000000, 134.000000)">
          <g transform="translate(15.000000, 16.000000)">
            <path d="M5.83709142,8.70795051 L1.29221414,4.16315625 C1.18709667,4.05795576 1.04677399,4 0.897151818,4 C0.747529645,4 0.607206964,4.05795576 0.502089499,4.16315625 L0.167390844,4.49777188 C-0.0503999216,4.71581174 -0.0503999216,5.07018878 0.167390844,5.28789651 L3.98383565,9.10434132 L0.163156254,12.9250207 C0.0580387895,13.0302212 0,13.1704609 0,13.32 C0,13.4697052 0.0580387895,13.6099449 0.163156254,13.7152284 L0.49785491,14.049761 C0.603055405,14.1549615 0.743295055,14.2129172 0.892917228,14.2129172 C1.0425394,14.2129172 1.18286208,14.1549615 1.28797955,14.049761 L5.83709142,9.50081517 C5.94245798,9.39528255 6.0003307,9.25437865 6,9.10459042 C6.0003307,8.95422096 5.94245798,8.81340009 5.83709142,8.70795051 Z" id="Arrow-left" transform="translate(3.000000, 9.106459) scale(-1, 1) translate(-3.000000, -9.106459) "></path>
          </g>
        </g>
      </g>
    </g>
  </svg>
);

IconLeft.defautProps = {
  className: ''
}

IconLeft.propTypes = {
  className: PropTypes.string
}

export default IconLeft;
