import { Link } from "react-router-dom";
import { useLoan } from "../Hooks/useLoan";

export const ChooseBank = () => {
    const { banks } = useLoan();

    const images = ["b1.png", "b2.jpeg", "b3.jpeg", "b4.jpeg", "b5.jpeg"];

    function getImage() {
        return `/assets/${images[Math.floor(Math.random() * (images.length - 1))]}`;
    }

    if (banks.isLoading) return <div>Loading events details please wait...</div>;

    if (banks.isError)
        return (
            <div>
                Error occurred while loading Events <pre>{JSON.stringify(banks.error, null, 4)}</pre>
            </div>
        );

    return (
        <div className="">
            <div className="px-4">
                {/* @ts-ignore */}
                <Link to={-1} className="btn btn-ghost">
                    Back
                </Link>
            </div>
            <div className="flex flex-wrap gap-4 items-stretch justify-evenly ">
                {banks?.data?.map((bank) => {
                    return (
                        <Link to={bank.name} className="card w-[30%] bg-base-100 shadow-xl image-full">
                            <figure>
                                <img src={getImage()} alt="Shoes" />
                            </figure>
                            <div className="card-body flex items-center justify-center">
                                <h2 className="card-title m-auto w-full">{bank.name}</h2>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};
