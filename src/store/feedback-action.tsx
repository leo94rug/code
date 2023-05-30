import { feedbackReducer} from './feedback-slice';

export const init = () => {
    return async (dispatch) => {
        dispatch(
            feedbackReducer.init()
        );
    };
};