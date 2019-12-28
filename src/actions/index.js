import OmdbApi from '../api/omdbApi';


const key='80748dc0';

export const defaulSearch=()=>async dispatch=> {
    const response = await OmdbApi.get('/',{params:{
        s:'batman',
        apikey:key
    }})
    dispatch({
        type:'DEFAULT_SEARCH',
        payload:response.data.Search
    })
    console.log(response.data)
}

export const mainSearch=formValue=>async dispatch=>{
    const response = await OmdbApi.get('/',{params:{
        s:formValue,
        apikey:key
    }})
    dispatch({
        type:'MAIN_SEARCH',
        payload:response.data.Search
    })
}

export const idSearch=id=>async dispatch=> {
    const response=await OmdbApi.get('/',{i:id,apikey:key})
    dispatch({
        type:'INDIVIDUAL_SEARCH',
        payload:response
    })
}