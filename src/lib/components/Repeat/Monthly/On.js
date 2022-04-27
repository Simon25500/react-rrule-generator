import React from 'react';
import PropTypes from 'prop-types';
import numericalFieldHandler from '../../../utils/numericalFieldHandler';
import translateLabel from '../../../utils/translateLabel';

const RepeatMonthlyOn = ({
  id,
  mode,
  on,
  hasMoreModes,
  handleChange,
  translations
}) => {
  const isActive = mode === 'on';

  return (
    <div className={`repeat-option ${!isActive && 'opacity-50'}`}>
      <div className="repeat-option-element">
        {hasMoreModes && (
          <input
            id={id}
            type="radio"
            className='rrule-input-radio'
            name="repeat.monthly.mode"
            aria-label="Repeat monthly on"
            value="on"
            checked={isActive}
            onChange={handleChange}
          />
        )}
      </div>
      <div className="repeat-option-element">
        {translateLabel(translations, 'repeat.monthly.on_day')}
      </div>

      <div className="repeat-option-element">
        <select
          id={`${id}-day`}
          name="repeat.monthly.on.day"
          aria-label="Repeat monthly on a day"
          className="form-control rrule-select"
          value={on.day}
          disabled={!isActive}
          onChange={numericalFieldHandler(handleChange)}
        >
          {[...new Array(31)].map((day, i) => <option key={i} value={i + 1}>{i + 1}</option>)}
        </select>
      </div>
    </div>
  );
};
RepeatMonthlyOn.propTypes = {
  id: PropTypes.string.isRequired,
  mode: PropTypes.oneOf(['on', 'on the']).isRequired,
  on: PropTypes.shape({
    day: PropTypes.number.isRequired,
  }).isRequired,
  hasMoreModes: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  translations: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default RepeatMonthlyOn;
