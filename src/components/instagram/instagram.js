import React from "react"

import "./instagram.scss"

const size320x320 = 2

export const Instagram = ({ data }) => {
  return (
    <div>
      <h2 className="section-title">Noticias</h2>
      <div className="Instagram">
        {data.map((item, index) => {
          return (
            <a
              className="Post"
              key={index}
              href={`https://www.instagram.com/p/${item.node.id}/`}
            >
              <div className="description">{item.node.caption}</div>
              <img
                alt={item.node.caption}
                src={item.node.thumbnails[size320x320].src}
              />
            </a>
          )
        })}
      </div>
    </div>
  )
}
