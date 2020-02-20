import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles';
import { defaultInputRanges, defaultStaticRanges } from '../defaultRanges';
import { rangeShape } from './DayCell';
import cx from 'classnames';
import { format } from 'date-fns';
import defaultLocale from 'date-fns/locale/en-US';
import IconCheck from './IconCheck';
import { ReactComponent as IconDown } from '../../../assets/svg/ArrowDown.svg';

class DefinedRanges extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: {
        '0': 6,
        '1': 6
      },
      rangeOffset: 0,
      focusedInput: -1
    };
    this.dateOptions = { locale: props.locale };
    this.handleRangeChange = this.handleRangeChange.bind(this);
    this.onCompareChange = this.onCompareChange.bind(this);
  }

  handleRangeChange(range, idx = 0) {
    const { onChange, ranges } = this.props;
    const selectedRange = ranges[idx];
    if (!onChange || !selectedRange) return;
    onChange({
      [selectedRange.key || `range${idx + 1}`]: {
        ...selectedRange,
        ...range
      }
    });
  }

  getSelectedRange(ranges, staticRange) {
    const focusedRangeIndex = ranges.findIndex(range => {
      if (!range.startDate || !range.endDate || range.disabled) return false;
      return staticRange.isSelected(range);
    });
    const selectedRange = ranges[focusedRangeIndex];
    return { selectedRange, focusedRangeIndex };
  }

  getDateValue(date) {
    return format(date, this.props.rangeFormat, this.dateOptions);
  }

  onCompareChange(e) {
    const { onCompareChange } = this.props;
    const { checked } = e.target;
    onCompareChange(checked);
  }

  renderSelect(idx = 0) {
    const {
      onPreviewChange,
      ranges,
      compare,
      staticRanges,
      renderStaticRangeLabel,
      rangeColors
    } = this.props;

    return (
      <div className="rdrSelect__wrapper">
        <select
          className='rdrSelect'
          disabled={idx === 1 && !compare}
          value={this.state.selected[idx]}
          onChange={e => {
            const { value } = e.target;
            this.setState(prevState => ({
              ...prevState,
              selected: { ...prevState.selected, [idx]: value }
            }));
            if (staticRanges[value] && staticRanges[value].range) {
              this.handleRangeChange(staticRanges[value].range(this.props), idx);
            }
          }}
        >
          {staticRanges.map((staticRange, i) => {
            const { selectedRange, focusedRangeIndex } = this.getSelectedRange(
              ranges,
              staticRange
            );
            let labelContent;
            if (staticRange.hasCustomRendering) {
              labelContent = renderStaticRangeLabel(staticRange);
            } else {
              labelContent = staticRange.label;
            }
  
            return (
              <option
                className={cx(styles.staticRange, {
                  [styles.staticRangeSelected]: Boolean(selectedRange)
                })}
                style={{
                  color: selectedRange
                    ? selectedRange.color || rangeColors[focusedRangeIndex]
                    : null
                }}
                key={String(i)}
                onClick={() => {
                  console.log('click');
                  this.handleRangeChange(staticRange.range(this.props));
                }}
                onMouseOver={() =>
                  onPreviewChange &&
                  onPreviewChange(staticRange.range(this.props))
                }
                onMouseLeave={() => {
                  this.props.onPreviewChange && this.props.onPreviewChange();
                }}
                value={i}
              >
                {labelContent}
              </option>
            );
          })}
          <option value={6} key='custom'>
            Custom range
          </option>
        </select>
        <IconDown className={cx('rdrSelect__icon')}/>
      </div>
    );
  }

  render() {
    const { className, compare, onApply } = this.props;
    return (
      <div className={cx(styles.definedRangesWrapper, className)}>
        <div className='rdrDefinedRangesWrapper__selection'>
          <div className='rdrDefinedRangesWrapper__row rdrDefinedRangesWrapper__row--mb'>
            <span className='rdrDefinedRangesWrapper__caption'>
              Date range:
            </span>
            {this.renderSelect(0)}
          </div>
          <div className='rdrDefinedRangesWrapper__row'>
            <input
              className='rdrDefinedRangesWrapper__input'
              type='text'
              readOnly
              value={this.getDateValue(this.props.ranges[0].startDate)}
            />
            <span className='rdrDefinedRangesWrapper__dash'>-</span>
            <input
              className='rdrDefinedRangesWrapper__input'
              type='text'
              readOnly
              value={this.getDateValue(this.props.ranges[0].endDate)}
            />
          </div>
        </div>
        <div className='rdrDefinedRangesWrapper__selection'>
          <div className='rdrDefinedRangesWrapper__row rdrDefinedRangesWrapper__row--mb'>
            <label className='checkbox'>
              <input checked={compare} value={compare} onChange={this.onCompareChange} className='checkbox__input' type='checkbox' />
              <span className='checkbox__box'>
                <IconCheck className='checkbox__icon' />
              </span>
              <span className='rdrDefinedRangesWrapper__label-text'>
                Compare:
              </span>
            </label>
            {this.renderSelect(1)}
          </div>
         {compare && <div className='rdrDefinedRangesWrapper__row rdrDefinedRangesWrapper__row--mb'>
            <input
              className='rdrDefinedRangesWrapper__input'
              type='text'
              readOnly
              value={this.getDateValue(this.props.ranges[1].startDate)}
            />
            <span className='rdrDefinedRangesWrapper__dash'>-</span>
            <input
              className='rdrDefinedRangesWrapper__input'
              type='text'
              readOnly
              value={this.getDateValue(this.props.ranges[1].endDate)}
            />
          </div>}
          <button onClick={onApply} className='apply-btn'>Apply</button>
        </div>
        
      </div>
    );
  }
}

DefinedRanges.propTypes = {
  inputRanges: PropTypes.array,
  staticRanges: PropTypes.array,
  ranges: PropTypes.arrayOf(rangeShape),
  focusedRange: PropTypes.arrayOf(PropTypes.number),
  onPreviewChange: PropTypes.func,
  onChange: PropTypes.func,
  footerContent: PropTypes.any,
  headerContent: PropTypes.any,
  rangeColors: PropTypes.arrayOf(PropTypes.string),
  className: PropTypes.string,
  renderStaticRangeLabel: PropTypes.func,
  rangeFormat: PropTypes.string,
  locale: PropTypes.object,
  onCompareChange: PropTypes.func,
  compare: PropTypes.bool,
  onApply: PropTypes.func
};

DefinedRanges.defaultProps = {
  inputRanges: defaultInputRanges,
  staticRanges: defaultStaticRanges,
  ranges: [],
  rangeColors: ['#FF9E2F', '#002A67', '#fed14c'],
  focusedRange: [0, 0],
  rangeFormat: 'D ddd, MMMM',
  locale: defaultLocale
};

export default DefinedRanges;
