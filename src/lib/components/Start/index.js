import React from 'react';
import PropTypes from 'prop-types';
import StartOnDate from './OnDate';
import './index.scss';
import translateLabel from '../../utils/translateLabel';

const Start = ({
  id,
  start: {
    onDate,
  },
  handleChange,
  translations
}) => (
  <div className="react-rrule-start">
    <div className="form-group">
      <div className="start-input">
        <label
          htmlFor={id}
        >
          <strong>
            {translateLabel(translations, 'start.label')}
          </strong>
        </label>
      </div>
      <StartOnDate id={id} onDate={onDate} handleChange={handleChange} translations={translations} />
    </div>
  </div>
);

Start.propTypes = {
  id: PropTypes.string.isRequired,
  start: PropTypes.shape({
    onDate: PropTypes.object.isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  translations: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default Start;
