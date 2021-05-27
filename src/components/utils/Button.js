import PropTypes from 'prop-types'

const Button = ( props ) => {

    const downloadFile = () => {
        window.open(props.href, props.target);
    }

    return (
        <>
          <button className = "download" onClick = {downloadFile} > Download </button>  
        </>
    )
}

Button.prototype = {
    href: PropTypes.string,
    target: PropTypes.string
}

export default Button;
