import { FaRegEye } from "react-icons/fa";
import { LuPencil } from "react-icons/lu";
import { MdDeleteOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'

const CoffeeCard = ({ coffeeData }) => {
    // console.log(coffeeData);

    const { _id, name, chef, supplier, taste, category, details, photo } = coffeeData;
    // console.log(_id);
    
    const handalDelete = _id => {
        // console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Coffee has been deleted.",
                                icon: "success"
                            });
                        }

                    })

            }
        });
    }


    return (
        <div className="grid lg:grid-cols-2 md:grid-cols-1  md:px-10 gap-3 items-center justify-around mt-10">
            {
                coffeeData.map(coffee =>
                    <div key={coffee._id}>
                        <div className="bg-base-200 max-sm:px-20 py-5">
                            <div className="md:flex max-sm:flex-col max-sm:text-center items-center justify-around max-sm:justify-items-center">
                                <div className="">
                                    <img src={coffee.photo} className="max-w-sm rounded-lg" />
                                </div>
                                <div className="space-y-3 ">
                                    <h1 className=""><span className="font-bold">Name:</span> {coffee.name}</h1>
                                    <p className=""><span className="font-bold">chef:</span> {coffee.chef}</p>
                                    <p className=""><span className="font-bold">supplier:</span> {coffee.supplier}</p>
                                </div>
                                <div className="flex lg:flex-col md:flex-col gap-2">
                                    <button className="btn bg-[#D2B48C] btn-sm"><FaRegEye color="white" size={25}></FaRegEye ></button>
                                    <Link to={`/updatCoffee/${coffee._id}`} className="btn bg-gray-600 btn-sm"><LuPencil color="white" size={25}></LuPencil ></Link>
                                    <button onClick={() => handalDelete(coffee._id)} className="btn btn-error btn-sm"><MdDeleteOutline color="white" size={25}></MdDeleteOutline ></button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default CoffeeCard;