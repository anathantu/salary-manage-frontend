import SalaryForm from "../views/SalaryForm/SalaryForm"
import UserList from "../views/UserList"
import NotFound from "../views/error/404"


export const routes = [
    {
        path: '/form',
        component: SalaryForm 
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