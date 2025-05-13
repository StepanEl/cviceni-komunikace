import './style.css';

export const IconButton = ({ label , onSelect}) => {
  return (
    <button className="icon-button" onClick={()=> onSelect(label)}>
      <i className="user-icon" />
      <div className="button-label">{label}</div>
    </button>
  );
};
