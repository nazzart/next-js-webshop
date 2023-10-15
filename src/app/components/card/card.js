"use client";

import Image from 'next/image'
import Link from 'next/link'

export default function Card(props) {

    return (
        
        <Link href="/" className="bg-white rounded flex mt-6 hover:shadow-lg transition-shadow">
            <div className="basis-1/4">
            <Image
                src="/images/Opel-Crossland.jpg"
                width={500}
                height={500}
                alt="Opel Crossland 1.2 Turbo"
                />
            </div>
            <div className="basis-1/2 flex flex-col justify-between p-8">
                <p className="text-2xl font-bold">{props.car.seoTitle}</p>
                <div className="flex flex-wrap">
                {props.car.attributes.map((attribute, id) => (
                    <div className="w-1/2 mt-6">
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
            <div className="basis-1/4 p-8 flex flex-row justify-center items-center">
                <span>from</span> <span className="text-6xl font-bold text-secondary pl-2">55 €</span>
            </div>
        </Link>
    )
}