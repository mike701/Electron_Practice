export default function ProfileDataDisplay(props) {
    return <div>
        <h1>{props.profileData.user}</h1>
        <h2>{props.profileData.age}</h2>
        <h2>{props.profileData.desciption}</h2>
        <h2>{props.profileData.hobbies}</h2>
    </div>
}