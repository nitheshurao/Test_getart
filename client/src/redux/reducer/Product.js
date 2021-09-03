import { CREATE } from '../constants/ActuonType';
export default (posts = [], action) => {
    switch (action.type) {

        case CREATE:
            return [...posts, action.payload];

        default:
            return posts;
    }
};;