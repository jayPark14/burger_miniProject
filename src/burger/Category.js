import {useEffect, useRef, useState} from "react";


const Category = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<Boolean>(false);
    const sideMenuContainerRef = useRef<HTMLDivElement>(null);
    const sideMenuBGRef = useRef<HTMLDivElement>(null);
    const menuListRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!sideMenuContainerRef || !sideMenuContainerRef.current) return;
        if (!menuListRef || !menuListRef.current) return;
        if (!sideMenuBGRef || !sideMenuBGRef.current) return;

        sideMenuContainerRef.current.style.visibility = isMenuOpen
            ? "visible"
            : "hidden";
        sideMenuBGRef.current.style.opacity = isMenuOpen ? "1" : "0";
        menuListRef.current.style.opacity = isMenuOpen ? "1" : "0";
        menuListRef.current.style.transform = `translateX(-${
            isMenuOpen ? 0 : 1
        }00%)`;
    }, [isMenuOpen]);


    return (
        <>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>메뉴</button>
            <div ref={sideMenuContainerRef}>
                <div
                    isMenuOpen={isMenuOpen}
                    ref={sideMenuBGRef}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                ></div>
                <p ref={menuListRef}>
                    <span onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        X
                    </span>

                </p>
            </div>
        </>
    )
}

export default Category;