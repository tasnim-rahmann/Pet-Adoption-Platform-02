import { FiPackage, } from "react-icons/fi";
import StateCard from "../components/Dashboard/StateCard";
import Order from "../components/Dashboard/Order";

export default function Dashboard() {
    return (
        <div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <StateCard icon={FiPackage} title="Total Pets" value={245} />
                <StateCard icon={FiPackage} title="Total Orders" value={685} />
                <StateCard icon={FiPackage} title="Total User" value={1200} />
                <StateCard icon={FiPackage} title="Average Review" value={4.6} />
            </div>
            {/* Order Section */}
            <Order />
        </div>
    );
}