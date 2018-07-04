import axios from 'axios';

export function getUrls() {
    return new Promise((resolve, reject) => {
        axios.get('/'
        ).then((res) => {
            resolve(res);
        }).catch((err) => {
            reject(err);
        });
    });
}

export function redirectUrl(redirectIdUrl) {
    return new Promise((resolve, reject) => {
        axios.get(`/${redirectIdUrl}`
        ).then((res, req) => {
            resolve(res);
        }).catch((err) => {
            reject(err);
        });
    });
}

export function addUrl(urls) {
    return new Promise((resolve, reject) => {
        axios.post('/url', {
            ...urls
        }).then((res) => {
            resolve(res);
        }).catch((err) => {
            reject(err);
        });
    });
}

export function deleteUrl(deleteIdUrl) {
    return new Promise((resolve, reject) => {
        axios.delete(`/urlid/${deleteIdUrl}`
        ).then((res) => {
            resolve(res);
        }).catch((err) => {
            reject(err);
        });
    });
}

export function editUser(user, editIdUser) {
    return new Promise((resolve, reject) => {
        axios.patch(`/urls/${editIdUser}`, {
            ...user
        }).then((res) => {
            resolve(res);
        }).catch((err) => {
            reject(err);
        });
    });
}