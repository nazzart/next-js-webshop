"use client";

import Image from 'next/image'
import Link from 'next/link'

export default function Card(props) {
    return (
        <Link href={props.data.seoUrl} className="bg-white rounded flex flex-col md:flex-row mt-6 hover:shadow-lg transition-shadow">
            <div className="basis-1/4">
            <Image
                src={props.data.imageUrl}
                width={800}
                height={600}
                alt={props.data.seoTitle}
                className="m-auto"
                />
            </div>
            <div className="basis-1/2 flex flex-col justify-between p-7">
                <p className="text-2xl font-bold">{props.data.seoTitle}</p>
                <div className="flex flex-wrap">
                {props.data.attributes.slice(0,4).map((attribute, id) => (
                    <div className="w-1/2 mt-6" key={id}>
                        <div>
                            <span>{attribute.name}</span>
                        </div>
                        <div>
                        <span className="text-gray-500">{attribute.value}</span>
                        </div>
                    </div>
                ))}
                </div>
            </div>
            <div className="basis-1/4 p-8 flex flex-row md:justify-center items-center">
                <span>from</span> <span className="text-2xl lg:text-5xl font-bold text-secondary pl-2">{props.data.price} €</span>
            </div>
        </Link>
    )
}