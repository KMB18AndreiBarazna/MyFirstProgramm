import * as axios from "axios";

const instance= axios.create({
    withCredentials: true,
    baseURL:`https://social-network.samuraijs.com/api/1.0/`,
    headers: {'API-KEY' : 'c95f7d37-af6b-481a-a11f-46f3324c1899'}
});

export const usersAPI={
    getUsers(currentPage=1, pageSize=5) {
        return  instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId) {
        return ProfileAPI.getProfile(userId)
    }
};

export const ProfileAPI= {
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status: status})
    }
};

export const authAPI={
    me() {
        return instance.get(`auth/me`)
    },
    login(email, password, rememberMe=false) {
        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    logout() {
        return instance.delete(`auth/login`)
    }
};

export const dialogsAPI= {
    getDialogs() {
        return  instance.get(`dialogs`)
            .then(res=> {
                return res.data
            })
    },
    startDialog(userId) {
        return instance.put(`dialogs/${userId}`)
            .then(res=>res.data)
    },
    getMessages(userId) {
        return instance.get(`dialogs/${userId}/messages`)
            .then(res=> {
                return res.data.items
            })
    },
    sendMessage(userId, body) {
        return instance.post(`dialogs/${userId}/messages`, {body})
            .then(res=>res.data)
    }
};


