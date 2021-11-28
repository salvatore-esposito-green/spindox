import { useState, useEffect } from 'react';
import { Result } from '../models/user'
import {getUser} from "../services/getUser";
import {UserHookProps} from "../models/userHook";
import {convertData} from "../utils";

const useUser = ():UserHookProps => {
    const [loading, setLoading] = useState<boolean>(true)

    const [user, setUser] = useState<Result[] | undefined>();
    const [tab, _setTab] = useState<string>('')

    const [title, setTitle] = useState<string>('')
    const [subTitle, setSubtitle] = useState<string>('')

    const _initState = ():void => {
        getUser()
            .then(res => { res && setUser(res.data?.results) })
            .then(()=> _setTab('fa-user-circle-o'))
            .then(() => setLoading(false))
    }

    useEffect(() => {
        if(user) {
            const {
                cell,
                email,
                name: {first, last},
                location: {
                    city,
                    street: {
                        name: StreetName,
                        number
                    }
                },
                dob: {date},
                login: {password}
            }: Result = user[0];

            switch (tab) {
                case "fa-user-circle-o":
                    setSubtitle('Hi, my name is')
                    setTitle(`${first} ${last}`)
                    break;
                case "fa-envelope":
                    setSubtitle('My email address is')
                    setTitle(email)
                    break;
                case "fa-calendar":
                    setSubtitle('My birthday is')
                    setTitle(convertData(date))
                    break;
                case "fa-map":
                    setSubtitle('My address is')
                    setTitle(`${StreetName} ${number} (${city})`)
                    break;
                case "fa-phone":
                    setSubtitle('My phone number is')
                    setTitle(cell)
                    break;
                case "fa-lock":
                    setSubtitle('My password is')
                    setTitle(password)
                    break;
                default:
                    setSubtitle('Hi, my name is')
                    setTitle(`${first} ${last}`)
                    break;
            }
        }
    },  [tab])

    return {
        _setTab,
        tab,
        user,
        subTitle,
        title,
        loading,
        _initState
    };
};
export default useUser;