import Link from "next/link";
import React from "react";

export interface NavigationProps {

}

export const Navigation: React.FunctionComponent<NavigationProps> = ({ }) => {
    return (
        <div className="w-[256px] border-2 border-indigo-600">
            <h2>Nástěnka</h2>
            <hr />
            <div className="flex flex-col gap-1">
                <Link href="/">Domů</Link>
                <Link href="/vysledek_dotazniku">Výsledek dotazníku</Link>
            </div>
        </div>
    );
};

export default Navigation;