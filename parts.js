function MyList(props) {
  const arr = props.data;
  const listItems = arr.map((val) =>
  <li>{val}</li>
  );
  return <ul>{listItems}</ul>;
  }
