import { LoaderFunction, redirect } from "react-router";

const userDataLoader: LoaderFunction = () => {
    const userData = localStorage.getItem('userData');
    if (!userData) {
        throw redirect('/');
    }

    return null;
}

export { userDataLoader };
