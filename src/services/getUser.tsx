import {User} from "../models/user";
import index from "../api";

export function getUser() {
    return index.get<User>('/')
}