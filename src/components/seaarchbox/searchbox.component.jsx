
import './searchbox.styles.scss'
const SearchBox = ({ type, placeholder, onChange }) => {
  return (<div>
    <input className="search_input_field" type={type} placeholder={placeholder} onChange={onChange}></input>
  </div>)
}
export default SearchBox; 