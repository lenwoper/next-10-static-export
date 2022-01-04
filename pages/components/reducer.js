export const initialState={
    data:[]
}




export default (state , action)=>{


    switch(action.type){
        case 'ADD_DATA':
        return{
            ...state,
            data:[...state.data , action.item]

        }
        break;



        default:
            return state;
    }


}