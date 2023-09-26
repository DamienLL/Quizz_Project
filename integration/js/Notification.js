class Notification {
    level;
    message;
    notif;

    constructor(level, message) {
        this.level = level;
        this.message = message;

        this.notify();
    }

    createHTML() {
        const div = document.createElement('div');
        div.innerText = this.message;
        div.classList.add('notification');
        // * Avec bootstrap, on ajoute la classe alert couplée à une des classes suivantes : alert-${level}
        div.classList.add('alert');
        div.classList.add(this.level);

        this.notif = div;
    }

    notify() {
        this.createHTML();

        document.body.append(this.notif);
        setTimeout(() => {
            document.querySelector('.notification').remove();
        }, 5000);
    }
}

export default Notification;
