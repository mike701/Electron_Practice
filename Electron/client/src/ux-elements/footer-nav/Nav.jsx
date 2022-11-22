export default function Nav(props) {
    const {setPageIndentifier} = props
    return (
        <>
        <button onClick={() => {setPageIndentifier(1)}}>go to home page</button>
        <button onClick={() => {setPageIndentifier(2)}}>Go to profile</button>
        <button onClick={() => {setPageIndentifier(3)}}>Go to settings</button>
        </>
    )
}