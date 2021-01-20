import PropTypes from 'prop-types';

export default function Filter({ value, onChangeFilter }) {
  return (
    <div className="form">
      <label className="form-label">
        Find contact by name
        <input
          type="text"
          className="form-input"
          value={value}
          onChange={e => onChangeFilter(e.target.value)}
        />
      </label>
    </div>
  );
}

Filter.defaultProps = {
  value: 'noName',
  number: '123 45 67',
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,

  onChangeFilter: PropTypes.func,
};
