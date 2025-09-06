
'use strict';

module.exports = {
    load () { },
    unload () { },
    methods: {
        openPanel () {
            Editor.Panel.open('oops-plugin-protobuf');
        }
    },

    messages: {
        'openPanel' () {
            Editor.Panel.open('oops-plugin-protobuf');
        }
    }
};
