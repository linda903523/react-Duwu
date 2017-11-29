export default function MyReducer(state = {}, action){
    var reState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case 'BeforeRequest':
            reState.loading = true;
            break;
        case 'browse2':
            reState.loading = false;
            reState.dataset = action.dataset;
            break;
        default:
            reState.loading = false;
    }  
    return reState ;
}