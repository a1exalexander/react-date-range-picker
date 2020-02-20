import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { default as DateRangePicker } from './components/DateRangePicker';
import { format, addDays, isValid } from 'date-fns/esm';
import { ReactComponent as IconArrowDown } from '../../assets/svg/ArrowDown.svg';

const AppDateRangePicker = ({ onChange, className }) => {
  const [state, setState] = useState({
    selection: {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    },
    compare: {
      startDate: new Date(),
      endDate: addDays(new Date(), 3),
      key: 'compare'
    }
  });

  const [open, setOpen] = useState(false);
  const [compare, setCompare] = useState(false);

  const toggleCalendar = () => {
    setOpen(prevState => !prevState)
  }

  const handleChange = ranges => {
    setState(prevState => ({ ...prevState, ...ranges }));
    onChange(ranges);
  };

  const onCompareChange = (value) => {
    setCompare(value);
  }

  const ranges = compare ? [state.selection, state.compare] : [state.selection];

  const getPlaceholder = () => {
    const { startDate, endDate } = state.selection;
    const mask = 'ddd, MMM dd, YYYY';
    return `${isValid(startDate) ? format(startDate, mask) : ''} - ${isValid(endDate) ? format(endDate, mask) : ''}`;
  };

  return (
    <div className={cx('app-date-range-picker', className)}>
      {open && <div className='app-date-range-picker__layer' onClick={() => setOpen(false)}/>}
      <div className='app-date-range-picker__select' onClick={toggleCalendar}>
        <input className='app-date-range-picker__input' readOnly type='text' value={getPlaceholder()} />
        <IconArrowDown className={cx('app-date-range-picker__icon', { active: open })}/>
      </div>
      {open && <DateRangePicker
        compare={compare}
        onCompareChange={onCompareChange}
        onChange={handleChange}
        onApply={() => setOpen(false)}
        showSelectionPreview={true}
        moveRangeOnFirstSelection={false}
        className='app-date-range-picker__calendar'
        months={2}
        ranges={ranges}
        direction='horizontal'
      />}
    </div>
  );
};

AppDateRangePicker.defaultProps = {
  onChange: () => null,
  className: null
};

AppDateRangePicker.propTypes = {
  onChange: PropTypes.func,
  className: PropTypes.string
};

export default AppDateRangePicker;
