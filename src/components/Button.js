import classnames from 'classnames';
import { twMerge } from "tailwind-merge";

function Button(
    {   
        children,
        primary,
        secondary,
        success,
        danger,
        warning,
        outline,
        rounded,
        className,
        ...rest
    }) {
    
    let classes = classnames(
        'px-3', 'py-1.5', 'border','flex', 'items-center', className,
    {
        'border-blue-600 bg-blue-500 text-white': primary,
        'border-gray-900 bg-gray-800 text-white': secondary,
        'border-green-600 bg-green-500 text-white': success,
        'border-yellow-500 bg-yellow-400 text-white': warning,
        'border-red-600 bg-red-500 text-white': danger,
        'rounded-full': rounded,
        "text-white":
      !outline && (primary || secondary || success || warning || danger),
        'bg-white': outline,
        'text-blue-600': outline && primary,
        'text-gray-900': outline && secondary,
        'text-green-600': outline && success,
        'text-yellow-500': outline && warning,
        'text-red-600': outline && danger
    });

    classes = twMerge(classes);

    return (
        <>
            <button {...rest} className={classes}>{children}</button>
        </>
    );
}

Button.propTypes = {
    checkButtonType: ( {primary, secondary, success, warning, danger} ) => {
        const count 
        = Number(!!primary) 
        + Number(!!secondary) 
        + Number(!!success) 
        + Number(!!warning) 
        + Number(!!danger);
        if (count > 1) {
            return new Error("Only one button type can be selected");
        }
    }
}




export default Button;