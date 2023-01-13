"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAddUserMutation = exports.useGetAllUsersQuery = exports.usersApi = void 0;
const react_1 = require("@reduxjs/toolkit/query/react");
const BASE_URL = "http://localhost:4000/api/v1/users/";
exports.usersApi = (0, react_1.createApi)({
    reducerPath: "usersApi",
    baseQuery: (0, react_1.fetchBaseQuery)({ baseUrl: BASE_URL }),
    tagTypes: ["Users"],
    endpoints: (builder) => ({
        //------------
        //get all users
        getAllUsers: builder.query({
            query: () => "users",
            providesTags: ["Users"],
        }),
        //add user
        addUser: builder.mutation({
            query: (user) => {
                console.log(user);
                return {
                    url: "/add-user",
                    method: "post",
                    body: user,
                };
            },
        }),
    }),
});
exports.useGetAllUsersQuery = exports.usersApi.useGetAllUsersQuery, exports.useAddUserMutation = exports.usersApi.useAddUserMutation;
