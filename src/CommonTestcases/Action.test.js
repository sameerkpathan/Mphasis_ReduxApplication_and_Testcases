import { getusers } from '../Action/Action';
import moxios from 'moxios';
import store from '../Store/store';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { GET_USERS, USERS_ERROR } from '../Action/Actiontype';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);


describe('-->CountryAction ', () => {

    beforeEach(() => moxios.install());

    afterEach(() => moxios.uninstall());

    describe('-->fething data', () => {

        let continent = "asia";


        let expectedState = [

            { name: { common: 'India' } },

            { name: { common: 'China' } },

            { name: { common: 'Nepal' } },

            { name: { common: 'Turkey' } },

            { name: { common: 'srilanka' } }

        ];

        const storeData = mockStore();

    it('should dispatch action-type ',()=>{
        moxios.wait(()=>{
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status : 200,
                response: expectedState
            });
        });

        return storeData.dispatch(getusers())
        .then(()=>{
            const actions = storeData.getActions();
            console.log("actions",actions)
            expect(actions[0].type).toEqual(GET_USERS);
        })

    })

     it("should dispatch action type",()=>{
        const errorResp = {
            status: 404,
            response: { message: 'Bad request' }
        }
        moxios.wait(() => {

            let request = moxios.requests.mostRecent()
            request.reject(errorResp)

        })

        return storeData.dispatch(getusers())
        .then(()=>{
            const actions = storeData.getActions();
            console.log("error action",actions);
            expect(actions[1].type).toEqual(USERS_ERROR);
        })
     })    

        it('updated state.countries', () => {

            moxios.wait(() => {
                const request = moxios.requests.mostRecent();
                request.respondWith({ status: 200, response: expectedState });
            });
            return store.dispatch(getusers(continent))
                .then(() => {
                    // console.log(store.getState());
                    let { users } = store.getState().users;

                    expectedState = expectedState.map(item => item.name.common)

                    let bool = users == expectedState;

                    expect(bool).toBeTrue;

                })
        });


        it('Should reject the request', () => {

            const errorResp = {
                status: 404,
                response: { message: 'Bad request' }
            }
            moxios.wait(() => {

                let request = moxios.requests.mostRecent()
                request.reject(errorResp)

            })
            return store.dispatch(getusers("")).then(() => {
                console.log(store.getState());

                const error = store.getState().users.error;

                expect(error).toEqual(errorResp.response.message);

            })
        });

        it('Should reject the request', () => {

            const errorResp = {
                status: 400,
                response: { message: 'Invalid Data' }
            }
            moxios.wait(() => {

                let request = moxios.requests.mostRecent()

                request.reject(errorResp)

            })
            return store.dispatch(getusers("")).then(() => {

                console.log(store.getState());

                const error = store.getState().users.error;

                expect(error).toEqual(errorResp.response.message);

            })
        });
    });

});