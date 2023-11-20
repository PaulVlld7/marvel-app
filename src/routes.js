import Layout from "./Layout";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import CharactersPage from "./pages/CharactersPage";

<<<<<<< HEAD
import CharacterDetailPage from "./pages/CharacterDetailPage";
import { getCharacterById, getCharacters } from "./api/character-api";

=======
>>>>>>> 1f124a4514f449bdbb94bcc8f9e7ca35f6538712
const routes = [
    {
        path: "/",
        element: <Layout />,
        children: [
<<<<<<< HEAD
            {
                path: "/",
                element: <CharactersPage />,
                loader: () => getCharacters(),
            },
            {
                path: "/characters/:id",
                element: <CharacterDetailPage />,
                loader: ({ params }) => getCharacterById(params.id),
            },
            { 
                path: "/about", 
                element: <AboutPage /> 
            },
            { 
                path: "/contact", 
                element: <ContactPage /> 
            },
=======
            { path: "/", element: <CharactersPage /> },
            { path: "/about", element: <AboutPage /> },
            { path: "/contact", element: <ContactPage /> },
>>>>>>> 1f124a4514f449bdbb94bcc8f9e7ca35f6538712
        ],
    },
];

<<<<<<< HEAD
export default routes;
=======
export default routes;
>>>>>>> 1f124a4514f449bdbb94bcc8f9e7ca35f6538712
