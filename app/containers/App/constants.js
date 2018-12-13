/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

// export const REQUEST_BOT_WISDOM = 'app/App/REQUEST_BOT_WISDOM';
// export const BOT_WISDOM_SUCCESS = 'app/App/BOT_WISDOM_SUCCESS';
// export const BOT_WISDOM_FAIL = 'app/App/BOT_WISDOM_FAIL';



//-----------for Post to DB-------------//
// export const SAVE_TO_DB = 'app/InputPage/SAVE_TO_DB';
// export const SAVE_SUCCESS = 'app/InputPage/SAVE_SUCCESS';
// export const SAVE_FAIL = 'app/InputPage/SAVE_FAIL';
// export const RETRIEVE_FROM_DB
// export const RETRIEVE_SUCCESS
// export const RETRIEVE_FAIL

//actions
    //change textInput
    //change author
//reducer initial state = 
    //loading, error, success (display a message);
    //textInput, author
//selector 
    //select for load, success, fail state
//in MapDispatchToState 
    //changeTextValue = dispatch(changeTextValue)
    //changeAuthorValue = dispatch(changeAuthor)
        //**do a test and see how many time re rendered with state change (console.log somthing on compoenent) */
    //onsubmit = dispatch (save (text value, author name))
    //onComponentDidMount, need to do a call to DB grab all posts
//Saga 
    //need to do a POST request to DB
    //a call to my server, url ending in the path app.get('/path', cb)
        //that will trigger my action to db
    //need to do a GET request to DB    

//global state needs to have array of onliners. 
    //when POST, need to save to DB, but also add to front of Array.         s