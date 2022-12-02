/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

export default function Paginations({ setpage, page }) {
  const next = () => {
    setpage(page + 1);
  };

  const back = () => {
    if (page > 1) {
      setpage(page - 1);
    } else {
      return;
    }
  };

  return (
    <div>
      <ul className="pagination">
        <li>
          <a href="#" onClick={() => back()}>
            «
          </a>
        </li>
        <li>
          {page === 1 && (
            <a
              href="#"
              style={{
                border: "solid 1px",
                borderRadius: "100%",
                backgroundColor: "red",
              }}
            >
              1
            </a>
          )}
          {page !== 1 && <a href="#">1</a>}
        </li>
        <li>
          {page === 2 && (
            <a
              href="#"
              style={{
                border: "solid 1px",
                borderRadius: "100%",
                backgroundColor: "red",
              }}
            >
              2
            </a>
          )}
          {page !== 2 && <a href="#">2</a>}
        </li>
        <li>
          {page === 3 && (
            <a
              href="#"
              style={{
                border: "solid 1px",
                borderRadius: "100%",
                backgroundColor: "red",
              }}
            >
              3
            </a>
          )}
          {page !== 3 && <a href="#">3</a>}
        </li>
        <li>
          {page === 4 && (
            <a
              href="#"
              style={{
                border: "solid 1px",
                borderRadius: "100%",
                backgroundColor: "red",
              }}
            >
              4
            </a>
          )}
          {page !== 4 && <a href="#">4</a>}
        </li>
        <li>
          {page === 5 && (
            <a
              href="#"
              style={{
                border: "solid 1px",
                borderRadius: "100%",
                backgroundColor: "red",
              }}
            >
              5
            </a>
          )}
          {page !== 5 && <a href="#">5</a>}
        </li>
        <li>
          {page === 6 && (
            <a
              href="#"
              style={{
                border: "solid 1px",
                borderRadius: "100%",
                backgroundColor: "red",
              }}
            >
              6
            </a>
          )}
          {page !== 6 && <a href="#">6</a>}
        </li>
        <li>
          {page === 7 && (
            <a
              href="#"
              style={{
                border: "solid 1px",
                borderRadius: "100%",
                backgroundColor: "red",
              }}
            >
              7
            </a>
          )}
          {page !== 7 && <a href="#">7</a>}
        </li>
        <li>
          <a href="#" onClick={() => next()}>
            »
          </a>
        </li>
      </ul>
    </div>
  );
}
