import React from 'react';
import classnames from 'classnames';

const TextAreaFieldGroup = ({ field, value, label, error, onChange }) => {
  return (
    <div className={classnames('form-group', { 'has-error': error })}>
      <label className="control-label">{label}</label>
      <textarea
        onChange={onChange}
        rows="5"
        value={value}
        name={field}
        className="form-control"
      />
    {error && <span className="help-block">{error}</span>}
    </div>  );
}

TextAreaFieldGroup.propTypes = {
  field: React.PropTypes.string.isRequired,
  value: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired,
  error: React.PropTypes.string,
  onChange: React.PropTypes.func.isRequired
}

TextAreaFieldGroup.defaultProps = {
  type: 'text'
}

export default TextAreaFieldGroup;
