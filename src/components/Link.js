import useNavigation from "../hooks/useNavigation";
import classnames from "classnames";
import { twMerge } from "tailwind-merge";

function Link( { to, children, className, activeClassName} ) {
    const { currentPath, navigate } = useNavigation();

    let classes = classnames(
        'text-blue-500',
        className,
        currentPath === to && activeClassName
    );
    classes = twMerge(classes);

    const handleClick = (event) => {
        if (event.metaKey || event.ctrlKey) {
            return ;
        } 
        event.preventDefault();
        navigate(to);
    }
    return <a className={classes} href={to} onClick={handleClick}>{children}</a>
}

export default Link;