import { feedbackReducer, FeedbackAction } from './feedback-slice';

import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState } from './index';


export default FeedbackAction;

export const init: ActionCreator<ThunkAction<void, RootState, null, FeedbackAction>> = () => {
    return async (dispatch) => {
        dispatch(
            feedbackReducer.init({})
        );
    };
};