import * as axios from 'axios';

import { Todo } from './todo.interface';

const SERVER = 'https://todos-server.herokuapp.com';
const RESOURCE = '/todos';

export function findAll() {
    return axios.get<Todo[]>(SERVER + RESOURCE).
        then(_unwrapResponse);
}

export function create(todo: Todo) {
    return axios.post(SERVER + RESOURCE, todo);
}

export function update(todo: Todo) {
    return axios.put(SERVER + RESOURCE + '/' + todo.id, todo);
}

export function remove(id: string) {
    return axios.delete(SERVER + RESOURCE + '/' + id);
}

function _unwrapResponse(response): Todo[] {
    return response.data
}