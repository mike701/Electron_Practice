import './Nav.css';
export default function Nav(props) {
    const {setPageIdentifier} = props
    return (
        <div id="navBar">
        <button onClick={() => {setPageIdentifier(1)}}>go to home page</button>
        <button onClick={() => {setPageIdentifier(2)}}>Go to profile</button>
        <button onClick={() => {setPageIdentifier(3)}}>Go to settings</button>
        </div>
    )
}