import { reactive } from "vue";

export const state = reactive({
    notifications: [],
});

let count = 0;

const generateId = () => {
    count = count + 1;
    return count;
};

export const methods = {
    notify(notification, timeout) {
        notification.id = generateId();
        state.notifications.push(notification);
        setTimeout(() => {
            this.removeNotification(notification.id);
        }, timeout || 5000);
    },

    new(notification, timeout) {
        this.notify(notification, timeout);
    },

    success(notification, timeout) {
        this.notify(notification, timeout);
    },

    error(notification, timeout) {
        this.notify(notification, timeout);
    },

    removeNotification(id) {
        state.notifications.splice(
            state.notifications.findIndex((n) => n.id === id),
            1
        );
    },

    removeAllNotification() {
        state.notifications = [];
    },
};

export let apiNotification = {
    new: (data, timeout) => methods.new(data, timeout),
    success: (data, timeout) => methods.success(data, timeout),
    error: (data, timeout) => methods.error(data, timeout),
    remove: (id) => methods.removeNotification(id),
    removeAll: () => methods.removeAllNotification(),
};
