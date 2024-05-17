/* eslint-disable react/prop-types */

function SearchBar({place}) {
    return (
        <>
            <input type="text" className="form-control rounded-5" style={{ background: "#dde6ed", letterSpacing: "3px" }} placeholder={`Enter ${place}`} />
            <button className="btn-success btn px-5 d-flex align-items-center gap-3">Search</button>
        </>
    )
}

export default SearchBar