import { GET_USERS, USERS_ERROR } from "../Action/Actiontype";
import fetchreducer, { initialstate } from "../Reducer/ApiReducer";


describe('Reducer test', () => {
  
  it('It should return default state', () => {
    const newState = fetchreducer(undefined, {});
    expect(newState).toEqual(initialstate);
  })

  it('return new state with countryList if pass type GET_USERS', () => {
    let countries = ["india", "pakistan", "usa"];
    let newState = fetchreducer(undefined, {
      type: GET_USERS,
      payload: countries
    });
    expect(newState.country).toEqual(countries);
  });

  it('-->return new state with error if pass type USERS_ERROR', () => {
    let message = "FOund Error"
    const newState = fetchreducer(undefined, {
      type: USERS_ERROR,
      payload: message
    });
    expect(newState.error).toEqual(message);
  });

})