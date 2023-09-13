import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';

function Panel( { children , className, ...rest} ) {
    let finalClasses 
    = classNames('border rounded p-3 shadow bg-white w-full', className)
    
    finalClasses = twMerge(finalClasses);

    return <div {...rest} className={finalClasses}>
        {children}
    </div>
}

export default Panel;