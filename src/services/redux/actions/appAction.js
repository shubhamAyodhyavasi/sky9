import { config } from '../../../constants';
import {SET_MENUS} from '../type';
import { getDaynamicPostData } from '../../services'

export const setMenus = (menus = []) => (
    {
        type: SET_MENUS,
        payload: menus
    }
)

export const getMenus = ( id = config.CATEGORY_ID_LIST.home ) => dispatchEvent => {
    console.log({
        dispatchEvent
    })
    getDaynamicPostData('getCategory', {cat_id: id})
    .then(response => {
        console.log(response.records)
        return response.records ? dispatchEvent(response.records) : {}
    }).catch(err => {
        console.error({err})
        return {}
    })
    
}