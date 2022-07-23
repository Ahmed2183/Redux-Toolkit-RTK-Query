import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postApi = createApi({
  reducerPath: "postApi", //unique
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),

  endpoints: (builder) => ({
    getAllPost: builder.query({
      query: () => ({
        url: "posts",
        method: "GET",
      }),
    }),

    getPostById: builder.query({
      query: (id) => ({
        url: `posts/${id}`,
        method: "GET",
      }),
    }),

    getLimitPostByNum: builder.query({
      query: (num) => ({
        url: `posts?_limit=${num}`,
        method: "GET",
      }),
    }),

    deletePost: builder.mutation({
      query: (id) => {
        console.log("Delete ID:", id);
        return {
          url: `posts/${id}`,
          method: "DELETE",
        };
      },
    }),

    createPost: builder.mutation({
      query: (newPost) => {
        console.log("Create Post:",newPost);
        return {
          url: `posts`,
          method: "POST",
          body: newPost,
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        }
      },
    }),

    updatePost: builder.mutation({
        query: (updatePost) => {
          console.log("Update Post:",updatePost);
          const{id, ...data } = updatePost;
          console.log("New Updated Post:",data);
          return {
            url: `posts/${id}`,
            method: "PUT",
            body: data,
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          }
        },
      }),

  }),
});

export const {
  useGetAllPostQuery,
  useGetPostByIdQuery,
  useGetLimitPostByNumQuery,
  useDeletePostMutation,
  useCreatePostMutation,
  useUpdatePostMutation,
} = postApi;
