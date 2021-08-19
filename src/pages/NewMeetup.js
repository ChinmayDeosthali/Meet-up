import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useHistory } from "react-router-dom";
function NewMeetupPage(){
    const history = useHistory();
    function addMetupHandler(meetupData){
        fetch(
            'https://react-getting-started-e2036-default-rtdb.firebaseio.com/meet-ups.json',
            {
                method: 'POST',
                body: JSON.stringify(meetupData),
                headers: {
                    'Content-Type': 'application/json' 
                }
            }
        ).then(() =>{
            history.replace('/');
        });
    }

    return (<section>
        <h1>Add New Meetup</h1>
        <NewMeetupForm onAddMeetup={addMetupHandler}/>
    </section>);
}


export default NewMeetupPage;