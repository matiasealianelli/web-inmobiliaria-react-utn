import "./linkNavBar.css"

export default   function LinkNav({ enlace, hrefLink , className}) {
    return (
      <a href={hrefLink} className={className}>
        {enlace}
      </a>
    );
  }