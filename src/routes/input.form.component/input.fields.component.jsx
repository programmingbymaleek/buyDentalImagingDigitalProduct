import './input.form.styles.scss'
const InputFields = ({ label, ...otherProps }) => {
  return (<div className='group'>
    <input className='form-input'{...otherProps} />
    {label && (
      <label className={`${otherProps.value.length ? 'shrink' : ''}form-input-label`}>
        {label}
      </label>
    )}
  </div>)
}
export default InputFields;