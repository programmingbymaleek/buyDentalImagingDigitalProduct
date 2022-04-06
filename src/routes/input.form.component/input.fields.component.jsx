const InputFields = ({ label, ...otherProps }) => {
  return (<div>
    <input {...otherProps} />
    {label && (
      <label /**className={`${otherProps.values.length ? 'shrink' : ''}`}**/>
        {label}
      </label>
    )}
  </div>)
}
export default InputFields;