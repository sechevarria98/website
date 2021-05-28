import { useEffect } from 'react';

const Page = (props) => {
    useEffect(() => {
        document.title = "Website - " + props.title || "";
    }, [props.title]);
    return props.children;
};

export default Page;
