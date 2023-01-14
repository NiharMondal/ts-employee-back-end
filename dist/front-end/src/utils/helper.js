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
    { label: "User", value: "User" },
    { label: "Moderator", value: "Moderator" },
    { label: "Editor", value: "Editor" },
];
exports.selectOccupation = [
    { label: "Web Developer", value: "Web Developer" },
    { label: "Engineer", value: "Engineer" },
    { label: "Doctor", value: "Doctor" },
    { label: "Ethical Hacker", value: "Ethical Hacker" },
];
