import ky from 'ky';

export const baseApi = ky.create({prefixUrl: 'http://localhost:8089/api/ToDoList/'});
