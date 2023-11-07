import React, { FC } from "react";
import ReactPaginate from "react-paginate";

type PaginacionProps = {
    pagina: number;
    totalPages: number;
    onPageChange: (selectedPage: number) => void;
};

const Paginacion: FC<PaginacionProps> = ({ pagina, totalPages, onPageChange }) => {
    const handlePageChange = (selectedPage: { selected: number }) => {
        onPageChange(selectedPage.selected + 1);
    };

    return (
        <div className="mb-7">
            <ReactPaginate
                className="flex gap-7 align-middle items-center"
                pageCount={totalPages}
                pageRangeDisplayed={5}
                marginPagesDisplayed={2}
                initialPage={pagina - 1}
                onPageChange={handlePageChange}
                disableInitialCallback={true}

                previousLabel={<button><span className="material-symbols-outlined items-center align-middle">arrow_left</span></button>}
                nextLabel={<button><span className="material-symbols-outlined items-center align-middle">arrow_right</span></button>}
                breakLabel={". . ."}
                activeClassName={"rounded w-6 h-6 bg-[#DE1036] text-white font-semibold rounded flex justify-center"}
                previousClassName={"bg-[#DE1036] text-white font-semibold rounded"}
                nextClassName={"bg-[#DE1036] text-white font-semibold rounded"}

            />
        </div>
    );
};

export { Paginacion };
