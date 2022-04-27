import React from 'react';
import PropTypes from 'prop-types';
import EndAfter from './After';
import EndOnDate from './OnDate';
import translateLabel from '../../utils/translateLabel';

const End = ({
  id,
  local,
  end: {
    mode,
    after,
    onDate,
    options,
  },
  handleChange,
  translations
}) => {
  const isOptionAvailable = option => !options.modes || options.modes.indexOf(option) !== -1;
  const isOptionSelected = option => mode === option;

  return (
    <div className="react-rrule-end">
      <div className="react-rrule-end-content">
        <div className="react-rrule-repeat-label">
          <label
            htmlFor={id}
          >
            <strong>
              {translateLabel(translations, 'end.label')}
            </strong>
          </label>
        </div>
        <div className="col-sm-3">
          <select
            name="end.mode"
            id={id}
            className="form-control rrule-select"
            value={mode}
            onChange={handleChange}
          >
            {isOptionAvailable('Never') && <option value="Never">{translateLabel(translations, 'end.never')}</option>}
            {isOptionAvailable('After') && <option value="After">{translateLabel(translations, 'end.after')}</option>}
            {isOptionAvailable('On date') && <option value="On date">{translateLabel(translations, 'end.on_date')}</option>}
          </select>
        </div>

        {
          isOptionSelected('After') &&
          <EndAfter
            id={`${id}-after`}
            after={after}
            handleChange={handleChange}
            translations={translations}
          />
        }
        {
          isOptionSelected('On date') &&
          <EndOnDate
            id={`${id}-onDate`}
            onDate={onDate}
            local={local}
            handleChange={handleChange}
            translations={translations}
          />
        }

      </div>
    </div>
  );
};

End.propTypes = {
  id: PropTypes.string.isRequired,
  local: PropTypes.string,
  end: PropTypes.shape({
    mode: PropTypes.string.isRequired,
    after: PropTypes.number.isRequired,
    onDate: PropTypes.object.isRequired,
    options: PropTypes.shape({
      modes: PropTypes.arrayOf(PropTypes.oneOf(['Never', 'After', 'On date'])),
      weekStartsOnSunday: PropTypes.bool,
    }).isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  translations: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

End.defaultProps = {
  local: 'en-gb',
};

export default End;
