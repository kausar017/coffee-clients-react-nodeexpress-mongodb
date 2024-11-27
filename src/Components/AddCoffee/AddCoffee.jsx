import Swal from 'sweetalert2'

const AddCoffee = () => {

    const handalSubmit = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const newCoffee = { name, chef, supplier, taste, category, details, photo }
        // console.log(newCoffee);
        fetch('http://localhost:5000/coffee', {
            method: 'POST',
            headers: {
                "content-type": 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'success!',
                        text: 'user successfuly Added',
                        icon: 'success',
                        confirmButtonText: 'close'
                    })
                }
            })
            .catch(error => console.log(error))
    }



    return (
        <div className="container mx-auto bg-[#F4F3F0] py-10">
            <div className="max-w-[800px] mx-auto text-center p-3">
                <h1 className="text-4xl font-bold text-[#331A15] font-rancho ">Add New Coffee</h1>
                <p>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout.
                    The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            </div>
            <form onSubmit={handalSubmit} className="">
                <div className="md:grid grid-cols-12 justify-around items-center gap-5 px-20">
                    <label className="form-control col-span-6">
                        <div className="label">
                            <span className="label-text">Name</span>
                        </div>
                        <input type="text" placeholder="name" name="name" className="input rounded-none w-full " />
                    </label>
                    <label className="form-control col-span-6">
                        <div className="label">
                            <span className="label-text">Chef</span>
                        </div>
                        <input type="text" placeholder="Enter coffee chef" name="chef" className="input rounded-none w-full" />
                    </label>
                </div>
                <div className="md:grid grid-cols-12 justify-around items-center gap-5 px-20">
                    <label className="form-control col-span-6">
                        <div className="label">
                            <span className="label-text">Supplier</span>
                        </div>
                        <input type="text" placeholder="Enter coffee supplier" name="supplier" className="input rounded-none w-full " />
                    </label>
                    <label className="form-control col-span-6">
                        <div className="label">
                            <span className="label-text">Taste</span>
                        </div>
                        <input type="text" placeholder="Enter coffee taste" name="taste" className="input rounded-none w-full" />
                    </label>
                </div>
                <div className="md:grid grid-cols-12 justify-around items-center gap-5 px-20">
                    <label className="form-control col-span-6">
                        <div className="label">
                            <span className="label-text">Category</span>
                        </div>
                        <input type="text" placeholder="Enter coffee category" name="category" className="input rounded-none w-full " />
                    </label>
                    <label className="form-control col-span-6">
                        <div className="label">
                            <span className="label-text">Details</span>
                        </div>
                        <input type="text" placeholder="Enter coffee details" name="details" className="input rounded-none w-full" />
                    </label>
                </div>

                <div>
                    <label className="form-control px-20">
                        <div className="label">
                            <span className="label-text">Photo</span>
                        </div>
                        <input type="url" placeholder="Enter photo URL" name="photo" className="input rounded-none w-full" />
                    </label>
                    <div className="px-20 py-5">
                        <button className="btn w-full bg-[#D2B48C] border-2 border-[#331A15] text-[#331A15] font-rancho">Add Coffee</button>
                    </div>
                </div>
            </form>

        </div>
    );
};

export default AddCoffee;