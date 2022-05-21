
import './searchbox.styles.scss'
const SearchBox = ({ type, placeholder, onChange }) => {
  return (<div className='search_container'>
    <input className="search_input_field" type={type} placeholder={placeholder} onChange={onChange}></input>
  </div>)
}
export default SearchBox; 