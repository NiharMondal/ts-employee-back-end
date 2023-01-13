"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectOccupation = exports.selectOptions = exports.nav = exports.DRAWER_WIDTH = void 0;
//drawer width
exports.DRAWER_WIDTH = 300;
exports.nav = [
    {
        title: "Add Users",
        path: "/admin/add",
    },
];
exports.selectOptions = [
    { label: "User", value: "user" },
    { label: "Moderator", value: "moderaton" },
    { label: "Editor", value: "editor" },
];
exports.selectOccupation = [
    { label: "Web Developer", value: "web developer" },
    { label: "Software Engeneer", value: "software engeneer" },
    { label: "Doctor", value: "doctor" },
    { label: "Ethical Hacker", value: "ethical hacker" },
];
