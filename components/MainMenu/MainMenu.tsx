import Link from 'next/link';
import { FaSun, FaStore } from 'react-icons/fa';
import ButtonLink from '../ButtonLink/buttonLink';
export const MainMenu = ({ items, callToActionDestination, callToActionLabel }) => {
    console.log('calltoactionlabel', callToActionDestination, callToActionLabel)
    return (
        <div className="bg-slate-800 text-white px-5 h-[64px] sticky top-0 z-20 flex">
            <div className="py-4 pl-5 flex text-pink-600">
                <FaStore size={30} />
                <FaSun size={30} />
            </div>
            <div className="flex flex-1 justify-end">
                {(items || []).map((item) => (
                    <div key={item.id} className="hover:bg-slate-700 cursor-pointer relative group">
                        <div>
                            <Link href={item.destination} className="p-5 block">
                                {item.label}
                            </Link>
                        </div>
                        {!!item.subMenuItems?.length && (<div className="group-hover:block hidden bg-slate-800 text-right absolute right-0 top-full -mt-3"> {
                            item.subMenuItems.map(subMenuItem => (
                                <Link className="block whitespace-nowrap p-5 hover:bg-slate-700" key={subMenuItem.id} href={subMenuItem.destination}>
                                    {subMenuItem.label}
                                </Link>
                            ))
                        } </div>)}
                    </div>)
                )}
                <div className="ml-3 my-auto">
                    <ButtonLink destination={callToActionDestination} label={callToActionLabel} />
                </div>
            </div>
        </div >
    );
}

