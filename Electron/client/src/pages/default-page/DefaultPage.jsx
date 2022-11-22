export default function DefaultPage(props) {
    const { setPageIndentifier } = props;

    const setPageIndentifierToTwo = () => {
        setPageIndentifier(2)
    }

  return (
    <>
      <div>Default Page</div>
      <button
        onClick={setPageIndentifierToTwo}
      >
        Click to see!
      </button>
    </>
  );
}
