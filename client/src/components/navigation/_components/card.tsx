'use client'

import Link from "next/link"

export interface MenuCardStyle {
    content: any
    href: string
}


const MenuCard = ( {href, content}:MenuCardStyle) => {
    return (
        <Link href={href}>
                <div className="cursor-pointer hover:scale-110 transition-all duration-150">{content}</div>
        </Link>
    )
}


export default MenuCard