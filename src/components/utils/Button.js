const Button = ({ href, target }) => {

    const downloadFile = () => {
        window.open(href, target);
    }

    return (
        <>
          <button className = "download" onClick = {downloadFile} > Download </button>  
        </>
    )
}

export default Button;
