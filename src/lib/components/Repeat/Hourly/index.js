import React from 'react';
import PropTypes from 'prop-types';
import numericalFieldHandler from '../../../utils/numericalFieldHandler';
import translateLabel from '../../../utils/translateLabel';

const RepeatHourly = ({
  id,
  hourly: {
    interval,
  },
  handleChange,
  translations
}) => (
  <div className="repeat-option">
    <div className="repeat-option-element">
      {translateLabel(translations, 'repeat.hourly.every')}
    </div>
    <div className="repeat-option-element">
      <input
        id={`${id}-interval`}
        name="repeat.hourly.interval"
        aria-label="Repeat hourly interval"
        className="rrule-input-number"
        value={interval}
        onChange={numericalFieldHandler(handleChange)}
      />
    </div>
    <div className="repeat-option-element">
      {translateLabel(translations, 'repeat.hourly.hours')}
    </div>
  </div>
);
RepeatHourly.propTypes = {
  id: PropTypes.string.isRequired,
  hourly: PropTypes.shape({
    interval: PropTypes.number.isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  translations: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default RepeatHourly;
