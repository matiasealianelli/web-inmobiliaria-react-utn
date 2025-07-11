import "./linkNavBar.css"

export default   function LinkNav({ enlaceName, hrefLink , className}) {
    return (
      <a href={hrefLink} className={className}>
        {enlaceName}
      </a>
    );
  }