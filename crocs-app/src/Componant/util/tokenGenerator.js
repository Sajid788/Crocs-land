var rand = function () {
    return Math.random().toString(36).substring(2); 
};

export var tokenGenrator = function () {
    return rand() + rand(); // to make it longer
};