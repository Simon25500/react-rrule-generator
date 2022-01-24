import React from 'react';
import PropTypes from 'prop-types';
import numericalFieldHandler from '../../utils/numericalFieldHandler';
import translateLabel from '../../utils/translateLabel';

const EndAfter = ({
  id,
  after,
  handleChange,
  translations
}) => (
  <div className="end-option">
    <div className="end-option">
      <div className="end-option-element">
        <input
          id={id}
          name="end.after"
          aria-label="End after"
          className="input-number"
          value={after}
          onChange={numericalFieldHandler(handleChange)}
        />
      </div>
      <div className="end-option-element">
        {translateLabel(translations, 'end.executions')}
      </div>
    </div>
  </div>
);

EndAfter.propTypes = {
  id: PropTypes.string.isRequired,
  after: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
  translations: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default EndAfter;
