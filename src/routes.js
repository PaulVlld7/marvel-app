import { Outlet, defer, useNavigation } from "react-router";
import { NavLink } from "react-router-dom";
import BlogPost from "./blog-post";
import Blog from "./blog";
import BlogLazy from "./blog-lazy-loading";


const routes =  [
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "blog",
                element: <BlogLazy />,
                loader: () => {
                    const posts = fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
                        .then(response => response.json());
                    return defer({
                        posts,
                    });
                },
            },
            {
                path: "blog/:id",
                element: <BlogPost />,
            },
            {
                path: "Contact",
                element: <div>
                    Contact
                </div>,
            }
        ],
    },
    {
        path: "*",
        element: <div>Not Found</div>,
    }
]

function Root() {
    const {state} = useNavigation();
    return (
        <>
            <header>
                <nav>
                    <NavLink to="/blog">Blog</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                </nav>
            </header>
            <div className="content">
                {state === "loading" && "Loading..."}
                <Outlet />
            </div>
            <footer>
                Footer
            </footer>
        </>
    );
}

export default routes;
