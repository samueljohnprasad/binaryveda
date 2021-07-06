import "./list.css";

function List({ arr }) {
  return (
    <div className="footerMenu">
      <ul className='footerMenuList'>
        {arr.map((res) => (
          <li>{res}</li>
        ))}
      </ul>
    </div>
  );
}

export default List;
