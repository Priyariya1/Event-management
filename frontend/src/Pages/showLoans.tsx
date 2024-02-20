import { Link } from "react-router-dom";
import { useLoan } from "../Hooks/useLoan";

export const ShowLoans = () => {
    const { loans } = useLoan();

    if (loans.isLoading) return <div>Loading data.....</div>;

    return (
        <div>
           
        <div className="w-full flex flex-col px-48 py-6 gap-4 bg-img min-h-screen">
        
            <h1 className="pb-6 text-xl font-bold text-white">Event Applications</h1>

            {loans.data?.length === 0 && (
                <div className="text-white">
                    No Applications found create one from <Link to="/new" className="text-blue-600">here</Link>
                </div>
            )}
            {loans.data?.map((loan) => {
                return (
                    <div className="w-full p-6 border-4 border-primary  rounded-md glass">
                        <div className="flex gap-5 ">
                            <span className="font-bold">Name</span>
                            <span>{loan.bank}</span>
                        </div>
                        
                        <div className="flex gap-5 ">
                            <span className="font-bold">Event Type</span>
                            <span>{loan.loan_name} </span>
                        </div>
                        <div className="flex gap-5 ">
                            <span className="font-bold">Event Location</span>
                            <span>{loan.address}</span>
                        </div>
                        <div className="flex gap-5 ">
                            <span className="font-bold">Event Duriation</span>
                            <span>{loan.duration} hours</span>
                        </div>
                        <div className="flex gap-5 ">
                            <span className="font-bold">Event status</span>
                            <span>{loan.status}</span>
                        </div>
                        <div className="flex gap-5 ">
                            <span className="font-bold">Organizer Contact</span>
                            <span>{loan.name}</span>
                        </div>
                        <div className="flex gap-5 ">
                            <span className="font-bold">No of Expected Attendees</span>
                            <span>{loan.interestRate}</span>
                        </div>
                        
                    </div>
                );
            })}
        </div>
        </div>
    );
};
