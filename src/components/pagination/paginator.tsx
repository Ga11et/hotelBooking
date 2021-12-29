import Pagination from "rc-pagination";
import { FC, ReactNode } from "react";
import './pagination.css'
import leftArrow from '../../assets/whiteLeftArrow.svg'
import rightArrow from '../../assets/whiteRightArrow.svg'

type props = {
    pageCount: number

    handlePageClick: () => void
}

type type = "prev" | "page" | "next" | "jump-prev" | "jump-next"

export const Paginator: FC<props> = ({ pageCount, handlePageClick }) => {

    const buttonsRender = (current: number, type: type, element: ReactNode) => {
        if (type === 'prev') {
            return <img src={leftArrow} alt="left" />;
        }
        if (type === 'next') {
            return <img src={rightArrow} alt="right" />;
        }
        if (type === 'jump-next' || type === 'jump-prev') {
            return <div>...</div>
        }
        return element;
    };

    return <>
        <Pagination
            showLessItems
            pageSize={12}
            itemRender={buttonsRender}
            showTotal={(total, range) =>
                `${range[0]} - ${range[1]} из ${total} вариантов аренды`
            }
            total={455}
        />
    </>
}