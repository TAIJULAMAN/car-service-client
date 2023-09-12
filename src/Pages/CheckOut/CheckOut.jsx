import { useLoaderData } from "react-router-dom";

const CheckOut = () => {
const service = useLoaderData()
const {title ,img,_id,price} = service
  return (
   <div>
    <h2 className="text-center text-3xl">Book Service: {title} </h2>
   </div>
  );
};

export default CheckOut;







 // <div>
    //  
      {/* <form>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> */}
          {/* <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              defaultValue={user?.displayName}
              name="name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input type="date" name="date" className="input input-bordered" />
          </div> */}
 {/* ..........................user mail.................................. */}
          {/* <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              name="email"
              defaultValue={user?.email}
              placeholder="email"
              className="input input-bordered"
            />
          </div> */}
  {/* .......................price of service....................... */}
          {/* <div className="form-control">
            <label className="label">
              <span className="label-text">Price of Service</span>
            </label>
            <input
              type="text"
              defaultValue={"$" + price}
              className="input input-bordered"
            />
          </div> */}
          // </div>

          {/* ........................submit button.......................... */}
                {/* <div className="form-control mt-6">
                  <input
                    className="btn btn-primary btn-block"
                    type="submit"
                    value="Order Confirm"
                  />
                </div> */}
        
            //   </form>
            // </div>
