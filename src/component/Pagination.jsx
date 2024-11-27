const Pagination = ({ total, perPage = 10 }) => {
    const totalPages = Math.ceil(total / perPage);

    return (
        <div className="pagination">
            {Array.from({ length: totalPages }, (_, i) => (
                <button key={i}>{i + 1}</button>
            ))}
        </div>
    );
};

export default Pagination;
