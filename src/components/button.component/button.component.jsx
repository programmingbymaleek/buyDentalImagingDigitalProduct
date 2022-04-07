import './button.styles.scss';
const buttonTypes_Class = {
  google: 'google-sign-in',
  inverted: 'inverted',
}

const CustomButton = ({ label, buttonType, ...otherProps }) => {
  return (<button className={`button-container ${buttonTypes_Class[buttonType]}`}{...otherProps}>{label}</button>)
}

export default CustomButton; 