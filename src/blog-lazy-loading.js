import { Suspense } from "react";
import { Await, useAsyncValue, useLoaderData } from "react-router";
import { NavLink } from "react-router-dom";

export default function BlogLazy() {
    const { posts } = useLoaderData();

    return (
        <div>
            Blog
            <Suspense fallback={<div>loading...</div>}>
                <Await
                    resolve={posts}
                >
                    <PostsList />
                </Await>
            </Suspense>
        </div>
    );
}

function PostsList() {
    const posts = useAsyncValue();

    return (
        <ul>
            {posts.map(post => (
                <li key={post.id}>
                    <NavLink to={`/blog/${post.id}`}>{post.title}</NavLink>
                </li>
            ))}
        </ul>
    );
}
