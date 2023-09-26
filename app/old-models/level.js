const CoreModel = require('./coremodel');

class Level extends CoreModel {
    name;

    constructor(obj) {
        super(obj);
        this.name = obj.name;
    }

    insert() {}
    update() {}
    destroy() {}
}

module.exports = Level;
