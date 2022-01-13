import Pagination from "rc-pagination";
import { FC, ReactNode } from "react";
import './pagination.css'

type props = {
    pageCount: number

    handlePageClick: () => void
}

type type = "prev" | "page" | "next" | "jump-prev" | "jump-next"

export const Paginator: FC<props> = ({ pageCount, handlePageClick }) => {

    const buttonsRender = (current: number, type: type, element: ReactNode) => {
        if (type === 'prev') {
            return <>
                <svg viewBox="0 0 110 110" width={17} height={17} style={{ transform: 'rotate(180deg) translate(0, -1px)' }}>
                    <polyline points="55,8 105,58, 105,58 55,108"
                        stroke='white'
                        strokeWidth="12"
                        fill="none"
                    />
                    <line x1="0" y1="58" x2="100" y2="58"
                        stroke='white'
                        strokeWidth="12"
                    />
                </svg>
            </>;
        }
        if (type === 'next') {
            return <>
                <svg viewBox="0 0 110 110" width={17} height={17}>
                    <polyline points="55,8 105,58, 105,58 55,108"
                        stroke='white'
                        strokeWidth="12"
                        fill="none"
                    />
                    <line x1="0" y1="58" x2="100" y2="58"
                        stroke='white'
                        strokeWidth="12"
                    />
                </svg>
            </>;
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