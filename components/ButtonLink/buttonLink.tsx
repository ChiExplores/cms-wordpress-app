import Link from "next/link";

const ButtonLink = ({ destination, label }) => {
    return (
        <Link href={destination}>
            <div className='btn'>
                {label}
            </div>
        </Link>);
}

export default ButtonLink;
