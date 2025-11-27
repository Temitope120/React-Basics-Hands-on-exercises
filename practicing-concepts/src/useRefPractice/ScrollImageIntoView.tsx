import React, { useRef } from 'react'

const ScrollImageIntoView = () => {
    const imageListRef = useRef<HTMLUListElement | null>(null);

    function scrollToIndex(index: number) {
        const imageListNode = imageListRef.current;

        if (imageListNode) {
            const images = imageListNode.querySelectorAll<HTMLImageElement>('li > img');            
            const imageNode = images[index] ?? null

            if (imageNode) {
                imageNode.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                })
            }
        }


    }

    return (
        <>
            <p className='font-bold text-2xl py-6'> Scroll Image Into View with UseRef</p>
            <nav className="w-full flex ">
                <button onClick={() => scrollToIndex(0)}>
                    Neo
                </button>
                <button onClick={() => scrollToIndex(1)}>
                    Millie
                </button>
                <button onClick={() => scrollToIndex(2)}>
                    Bella
                </button>
                <button onClick={() => scrollToIndex(3)}>
                    Leo
                </button>
                <button onClick={() => scrollToIndex(4)}>
                    Luna
                </button>
                <button onClick={() => scrollToIndex(5)}>
                    Charlie
                </button>
            </nav>
            <div className="w-full flex justify-center">
                <ul
                    ref={imageListRef}
                    className="flex gap-4 overflow-x-auto snap-x snap-mandatory px-4 py-4 max-w-3xl mx-auto"
                >
                    <li className="snap-start shrink-0">
                        <img
                            src="https://placecats.com/neo/300/200"
                            alt="Neo"
                            className="rounded-lg object-cover w-72 h-48"
                        />
                    </li>

                    <li className="snap-start shrink-0">
                        <img
                            src="https://placecats.com/millie/200/200"
                            alt="Millie"
                            className="rounded-lg object-cover w-48 h-48"
                        />
                    </li>

                    <li className="snap-start shrink-0">
                        <img
                            src="https://placecats.com/bella/199/200"
                            alt="Bella"
                            className="rounded-lg object-cover w-48 h-48"
                        />
                    </li>

                    <li className="snap-start shrink-0">
                        <img
                            src="https://images.unsplash.com/photo-1561948955-570b270e7c36?w=600&auto=format&fit=crop&q=60"
                            alt="Leo"
                            className="rounded-lg object-cover w-72 h-48"
                        />
                    </li>

                    <li className="snap-start shrink-0">
                        <img
                            src="https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=600&auto=format&fit=crop&q=60"
                            alt="Luna"
                            className="rounded-lg object-cover w-72 h-48"
                        />
                    </li>

                    <li className="snap-start shrink-0">
                        <img
                            src="https://images.unsplash.com/photo-1503777119540-ce54b422baff?w=600&auto=format&fit=crop&q=60"
                            alt="Charlie"
                            className="rounded-lg object-cover w-72 h-48"
                        />
                    </li>
                </ul>
            </div>

        </>

    )
}

export default ScrollImageIntoView
