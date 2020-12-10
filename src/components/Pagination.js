import React from 'react';

const Pagination = ({ postsPerPage, TotalPosts, paginate }) => {
    const pageNumbers = [];
    for(let i =1; i <= Math.ceil(TotalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <nav>
            <ul id="list-pages">
                {pageNumbers.map(number => (
                    <li key={number}>
                        <a onClick={() => paginate(number)} href="!#">{number}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination;
