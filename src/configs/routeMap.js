import UploadExcels from "../views/uploadExcels/uploadExcels"
import UserList from "../views/UserList"
import NotFound from "../views/error/404"


export const routes = [
    {
        path: '/form',
        component: UploadExcels 
    },
    {
        path: '/userList',
        component: UserList
    },
    {
        path: '/error/404',
        component: NotFound
    }
]